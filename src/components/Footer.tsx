import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Logo = () => (
    <img
        src="/logo.png"
        alt="Fraino - Your Digital Partner for Growth"
        className="h-14 w-auto object-contain"
    />
);

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary text-white pt-20 pb-10 border-t border-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="cursor-pointer">
                                <Logo />
                            </Link>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/abdirahmanafrah67-code" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-secondary/30">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">{t('footer.links')}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('nav.home')}</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('nav.services')}</Link></li>
                            <li><Link to="/portfolio" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('nav.professional')}</Link></li>
                            <li><Link to="/about" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('contact.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">{t('footer.services')}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('services.items.mobile.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('services.items.publishing.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('services.items.design.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('services.items.branding.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">{t('services.items.ai.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">{t('footer.contact')}</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Mail className="h-5 w-5 text-secondary" />
                                <span>afraino2025@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Phone className="h-5 w-5 text-secondary" />
                                <span>+252 619 849 199</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <MapPin className="h-5 w-5 text-secondary" />
                                <span>East Africa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} afraino. {t('footer.rights')}
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        <Trans i18nKey="footer.designed_by" values={{ heart: '♥' }}>
                            Designed with <span className="text-secondary">♥</span> by afraino Team
                        </Trans>
                    </p>
                </div>
            </div>
        </footer>
    );
}
