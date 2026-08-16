import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: 'sw', name: 'Kiswahili', flag: 'https://flagcdn.com/w40/ke.png' },
    { code: 'so', name: 'Soomaali', flag: 'https://flagcdn.com/w40/so.png' }
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
        { name: t('nav.booking'), path: '/book' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <>
            {/* Floating Navbar Container matched to max-w-7xl page width */}
            <nav className="fixed top-5 left-0 right-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between pointer-events-none">

                {/* Left: Logo aligned with main content grid */}
                <Link to="/" className="flex-shrink-0 pointer-events-auto">
                    <div className="w-14 h-14 rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-200">
                        <img
                            src="/afraino-icon.jpg"
                            alt="AfrahTech"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Link>

                {/* Right: Nav Pill + Get Started CTA */}
                <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-md rounded-full shadow-2xl border border-white/60 flex items-center px-2 py-1.5 gap-1">

                        {/* Nav Links (desktop) */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = link.path.startsWith('/#')
                                    ? false  // hash links are never "active" by route
                                    : location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                                            isActive
                                                ? 'bg-[#0A2E28] text-white shadow-md'
                                                : 'text-[#0A2E28]/80 hover:text-[#0A2E28] hover:bg-slate-100'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Language Switcher inside pill */}
                        <div className="relative hidden md:block ml-1">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1.5 text-[#0A2E28]/80 hover:text-[#0A2E28] text-sm font-semibold transition-colors px-3 py-1.5 rounded-full hover:bg-slate-100"
                            >
                                <img src={currentLanguage.flag} alt="" className="w-4 h-auto rounded-sm" />
                                <span>{currentLanguage.code.toUpperCase()}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-3 w-44 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden py-1">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                                                i18n.language === lang.code
                                                    ? 'text-[#0A2E28] font-bold bg-slate-100'
                                                    : 'text-slate-700 hover:text-[#0A2E28] hover:bg-slate-50'
                                            }`}
                                        >
                                            <img src={lang.flag} alt="" className="w-5 h-auto rounded-sm" />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile: lang cycle + hamburger */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={() => {
                                    const nextIndex = (languages.findIndex(l => l.code === i18n.language) + 1) % languages.length;
                                    changeLanguage(languages[nextIndex].code);
                                }}
                                className="flex items-center gap-1 text-[#0A2E28] px-2 py-1.5 rounded-full hover:bg-slate-100 transition-all"
                            >
                                <img src={currentLanguage.flag} alt="" className="w-5 h-auto rounded-sm" />
                                <span className="text-xs font-bold text-[#0A2E28]">{i18n.language}</span>
                            </button>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#0A2E28] hover:text-[#0A2E28] p-1.5 rounded-full hover:bg-slate-100 transition-all"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Get Started button */}
                    <Link
                        to="/contact"
                        className="hidden md:inline-flex items-center bg-white text-[#0A2E28] px-6 py-2.5 rounded-full text-sm font-extrabold shadow-2xl border border-white/80 transition-all hover:bg-[#0A2E28] hover:text-white hover:border-transparent flex-shrink-0"
                    >
                        {t('nav.get_started')}
                    </Link>
                </div>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#0A2E28] rounded-3xl shadow-2xl overflow-hidden border border-white/10 pointer-events-auto">
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = link.path.startsWith('/#')
                                    ? false
                                    : location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-full text-sm font-medium transition-all ${
                                            isActive
                                                ? 'bg-white/15 text-white'
                                                : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 bg-white text-[#0A2E28] font-bold rounded-full text-sm text-center mt-2 hover:bg-[#e8f500] transition-all"
                            >
                                {t('nav.get_started')}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
