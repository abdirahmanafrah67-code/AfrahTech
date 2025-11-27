import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Circle Segments (Orange) */}
        <path d="M20 50 A 30 30 0 0 1 80 50" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />
        <path d="M20 50 A 30 30 0 0 0 50 80" stroke="#f97316" strokeWidth="8" strokeLinecap="round" />

        {/* Inner 'A' shape (White) */}
        <path d="M50 25 L30 75 M50 25 L70 75 M35 60 L65 60" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

        {/* Tech Dots (Orange) */}
        <circle cx="20" cy="50" r="6" fill="#f97316" />
        <circle cx="80" cy="50" r="6" fill="#f97316" />
        <circle cx="50" cy="80" r="6" fill="#f97316" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-sm">
                                <Logo />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-logo font-bold text-xl text-white leading-none tracking-wide">AFRAH <span className="text-secondary">Tech</span></span>
                                <span className="text-[8px] text-slate-400 tracking-wider font-logo">Your Digital Partner for Growth</span>
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
