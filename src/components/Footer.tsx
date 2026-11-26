import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BUSINESS, fullAddress } from '../data/business';

const socials = [
    { label: 'Facebook', href: '#', Icon: Facebook },
    { label: 'Twitter', href: '#', Icon: Twitter },
    { label: 'Instagram', href: '#', Icon: Instagram },
    { label: 'LinkedIn', href: '#', Icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/abdirahmanafrah67-code', Icon: Github },
];

export default function Footer() {
    const { t } = useTranslation();

    const columns = [
        {
            title: t('footer.links'),
            links: [
                { label: t('nav.home'), to: '/' },
                { label: t('nav.services'), to: '/services' },
                { label: t('nav.professional'), to: '/portfolio' },
                { label: t('nav.about'), to: '/about' },
                { label: 'Blog', to: '/blog' },
                { label: t('contact.title'), to: '/contact' },
            ],
        },
        {
            title: t('footer.services'),
            links: [
                { label: 'Software Development', to: '/software-development-somalia' },
                { label: t('services.items.mobile.title'), to: '/mobile-app-development' },
                { label: t('services.items.web.title'), to: '/web-development' },
                { label: t('services.items.ai.title'), to: '/ai-solutions' },
                { label: 'WhatsApp AI Chatbot', to: '/whatsapp-ai-chatbot' },
                { label: t('services.items.design.title'), to: '/ui-ux-design' },
            ],
        },
    ];

    return (
        <footer className="surface text-[12px] leading-[1.33] text-[#0A2E28]/60">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pt-10 pb-8">
                <div className="pb-4 border-b border-black/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <Link to="/" className="flex-shrink-0">
                        <img src="/logo.png" alt="Afraino" className="h-8 w-auto object-contain" />
                    </Link>
                    <p>{t('footer.description')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-[12px] font-semibold text-[#0A2E28] tracking-normal mb-2.5">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link to={l.to} className="hover:underline hover:text-[#0A2E28]">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h4 className="text-[12px] font-semibold text-[#0A2E28] tracking-normal mb-2.5">{t('footer.contact')}</h4>
                        <ul className="space-y-2">
                            <li><a href={`mailto:${BUSINESS.email}`} className="hover:underline hover:text-[#0A2E28]">{BUSINESS.email}</a></li>
                            <li><a href={BUSINESS.phoneHref} className="hover:underline hover:text-[#0A2E28]">{BUSINESS.phone}</a></li>
                            <li>
                                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#0A2E28]">
                                    {fullAddress}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[12px] font-semibold text-[#0A2E28] tracking-normal mb-2.5">Hours</h4>
                        <ul className="space-y-2">
                            {BUSINESS.hours.map((h) => <li key={h}>{h}</li>)}
                            <li>
                                <a href={BUSINESS.reviewUrl} target="_blank" rel="noopener noreferrer" className="text-[#1a7a1a] hover:underline">
                                    ★ Review us on Google
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="pb-4">
                    More ways to reach us: <Link to="/book" className="text-[#1a7a1a] hover:underline">book a consultation</Link> or{' '}
                    <a href="https://wa.me/252619849199" target="_blank" rel="noopener noreferrer" className="text-[#1a7a1a] hover:underline">chat on WhatsApp</a>.
                </p>

                <div className="pt-4 border-t border-black/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p>
                        Copyright © {new Date().getFullYear()} Afraino. {t('footer.rights')}
                        <span className="mx-2 text-black/20">|</span>
                        <Trans i18nKey="footer.designed_by" values={{ heart: '♥' }}>
                            Designed with ♥ by afraino Team
                        </Trans>
                    </p>
                    <div className="flex items-center gap-4">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="text-[#0A2E28]/50 hover:text-[#0A2E28] transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
