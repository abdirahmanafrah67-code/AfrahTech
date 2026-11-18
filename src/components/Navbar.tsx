import { useEffect, useState } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'so', name: 'Soomaali' },
    { code: 'ar', name: 'العربية' },
    { code: 'sw', name: 'Kiswahili' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.professional'), path: '/portfolio' },
        { name: t('nav.why_choose'), path: '/#why-choose' },
        { name: t('nav.about'), path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: t('nav.booking'), path: '/book' },
    ];

    // Close menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsLangOpen(false);
    }, [location.pathname, location.hash]);

    // Lock page scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const isActive = (path: string) => !path.startsWith('/#') && location.pathname === path;

    return (
        <header className="fixed top-0 inset-x-0 z-50">
            <nav
                className={`h-12 transition-colors duration-300 ${
                    isOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-xl backdrop-saturate-150'
                } border-b border-black/[0.06]`}
            >
                <div className="max-w-[1024px] h-full mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0" aria-label="Afraino home">
                        <img src="/afraino-icon.jpg" alt="Afraino" className="w-7 h-7 rounded-[7px] object-cover" />
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-7 lg:gap-9">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-[12px] tracking-[-0.01em] transition-colors ${
                                        isActive(link.path) ? 'text-[#0A2E28] font-medium' : 'text-[#0A2E28]/75 hover:text-[#0A2E28]'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1 text-[12px] text-[#0A2E28]/75 hover:text-[#0A2E28] transition-colors p-1.5"
                                aria-label="Change language"
                                aria-expanded={isLangOpen}
                            >
                                <Globe className="w-[15px] h-[15px]" />
                                <span className="uppercase">{i18n.language?.slice(0, 2)}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/[0.06] overflow-hidden py-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                                                i18n.language === lang.code
                                                    ? 'text-[#0A2E28] font-semibold'
                                                    : 'text-[#0A2E28]/70 hover:bg-[#f5f5f7]'
                                            }`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center rounded-full bg-[#0A2E28] text-white text-[12px] px-3.5 py-1 hover:bg-[#0d5c0d] transition-colors"
                        >
                            {t('nav.get_started')}
                        </Link>

                        <a
                            href="https://wa.me/252619849199?text=Hello%20Afraino%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Afraino on WhatsApp"
                            title="Chat on WhatsApp"
                            className="w-7 h-7 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] flex items-center justify-center transition-colors"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.470-.88-.79-1.48-1.760-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.870 9.870 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
                            </svg>
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-1.5 text-[#0A2E28]"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile full-screen menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-x-0 top-12 bottom-0 bg-white overflow-y-auto">
                    <ul className="px-8 pt-6 pb-10 space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="flex items-center justify-between py-2.5 text-[28px] font-semibold tracking-tight text-[#0A2E28]"
                                >
                                    {link.name}
                                    <ChevronRight className="w-5 h-5 text-[#0A2E28]/30" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="px-8">
                        <Link to="/contact" className="btn-primary w-full">
                            {t('nav.get_started')}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
