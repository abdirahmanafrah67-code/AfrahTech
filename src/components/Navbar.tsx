import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
    <img
        src="/logo.png"
        alt="Afraino - Your Digital Partner for Growth"
        className="h-16 w-auto object-contain"
    />
);

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
        { name: t('nav.about'), path: '/about' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                        <Logo />
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-medium transition-colors ${location.pathname === link.path
                                    ? 'text-secondary'
                                    : 'text-slate-700 hover:text-secondary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Switcher Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-slate-700 hover:text-secondary font-medium transition-colors p-2 rounded-lg hover:bg-slate-50"
                            >
                                <img src={currentLanguage.flag} alt="" className="w-5 h-auto rounded-sm shadow-sm" />
                                <span>{currentLanguage.code.toUpperCase()}</span>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 hover:bg-slate-50 transition-colors ${i18n.language === lang.code ? 'text-secondary font-bold bg-secondary/5' : 'text-slate-700'}`}
                                        >
                                            <img src={lang.flag} alt="" className="w-6 h-auto rounded-sm shadow-sm" />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/contact" className="bg-secondary hover:bg-secondary-light text-primary px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-secondary/30 shadow-secondary/50 transform hover:-translate-y-0.5">
                            {t('nav.get_started')}
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        {/* Language Switcher Mobile Toggle */}
                        <button
                            onClick={() => {
                                const nextIndex = (languages.findIndex(l => l.code === i18n.language) + 1) % languages.length;
                                changeLanguage(languages[nextIndex].code);
                            }}
                            className="flex items-center gap-2 text-slate-700 p-2 border border-slate-200 rounded-lg"
                        >
                            <img src={currentLanguage.flag} alt="" className="w-6 h-auto rounded-sm shadow-sm" />
                            <span className="text-xs font-bold uppercase">{i18n.language}</span>
                        </button>

                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-secondary p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-slate-200 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-3 rounded-lg font-medium ${location.pathname === link.path
                                    ? 'text-secondary bg-secondary/5'
                                    : 'text-slate-700 hover:text-secondary hover:bg-slate-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary font-bold hover:bg-slate-50 rounded-lg">{t('nav.get_started')}</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
