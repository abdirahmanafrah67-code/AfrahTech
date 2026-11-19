import { Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronRight, MessageCircle } from 'lucide-react';
import { getServicePage, servicePages } from '../data/servicePages';
import { getPost } from '../data/blog';

const WHATSAPP = 'https://wa.me/252619849199';

export function FaqList({ faq }: { faq: { q: string; a: string }[] }) {
    return (
        <div className="mt-6 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faq.map((f) => (
                <details key={f.q} className="group py-4">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[16px] font-medium text-[#0A2E28]">
                        {f.q}
                        <ChevronRight className="w-4 h-4 flex-shrink-0 text-[#0A2E28]/40 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-2 text-[15px] leading-[1.6] text-[#0A2E28]/70">{f.a}</p>
                </details>
            ))}
        </div>
    );
}

export function ContactCta({ title, text }: { title: string; text: string }) {
    return (
        <div className="tile-brand rounded-[22px] px-6 py-10 md:px-10 md:py-14 text-center text-white">
            <h2 className="text-[26px] md:text-[34px] leading-[1.15] font-semibold tracking-[-0.02em]">{title}</h2>
            <p className="mt-2 text-[15px] md:text-[17px] text-white/85 max-w-[520px] mx-auto">{text}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/book" className="btn-primary">Book a free consultation</Link>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-pill border border-white text-white hover:bg-white/10">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
            </div>
        </div>
    );
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-[26px] md:text-[34px] leading-[1.15] font-semibold tracking-[-0.025em] text-[#0A2E28]">{children}</h2>
);

export default function ServiceLanding() {
    const { pathname } = useLocation();
    const page = getServicePage(pathname.replace(/^\/|\/$/g, ''));
    if (!page) return <Navigate to="/services" replace />;

    const post = page.relatedPost ? getPost(page.relatedPost) : undefined;
    const others = servicePages.filter((s) => s.slug !== page.slug);

    return (
        <article className="bg-white pt-24 md:pt-28 pb-24">
            {/* Header */}
            <header className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
                <Link to="/services" className="text-[13px] text-[#1a7a1a] font-medium hover:underline">{page.eyebrow}</Link>
                <h1 className="mt-2 text-[34px] md:text-[52px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#0A2E28]">
                    {page.title}
                </h1>
                {page.intro.map((t) => (
                    <p key={t} className="mt-4 text-[17px] md:text-[19px] leading-[1.5] text-[#0A2E28]/65">{t}</p>
                ))}
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <Link to="/book" className="btn-primary">Book a free consultation</Link>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-pill border border-[#0A2E28]/20 text-[#0A2E28] hover:bg-black/5">
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                </div>
            </header>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-10 md:mt-12">
                <div className="aspect-[16/9] md:aspect-[21/9] rounded-[22px] overflow-hidden surface">
                    <img src={page.image} alt={page.imageAlt} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                {/* Offers */}
                <section className="mt-16 md:mt-20">
                    <SectionTitle>{page.offerTitle}</SectionTitle>
                    <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {page.offers.map((o) => (
                            <div key={o.title} className="surface rounded-[18px] p-5">
                                <h3 className="text-[16px] font-semibold text-[#0A2E28]">{o.title}</h3>
                                <p className="mt-1.5 text-[14px] leading-[1.5] text-[#0A2E28]/65">{o.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="mt-16 md:mt-20">
                    <SectionTitle>{page.benefitsTitle}</SectionTitle>
                    <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                        {page.benefits.map((b) => (
                            <div key={b.title} className="flex gap-3">
                                <span className="mt-0.5 w-6 h-6 flex-shrink-0 rounded-full bg-[#1a7a1a] flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </span>
                                <div>
                                    <h3 className="text-[16px] font-semibold text-[#0A2E28]">{b.title}</h3>
                                    <p className="mt-1 text-[15px] leading-[1.5] text-[#0A2E28]/65">{b.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Examples */}
                <section className="mt-16 md:mt-20">
                    <SectionTitle>Examples of our work</SectionTitle>
                    <div className={`mt-6 grid gap-5 ${page.examples.length === 1 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
                        {page.examples.map((e) => {
                            const internal = e.href?.startsWith('/');
                            const body = (
                                <>
                                    <div className="aspect-[4/3] rounded-[18px] overflow-hidden surface">
                                        <img src={e.image} alt={e.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                                    </div>
                                    <p className="mt-3 text-[12px] text-[#1a7a1a] font-medium">{e.category}</p>
                                    <h3 className="text-[17px] font-semibold text-[#0A2E28]">{e.title}</h3>
                                    <p className="mt-1 text-[14px] leading-[1.45] text-[#0A2E28]/65">{e.text}</p>
                                    {e.href && (
                                        <span className="link-more text-[14px] mt-1.5">
                                            {internal ? <>Read case study <ChevronRight className="w-3.5 h-3.5" /></> : <>Visit <ArrowUpRight className="w-3.5 h-3.5" /></>}
                                        </span>
                                    )}
                                </>
                            );
                            if (!e.href) return <div key={e.title}>{body}</div>;
                            return internal ? (
                                <Link key={e.title} to={e.href} className="group block">{body}</Link>
                            ) : (
                                <a key={e.title} href={e.href} target="_blank" rel="noopener noreferrer" className="group block">{body}</a>
                            );
                        })}
                    </div>
                </section>

                {/* Process */}
                <section className="mt-16 md:mt-20">
                    <SectionTitle>How we work</SectionTitle>
                    <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {page.process.map((s, i) => (
                            <li key={s.title} className="surface rounded-[18px] p-5">
                                <span className="text-[13px] font-semibold text-[#1a7a1a]">Step {i + 1}</span>
                                <h3 className="mt-1 text-[16px] font-semibold text-[#0A2E28]">{s.title}</h3>
                                <p className="mt-1.5 text-[14px] leading-[1.5] text-[#0A2E28]/65">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* FAQ */}
                <section className="mt-16 md:mt-20 max-w-[760px]">
                    <SectionTitle>Frequently asked questions</SectionTitle>
                    <FaqList faq={page.faq} />
                </section>

                <div className="mt-16 md:mt-20">
                    <ContactCta title={page.ctaTitle} text={page.ctaText} />
                </div>

                {/* Related links */}
                <section className="mt-16 grid md:grid-cols-2 gap-8">
                    {post && (
                        <div>
                            <h2 className="text-[20px] font-semibold text-[#0A2E28]">Read our guide</h2>
                            <Link to={`/blog/${post.slug}`} className="group mt-4 flex gap-4 items-center">
                                <img src={post.cover} alt={post.coverAlt} loading="lazy" className="w-28 h-20 rounded-[12px] object-cover flex-shrink-0" />
                                <span className="text-[15px] leading-[1.35] font-medium text-[#0A2E28] group-hover:underline underline-offset-4">{post.title}</span>
                            </Link>
                        </div>
                    )}
                    <div>
                        <h2 className="text-[20px] font-semibold text-[#0A2E28]">Other services</h2>
                        <ul className="mt-3 space-y-1.5">
                            {others.map((s) => (
                                <li key={s.slug}>
                                    <Link to={`/${s.slug}`} className="link-more text-[15px]">
                                        {s.eyebrow} <ChevronRight className="w-3.5 h-3.5" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    );
}
