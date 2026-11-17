// SEO metadata shared by the SEO component (runtime) and scripts/prerender.mjs
// (build time). Keep free of React/browser imports.
import { posts, type Post } from './blog';

export const SITE_URL = 'https://afraino.com';
export const SITE_NAME = 'Afraino';
export const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

export type PageMeta = {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    type?: 'website' | 'article';
    lang?: 'en' | 'so';
    jsonLd?: object[];
};

const HOME: PageMeta = {
    title: 'Afraino | Software & Mobile App Development Company in Somalia',
    description:
        "Afraino is a software and mobile app development company in Mogadishu, Somalia. We build iOS & Android apps, websites, AI chatbots and publish apps to Google Play and the App Store.",
    keywords:
        'Software Company in Somalia, Mobile App Development Somalia, Web Development Mogadishu, Software Development Mogadishu, Somali App Developers, Tech Company Somalia, Shirkad Software Somalia, Afraino',
};

export const staticPages: Record<string, PageMeta> = {
    '/': HOME,
    '/services': {
        title: 'Software & Mobile App Services in Somalia | Afraino',
        description:
            'Mobile apps (iOS & Android), web development, AI models & WhatsApp chatbots, UI/UX design, branding, app publishing and support for businesses in Somalia.',
        keywords: 'Software Services Somalia, App Developers Mogadishu, Web Development Somalia, AI Solutions Somalia, App Publishing Somalia',
    },
    '/portfolio': {
        title: 'Portfolio – Apps & Websites Built in Somalia | Afraino',
        description:
            'See mobile apps, websites and AI chatbots built by Afraino: Mehrad, IKEN, Kabba Real Estate, Bokhol, TECO Construction, ANFA COLLECTION and more.',
        keywords: 'Somali Mobile Apps Portfolio, Software Projects Somalia, Published Apps Somalia, Afraino Portfolio',
    },
    '/about': {
        title: 'About Afraino | Software Agency in Mogadishu, Somalia',
        description:
            'Meet the engineering, design and AI team behind Afraino, a software company headquartered in Mogadishu, Somalia, building products for clients worldwide.',
        keywords: 'About Afraino, Software Company Mogadishu, Somali Developers, Mogadishu Tech Agency',
    },
    '/contact': {
        title: 'Contact Afraino | Software Company in Mogadishu, Somalia',
        description:
            'Want to build a mobile app or website in Somalia? Contact our team in Mogadishu on WhatsApp or email for a free consultation and a project quote.',
        keywords: 'Contact Software Company Somalia, Hire Developers Mogadishu, App Development Quote Somalia',
    },
    '/book': {
        title: 'Book a Free Consultation | Afraino Somalia',
        description:
            'Book a free consultation with Afraino to plan your mobile app, website or AI project. We reply fast on WhatsApp.',
        keywords: 'Book Tech Consultation Somalia, Software Consultation Mogadishu, Mobile App Strategy',
    },
    '/blog': {
        title: 'Blog – Apps, Websites & AI for Somali Businesses | Afraino',
        description:
            'Practical guides on mobile app development, websites, AI chatbots, EVC Plus payments and app publishing for businesses in Somalia.',
        keywords: 'mobile app development Somalia blog, tech guides Somalia, app development tips Mogadishu',
    },
};

const breadcrumb = (items: { name: string; path: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        item: `${SITE_URL}${it.path}`,
    })),
});

const absolute = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

// Social networks can't show SVG, so share the PNG version of animated covers
const shareImage = (cover: string) => absolute(cover.replace(/\.svg$/, '.png'));

export const postMeta = (post: Post): PageMeta => ({
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords.join(', '),
    image: shareImage(post.cover),
    type: 'article',
    lang: post.lang,
    jsonLd: [
        {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: shareImage(post.cover),
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            inLanguage: post.lang,
            keywords: post.keywords.join(', '),
            author: { '@type': 'Organization', name: post.author, url: SITE_URL },
            publisher: { '@id': `${SITE_URL}/#organization` },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: post.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
        },
        breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
        ]),
    ],
});

// Resolve metadata for any path (unknown paths fall back to home)
export const metaForPath = (pathname: string): PageMeta => {
    const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    if (path === '/home') return HOME;
    const m = path.match(/^\/blog\/([^/]+)$/);
    if (m) {
        const post = posts.find((p) => p.slug === m[1]);
        if (post) return postMeta(post);
    }
    return staticPages[path] ?? HOME;
};

// Every URL that should be prerendered and listed in the sitemap
export const allPaths = (): string[] => [
    ...Object.keys(staticPages),
    ...posts.map((p) => `/blog/${p.slug}`),
];
