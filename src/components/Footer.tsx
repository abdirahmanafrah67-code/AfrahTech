import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Logo = () => (
    <svg width="140" height="50" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
            </style>
        </defs>

        {/* Text 'afra' - White for Dark Footer */}
        <text x="10" y="45" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="38" fill="#FFFFFF">afra</text>

        {/* Text 'h' - Red */}
        <text x="92" y="45" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="38" fill="#D9381E">h</text>

        {/* Text 'Tech' - White, aligned under h */}
        <text x="118" y="58" fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="12" fill="#FFFFFF" textAnchor="end">Tech</text>

        {/* Graphic Elements */}
        {/* Yellow Sun */}
        <circle cx="78" cy="18" r="6" fill="#F2A900" />

        {/* Arc Shapes */}
        {/* Navy Triangle (Left) -> White */}
        <path d="M 88 22 L 98 8 L 102 22 Z" fill="#FFFFFF" />

        {/* Red Triangle (Top/Right) */}
        <path d="M 100 22 L 115 15 L 108 28 Z" fill="#D9381E" />

        {/* Small Navy Triangle (Right) -> White */}
        <path d="M 110 30 L 120 35 L 112 38 Z" fill="#FFFFFF" />

        {/* Decorative dots/shards */}
        <circle cx="95" cy="30" r="2" fill="#D9381E" />
        <circle cx="105" cy="10" r="1.5" fill="#FFFFFF" />
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
