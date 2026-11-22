// Apple-style dropdown panels under the navbar (desktop only).
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { servicePages } from '../data/servicePages';
import { caseStudies } from '../data/caseStudies';
import { sortedPosts } from '../data/blog';

export type FlyoutKey = 'services' | 'portfolio' | 'blog';

const blogTopics = Array.from(new Set(sortedPosts.map((p) => p.category)));

const Heading = ({ children }: { children: React.ReactNode }) => (
    <p className="text-[12px] text-[#0A2E28]/50 mb-3">{children}</p>
);

const BigLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <li>
        <Link to={to} className="block py-1 text-[22px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#0A2E28] hover:text-[#1a7a1a] transition-colors">
            {children}
        </Link>
    </li>
);

const SmallLink = ({ to, href, children }: { to?: string; href?: string; children: React.ReactNode }) => {
    const cls = 'inline-flex items-center gap-1 py-1 text-[13px] text-[#0A2E28]/80 hover:text-[#1a7a1a] transition-colors';
    return (
        <li>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {children} <ArrowUpRight className="w-3 h-3" />
                </a>
            ) : (
                <Link to={to!} className={cls}>{children}</Link>
            )}
        </li>
    );
};

function ServicesPanel() {
    return (
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div>
                <Heading>Explore services</Heading>
                <ul>
                    {servicePages.map((s) => (
                        <BigLink key={s.slug} to={`/${s.slug}`}>{s.eyebrow}</BigLink>
                    ))}
                </ul>
            </div>
            <div>
                <Heading>More from Afraino</Heading>
                <ul>
                    <SmallLink to="/services">All services</SmallLink>
                    <SmallLink to="/services">App Publishing</SmallLink>
                    <SmallLink to="/services">Branding & Identity</SmallLink>
                    <SmallLink to="/services">Maintenance & Support</SmallLink>
                </ul>
            </div>
            <div>
                <Heading>Get started</Heading>
                <ul>
                    <SmallLink to="/book">Book a free consultation</SmallLink>
                    <SmallLink href="https://wa.me/252619849199">Chat on WhatsApp</SmallLink>
                    <SmallLink to="/portfolio">See our work</SmallLink>
                </ul>
            </div>
        </div>
    );
}

function PortfolioPanel() {
    return (
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div>
                <Heading>Explore our work</Heading>
                <ul>
                    <BigLink to="/portfolio">All projects</BigLink>
                    {caseStudies.map((c) => (
                        <BigLink key={c.slug} to={`/portfolio/${c.slug}`}>{c.client} case study</BigLink>
                    ))}
                </ul>
            </div>
            <div>
                <Heading>Live products</Heading>
                <ul>
                    <SmallLink href="https://www.kabbarealestate.com">Kabba Real Estate</SmallLink>
                    <SmallLink href="https://www.bokhol.nl">Bokhol</SmallLink>
                    <SmallLink href="https://play.google.com/store/apps/details?id=com.meherbook.app">Mehrad on Google Play</SmallLink>
                    <SmallLink href="https://play.google.com/store/apps/details?id=com.afraino.iken">IKEN on Google Play</SmallLink>
                    <SmallLink href="https://play.google.com/store/apps/details?id=com.propmas">PROPMAS on Google Play</SmallLink>
                </ul>
            </div>
            <div>
                <Heading>Client stories</Heading>
                <ul>
                    <SmallLink to="/#testimonials">Watch client videos</SmallLink>
                    <SmallLink to="/book">Start a similar project</SmallLink>
                </ul>
            </div>
        </div>
    );
}

function BlogPanel() {
    const latest = sortedPosts.slice(0, 3);
    return (
        <div className="grid grid-cols-[2fr_1fr] gap-10">
            <div>
                <Heading>Latest articles</Heading>
                <ul className="grid grid-cols-3 gap-4">
                    {latest.map((p) => (
                        <li key={p.slug}>
                            <Link to={`/blog/${p.slug}`} className="group block">
                                <div className="aspect-video rounded-[12px] overflow-hidden surface">
                                    <img src={p.cover} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                                </div>
                                <p className="mt-2 text-[13px] leading-[1.3] font-medium text-[#0A2E28] group-hover:text-[#1a7a1a] line-clamp-2 transition-colors">
                                    {p.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Heading>Topics</Heading>
                <ul>
                    <SmallLink to="/blog">All articles</SmallLink>
                    {blogTopics.map((t) => (
                        <SmallLink key={t} to={`/blog?topic=${encodeURIComponent(t)}`}>{t}</SmallLink>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function NavFlyout({ which }: { which: FlyoutKey }) {
    return (
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-8 pb-10">
            {which === 'services' && <ServicesPanel />}
            {which === 'portfolio' && <PortfolioPanel />}
            {which === 'blog' && <BlogPanel />}
        </div>
    );
}
