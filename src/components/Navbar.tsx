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
