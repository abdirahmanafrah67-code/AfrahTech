import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metaForPath, SITE_URL, DEFAULT_IMAGE } from '../data/seo';

const setMeta = (selector: string, attr: 'name' | 'property', key: string, value: string) => {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', value);
};

// Keeps <head> in sync on client-side navigation. The same metadata is also
// written into static HTML at build time by scripts/prerender.mjs.
export default function SEO() {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = metaForPath(pathname);
        const url = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;
        const image = meta.image ?? DEFAULT_IMAGE;

        document.title = meta.title;
        document.documentElement.lang = meta.lang ?? 'en';

        setMeta('meta[name="description"]', 'name', 'description', meta.description);
        if (meta.keywords) setMeta('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
        setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
        setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
        setMeta('meta[property="og:url"]', 'property', 'og:url', url);
        setMeta('meta[property="og:type"]', 'property', 'og:type', meta.type ?? 'website');
        setMeta('meta[property="og:image"]', 'property', 'og:image', image);
        setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
        setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
        setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);

        const canonical = document.head.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', url);

        // Page-specific structured data (articles, FAQ, breadcrumbs)
        document.getElementById('page-jsonld')?.remove();
        if (meta.jsonLd?.length) {
            const s = document.createElement('script');
            s.type = 'application/ld+json';
            s.id = 'page-jsonld';
            s.textContent = JSON.stringify(meta.jsonLd);
            document.head.appendChild(s);
        }
    }, [pathname]);

    return null;
}
