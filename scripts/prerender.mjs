// Build-time SEO: after `vite build`, write a static HTML file for every page
// and blog post with the correct <title>, meta tags, canonical URL, JSON-LD
// and (for blog posts) the full article text inside #root. Google sees real
// content without running JavaScript; React then replaces #root as usual.
// Also regenerates dist/sitemap.xml from the same list of pages.
import { build } from 'esbuild';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

// Bundle the shared TS data modules into a temporary ESM file we can import
const tmp = join(root, 'node_modules', '.cache', 'prerender', 'data.mjs');
await build({
    stdin: {
        contents: "export * from './src/data/seo.ts'; export * from './src/data/blog.ts'; export * from './src/data/servicePages.ts'; export * from './src/data/caseStudies.ts';",
        resolveDir: root,
        loader: 'ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: tmp,
    logLevel: 'silent',
});
const data = await import(pathToFileURL(tmp).href + `?t=${Date.now()}`);
const { SITE_URL, DEFAULT_IMAGE, metaForPath, allPaths, posts, sortedPosts, bodyHtml, servicePages, servicePageHtml, caseStudies, caseStudyHtml } = data;

const template = await readFile(join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const replaceMeta = (html, attr, key, value) => {
    const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`, 's');
    if (re.test(html)) return html.replace(re, `$1${esc(value)}$2`);
    return html.replace('</head>', `  <meta ${attr}="${key}" content="${esc(value)}" />\n</head>`);
};

// Static, crawlable body content for each page
const staticBody = (path) => {
    const post = posts.find((p) => `/blog/${p.slug}` === path);
    if (post) {
        return `<article><h1>${esc(post.title)}</h1><p>${esc(post.description)}</p>` +
            `<p>${esc(post.author)} · <time datetime="${post.date}">${post.date}</time></p>` +
            `<img src="${post.cover}" alt="${esc(post.coverAlt)}" />` +
            bodyHtml(post) +
            `<h2>FAQ</h2>` + post.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('') +
            `<p><a href="/book">Book a free consultation</a></p></article>`;
    }
    const svc = servicePages.find((s) => `/${s.slug}` === path);
    if (svc) return servicePageHtml(svc);
    const cs = caseStudies.find((c) => `/portfolio/${c.slug}` === path);
    if (cs) return caseStudyHtml(cs);
    if (path === '/services') {
        return `<h1>Services</h1><ul>` +
            servicePages.map((s) => `<li><a href="/${s.slug}">${esc(s.title)}</a><p>${esc(s.description)}</p></li>`).join('') +
            `</ul>`;
    }
    if (path === '/portfolio') {
        return `<h1>Portfolio</h1><h2>Case studies</h2><ul>` +
            caseStudies.map((c) => `<li><a href="/portfolio/${c.slug}">${esc(c.title)}</a><p>${esc(c.summary)}</p></li>`).join('') +
            `</ul>`;
    }
    if (path === '/blog') {
        return `<h1>Blog</h1><ul>` +
            sortedPosts.map((p) => `<li><a href="/blog/${p.slug}">${esc(p.title)}</a><p>${esc(p.description)}</p></li>`).join('') +
            `</ul>`;
    }
    const m = metaForPath(path);
    return `<h1>${esc(m.title)}</h1><p>${esc(m.description)}</p>`;
};

const nav = `<nav><a href="/">Home</a> <a href="/services">Services</a> <a href="/portfolio">Portfolio</a> <a href="/about">About</a> <a href="/blog">Blog</a> <a href="/contact">Contact</a> <a href="/book">Book a consultation</a> ` +
    servicePages.map((s) => `<a href="/${s.slug}">${esc(s.eyebrow)}</a>`).join(' ') + `</nav>`;

for (const path of allPaths()) {
    const meta = metaForPath(path);
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const image = meta.image ?? DEFAULT_IMAGE;
    let html = template;

    html = html.replace(/<html lang="[^"]*"/, `<html lang="${meta.lang ?? 'en'}"`);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
    html = replaceMeta(html, 'name', 'title', meta.title);
    html = replaceMeta(html, 'name', 'description', meta.description);
    if (meta.keywords) html = replaceMeta(html, 'name', 'keywords', meta.keywords);
    html = replaceMeta(html, 'property', 'og:type', meta.type ?? 'website');
    html = replaceMeta(html, 'property', 'og:url', url);
    html = replaceMeta(html, 'property', 'og:title', meta.title);
    html = replaceMeta(html, 'property', 'og:description', meta.description);
    html = replaceMeta(html, 'property', 'og:image', image);
    html = replaceMeta(html, 'name', 'twitter:url', url);
    html = replaceMeta(html, 'name', 'twitter:title', meta.title);
    html = replaceMeta(html, 'name', 'twitter:description', meta.description);
    html = replaceMeta(html, 'name', 'twitter:image', image);
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);

    if (meta.jsonLd?.length) {
        const json = JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c');
        html = html.replace('</head>', `  <script type="application/ld+json" id="page-jsonld">${json}</script>\n</head>`);
    }

    // Minimal styling so the static text looks tidy for the moment before React loads
    const style = `<style>#root>nav{display:none}#root>main{max-width:720px;margin:96px auto;padding:0 16px;font:17px/1.6 Inter,system-ui,sans-serif;color:#0A2E28}#root>main img{max-width:100%;height:auto;border-radius:16px}#root>main a{color:#1a7a1a}</style>`;
    html = html.replace('</head>', `  ${style}\n</head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${nav}<main>${staticBody(path)}</main></div>`);

    const out = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html');
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
}

// Sitemap
const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.startsWith('/blog/') ? '0.7' : p === '/book' || p === '/contact' ? '0.8' : '0.9');
const lastmod = (p) => posts.find((x) => `/blog/${x.slug}` === p)?.updated ?? posts.find((x) => `/blog/${x.slug}` === p)?.date ?? today;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths().map((p) => `  <url>
    <loc>${SITE_URL}${p === '/' ? '/' : p}</loc>
    <lastmod>${lastmod(p)}</lastmod>
    <priority>${priority(p)}</priority>
  </url>`).join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await rm(dirname(tmp), { recursive: true, force: true });

console.log(`prerender: ${allPaths().length} pages + sitemap.xml`);
