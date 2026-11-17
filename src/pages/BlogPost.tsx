import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { getPost, sortedPosts, readingMinutes, inlineHtml, type Block } from '../data/blog';

const formatDate = (iso: string, lang: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString(lang === 'so' ? 'so-SO' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

// Content is our own static data (src/data/blog.ts); inlineHtml escapes it
// and only adds <strong> and <a>.
const Html = ({ as: Tag, text }: { as: 'p' | 'h2' | 'h3' | 'li'; text: string }) => (
    <Tag dangerouslySetInnerHTML={{ __html: inlineHtml(text) }} />
);

function renderBlock(b: Block, i: number) {
    switch (b.type) {
        case 'p': return <Html key={i} as="p" text={b.text} />;
        case 'h2': return <Html key={i} as="h2" text={b.text} />;
        case 'h3': return <Html key={i} as="h3" text={b.text} />;
        case 'ul': return <ul key={i}>{b.items.map((t, j) => <Html key={j} as="li" text={t} />)}</ul>;
        case 'ol': return <ol key={i}>{b.items.map((t, j) => <Html key={j} as="li" text={t} />)}</ol>;
        case 'quote':
            return (
                <blockquote key={i}>
                    <p>“{b.text}”</p>
                    {b.cite && <cite>{b.cite}</cite>}
                </blockquote>
            );
    }
}

export default function BlogPost() {
    const { slug = '' } = useParams();
    const post = getPost(slug);
    if (!post) return <Navigate to="/blog" replace />;

    const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
    const so = post.lang === 'so';

    return (
        <article className="bg-white pt-24 md:pt-28 pb-24" lang={post.lang}>
            <div className="max-w-[720px] mx-auto px-4 sm:px-6">
                <Link to="/blog" className="link-more text-[14px]">
                    <ChevronLeft className="w-4 h-4" /> Blog
                </Link>

                <header className="mt-6">
                    <p className="text-[13px] text-[#1a7a1a] font-medium">{post.category}</p>
                    <h1 className="mt-2 text-[32px] md:text-[44px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#0A2E28]">
                        {post.title}
                    </h1>
                    <p className="mt-4 text-[17px] md:text-[19px] leading-[1.5] text-[#0A2E28]/65">{post.description}</p>
                    <p className="mt-5 text-[13px] text-[#0A2E28]/50">
                        {post.author} · <time dateTime={post.date}>{formatDate(post.date, post.lang)}</time> ·{' '}
                        {readingMinutes(post)} {so ? 'daqiiqo' : 'min read'}
                    </p>
                </header>
            </div>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-8 md:mt-10">
                <div className="aspect-[16/9] rounded-[22px] overflow-hidden surface">
                    <img src={post.cover} alt={post.coverAlt} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="max-w-[720px] mx-auto px-4 sm:px-6">
                <div className="article-body mt-10">{post.body.map(renderBlock)}</div>

                {/* FAQ */}
                {post.faq.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.02em] text-[#0A2E28]">
                            {so ? 'Su’aalaha la isweydiiyo' : 'Frequently asked questions'}
                        </h2>
                        <div className="mt-5 divide-y divide-black/[0.08] border-y border-black/[0.08]">
                            {post.faq.map((f) => (
                                <details key={f.q} className="group py-4">
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[16px] font-medium text-[#0A2E28]">
                                        {f.q}
                                        <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#0A2E28]/40 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-2 text-[15px] leading-[1.6] text-[#0A2E28]/70">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <div className="mt-14 tile-brand rounded-[22px] px-6 py-10 md:px-10 text-center text-white">
                    <h2 className="text-[24px] md:text-[30px] leading-[1.15] font-semibold tracking-[-0.02em]">
                        {so ? 'Ma leedahay fikrad app?' : 'Have a project in mind?'}
                    </h2>
                    <p className="mt-2 text-[15px] md:text-[17px] text-white/85">
                        {so ? 'La hadal kooxdayada Muqdisho.' : 'Talk to our team in Mogadishu. Free consultation.'}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Link to="/book" className="btn-primary">
                            {so ? 'Qabso la-tashi' : 'Book a consultation'}
                        </Link>
                        <a
                            href="https://wa.me/252619849199"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pill border border-white text-white hover:bg-white/10"
                        >
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-16">
                <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#0A2E28]">Keep reading</h2>
                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                    {related.map((p) => (
                        <Link key={p.slug} to={`/blog/${p.slug}`} className="group surface rounded-[18px] overflow-hidden flex flex-col">
                            <div className="aspect-video overflow-hidden">
                                <img src={p.cover} alt={p.coverAlt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                            </div>
                            <div className="p-4">
                                <p className="text-[12px] text-[#1a7a1a] font-medium">{p.category}</p>
                                <h3 className="mt-1 text-[15px] leading-[1.3] font-semibold text-[#0A2E28]">{p.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
}
