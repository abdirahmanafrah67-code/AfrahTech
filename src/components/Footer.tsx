import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center select-none">
        <img
            src="/logo.png"
            alt="fraino"
            className="h-14 w-auto object-contain"
        />
    </div>
);

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white text-slate-700 pt-20 pb-10 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="cursor-pointer">
                                <Logo />
                            </Link>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="bg-slate-50 border border-slate-100 p-2.5 rounded-full text-slate-500 hover:bg-[#0A2E28] hover:text-white hover:border-[#0A2E28] transition-all duration-300 shadow-sm">
                                <Facebook className="h-4.5 w-4.5" />
                            </a>
                            <a href="#" className="bg-slate-50 border border-slate-100 p-2.5 rounded-full text-slate-500 hover:bg-[#0A2E28] hover:text-white hover:border-[#0A2E28] transition-all duration-300 shadow-sm">
                                <Twitter className="h-4.5 w-4.5" />
                            </a>
                            <a href="#" className="bg-slate-50 border border-slate-100 p-2.5 rounded-full text-slate-500 hover:bg-[#0A2E28] hover:text-white hover:border-[#0A2E28] transition-all duration-300 shadow-sm">
                                <Instagram className="h-4.5 w-4.5" />
                            </a>
                            <a href="#" className="bg-slate-50 border border-slate-100 p-2.5 rounded-full text-slate-500 hover:bg-[#0A2E28] hover:text-white hover:border-[#0A2E28] transition-all duration-300 shadow-sm">
                                <Linkedin className="h-4.5 w-4.5" />
                            </a>
                            <a href="https://github.com/abdirahmanafrah67-code" target="_blank" rel="noopener noreferrer" className="bg-slate-50 border border-slate-100 p-2.5 rounded-full text-slate-500 hover:bg-[#0A2E28] hover:text-white hover:border-[#0A2E28] transition-all duration-300 shadow-sm">
                                <Github className="h-4.5 w-4.5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[#0A2E28] font-heading">{t('footer.links')}</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li><Link to="/" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('nav.home')}</Link></li>
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('nav.services')}</Link></li>
                            <li><Link to="/portfolio" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('nav.professional')}</Link></li>
                            <li><Link to="/about" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('contact.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[#0A2E28] font-heading">{t('footer.services')}</h4>
                        <ul className="space-y-4 text-slate-500 text-sm font-medium">
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('services.items.mobile.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('services.items.publishing.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('services.items.design.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('services.items.branding.title')}</Link></li>
                            <li><Link to="/services" className="hover:text-[#0A2E28] transition-colors hover:translate-x-1 inline-block">{t('services.items.ai.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-[#0A2E28] font-heading">{t('footer.contact')}</h4>
                        <ul className="space-y-4 text-slate-600 text-sm font-medium">
                            <li className="flex items-center gap-3 hover:text-[#0A2E28] transition-colors cursor-pointer">
                                <Mail className="h-5 w-5 text-[#0A2E28]" />
                                <span>afraino2025@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-[#0A2E28] transition-colors cursor-pointer">
                                <Phone className="h-5 w-5 text-[#0A2E28]" />
                                <span>+252 619 849 199</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-[#0A2E28] transition-colors cursor-pointer">
                                <MapPin className="h-5 w-5 text-[#0A2E28]" />
                                <span>Worldwide</span>
                            </li>
                            <li className="flex items-start gap-3 hover:text-[#0A2E28] transition-colors">
                                <Clock className="h-5 w-5 text-[#0A2E28] mt-1 shrink-0" />
                                <span className="text-sm">9:30 AM - 11:00 PM<br/>Fri: 4:00 PM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm font-medium">
                        © {new Date().getFullYear()} afraino. {t('footer.rights')}
                    </p>
                    <p className="text-slate-400 text-sm font-medium flex items-center gap-1">
                        <Trans i18nKey="footer.designed_by" values={{ heart: '♥' }}>
                            Designed with <span className="text-red-500">♥</span> by afraino Team
                        </Trans>
                    </p>
                </div>
            </div>
        </footer>
    );
}
