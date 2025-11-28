import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Logo = () => (
    <svg width="150" height="55" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap');
            </style>
        </defs>

        {/* Text 'afrah' - White */}
        <text x="5" y="48" fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="42" fill="#FFFFFF" letterSpacing="-1">afrah</text>

        {/* Text 'Tech' - White, aligned under h */}
        <text x="124" y="60" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="14" fill="#FFFFFF" textAnchor="end">Tech</text>

        {/* Graphic Elements */}
        {/* Yellow Sun */}
        <circle cx="72" cy="18" r="7" fill="#FDB913" stroke="#0f172a" strokeWidth="3" />

        {/* Arc Shapes */}
        {/* Navy Triangle (above 'a') -> White */}
        <path d="M 85 22 L 95 6 L 100 22 Z" fill="#FFFFFF" stroke="#0f172a" strokeWidth="3" />

        {/* Red Triangle (above gap between 'a' and 'h') */}
        <path d="M 102 22 L 118 14 L 110 28 Z" fill="#E3342F" stroke="#0f172a" strokeWidth="3" />

        {/* Small Navy Triangle (overlapping 'h') -> White */}
        <path d="M 112 30 L 124 36 L 114 40 Z" fill="#FFFFFF" stroke="#0f172a" strokeWidth="3" />

        {/* Small decorative dots */}
        <circle cx="92" cy="12" r="2" fill="#FFFFFF" />
        <circle cx="104" cy="32" r="2" fill="#E3342F" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                                <Logo />
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering businesses with innovative mobile solutions. We build, brand, and publish apps that make a difference across East Africa.
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
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#home" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Home</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Services</a></li>
                            <li><a href="#why-choose" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Why Choose Us</a></li>
                            <li><a href="#portfolio" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Portfolio</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">About</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Our Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Mobile App Development</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">App Store Publishing</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Branding</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors hover:translate-x-1 inline-block">Maintenance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Mail className="h-5 w-5 text-secondary" />
                                <span>afrahTech@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <Phone className="h-5 w-5 text-secondary" />
                                <span>+252 619 849 199</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-secondary transition-colors">
                                <MapPin className="h-5 w-5 text-secondary" />
                                <span>Mogadishu, Somalia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} AFRAH Tech. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Designed with <span className="text-secondary">♥</span> by AFRAH Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
