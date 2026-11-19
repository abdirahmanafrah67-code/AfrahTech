import { useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { getCaseStudy, caseStudies } from '../data/caseStudies';
import { getServicePage } from '../data/servicePages';
import { ContactCta } from './ServiceLanding';

export default function CaseStudy() {
    const { slug = '' } = useParams();
    const c = getCaseStudy(slug);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);
    if (!c) return <Navigate to="/portfolio" replace />;

    const service = getServicePage(c.service.slug);
    const other = caseStudies.filter((x) => x.slug !== c.slug);

    return (
        <article className="bg-white pt-24 md:pt-28 pb-24">
            <div className="max-w-[760px] mx-auto px-4 sm:px-6">
                <Link to="/portfolio" className="link-more text-[14px]">
                    <ChevronLeft className="w-4 h-4" /> Portfolio
                </Link>
                <header className="mt-6">
                    <p className="text-[13px] text-[#1a7a1a] font-medium">Case study · {c.category}</p>
                    <h1 className="mt-2 text-[32px] md:text-[46px] leading-[1.1] font-semibold tracking-[-0.03em] text-[#0A2E28]">{c.title}</h1>
                    <p className="mt-4 text-[17px] md:text-[19px] leading-[1.5] text-[#0A2E28]/65">{c.summary}</p>
                    {c.link && (
                        <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="link-more mt-4">
                            {c.link.label} <ArrowUpRight className="w-4 h-4" />
                        </a>
                    )}
                </header>
            </div>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-8 md:mt-10">
                <div className="aspect-[16/9] rounded-[22px] overflow-hidden surface">
                    <img src={c.image} alt={c.imageAlt} className="w-full h-full object-cover" />
                </div>
                <dl className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {c.facts.map((f) => (
                        <div key={f.label} className="surface rounded-[16px] px-4 py-3">
                            <dt className="text-[12px] text-[#0A2E28]/50">{f.label}</dt>
                            <dd className="text-[15px] font-semibold text-[#0A2E28]">{f.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="max-w-[760px] mx-auto px-4 sm:px-6">
                {c.sections.map((s) => (
                    <section key={s.title} className="mt-14">
                        <h2 className="text-[24px] md:text-[30px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#0A2E28]">{s.title}</h2>
                        {s.paragraphs?.map((p) => (
                            <p key={p} className="mt-4 text-[17px] leading-[1.7] text-[#0A2E28]/80">{p}</p>
                        ))}
                        {s.list && (
                            <ul className="mt-5 space-y-3">
                                {s.list.map((l) => (
                                    <li key={l} className="flex gap-3 text-[16px] leading-[1.55] text-[#0A2E28]/80">
                                        <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-[#1a7a1a] flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </span>
                                        {l}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {s.steps && (
                            <ol className="mt-6 grid sm:grid-cols-2 gap-3">
                                {s.steps.map((st, i) => (
                                    <li key={st.title} className="surface rounded-[18px] p-5">
                                        <span className="text-[13px] font-semibold text-[#1a7a1a]">{i + 1}</span>
                                        <h3 className="mt-1 text-[16px] font-semibold text-[#0A2E28]">{st.title}</h3>
                                        <p className="mt-1.5 text-[14px] leading-[1.5] text-[#0A2E28]/65">{st.text}</p>
                                    </li>
                                ))}
                            </ol>
                        )}
                    </section>
                ))}

                {/* Results (only shown when real numbers exist) */}
                {c.results && c.results.length > 0 && (
                    <section className="mt-14">
                        <h2 className="text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] text-[#0A2E28]">Results</h2>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                            {c.results.map((r) => (
                                <div key={r.label} className="surface rounded-[18px] p-5">
                                    <p className="text-[32px] font-semibold tracking-[-0.03em] text-[#1a7a1a]">{r.value}</p>
                                    <p className="mt-1 text-[14px] text-[#0A2E28]/65">{r.label}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Testimonial */}
                <section className="mt-14">
                    <h2 className="text-[24px] md:text-[30px] font-semibold tracking-[-0.02em] text-[#0A2E28]">What the client says</h2>
                    <div className="mt-6 relative aspect-video rounded-[22px] overflow-hidden bg-black">
                        <video
                            ref={videoRef}
                            src={c.testimonial.video}
                            poster={c.testimonial.poster}
                            controls={started}
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover"
                        />
                        {!started && (
                            <button
                                onClick={() => { setStarted(true); videoRef.current?.play(); }}
                                aria-label={`Play ${c.client} video`}
                                className="group absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                            >
                                <span className="w-16 h-16 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                                    <Play className="w-7 h-7 text-[#0A2E28] fill-current ms-1" />
                                </span>
                            </button>
                        )}
                    </div>
                    <blockquote className="mt-6 border-l-4 border-[#1a7a1a] pl-5">
                        <p className="text-[20px] leading-[1.45] font-medium text-[#0A2E28]">“{c.testimonial.quote}”</p>
                        <cite className="block mt-2 text-[14px] not-italic text-[#0A2E28]/55">
                            {[c.testimonial.person, c.testimonial.role].filter(Boolean).join(', ')}
                        </cite>
                    </blockquote>
                </section>

                {service && (
                    <p className="mt-12 text-[16px] text-[#0A2E28]/70">
                        Want something similar?{' '}
                        <Link to={`/${service.slug}`} className="link-more text-[16px]">
                            See our {c.service.label} <ChevronRight className="w-4 h-4" />
                        </Link>
                    </p>
                )}
            </div>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-12">
                <ContactCta title="Have a similar project?" text="Tell us about your business. The first consultation is free." />

                {other.length > 0 && (
                    <div className="mt-14">
                        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#0A2E28]">More case studies</h2>
                        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {other.map((o) => (
                                <Link key={o.slug} to={`/portfolio/${o.slug}`} className="group block">
                                    <div className="aspect-[4/3] rounded-[18px] overflow-hidden surface">
                                        <img src={o.image} alt={o.client} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                                    </div>
                                    <p className="mt-3 text-[12px] text-[#1a7a1a] font-medium">{o.category}</p>
                                    <h3 className="text-[17px] font-semibold text-[#0A2E28]">{o.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
