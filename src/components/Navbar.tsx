import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <svg width="140" height="50" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
            </style>
        </defs>

        {/* Text 'afra' - Navy */}
        <text x="10" y="45" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="38" fill="#002855">afra</text>

        {/* Text 'h' - Red */}
        <text x="92" y="45" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="38" fill="#D9381E">h</text>

        {/* Text 'Tech' - Navy, aligned under h */}
        <text x="118" y="58" fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="12" fill="#002855" textAnchor="end">Tech</text>

        {/* Graphic Elements */}
        {/* Yellow Sun */}
        <circle cx="78" cy="18" r="6" fill="#F2A900" />

        {/* Arc Shapes */}
        {/* Navy Triangle (Left) */}
        <path d="M 88 22 L 98 8 L 102 22 Z" fill="#002855" />

        {/* Red Triangle (Top/Right) */}
        <path d="M 100 22 L 115 15 L 108 28 Z" fill="#D9381E" />

        {/* Small Navy Triangle (Right) */}
        <path d="M 110 30 L 120 35 L 112 38 Z" fill="#002855" />

        {/* Decorative dots/shards */}
        <circle cx="95" cy="30" r="2" fill="#D9381E" />
        <circle cx="105" cy="10" r="1.5" fill="#002855" />
    </svg>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Logo />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-slate-700 hover:text-primary font-medium transition-colors">Home</a>
                        <a href="#services" className="text-slate-700 hover:text-primary font-medium transition-colors">Services</a>
                        <a href="#why-choose" className="text-slate-700 hover:text-primary font-medium transition-colors">Why Choose Us</a>
                        <a href="#portfolio" className="text-slate-700 hover:text-primary font-medium transition-colors">Portfolio</a>
                        <a href="#about" className="text-slate-700 hover:text-primary font-medium transition-colors">About</a>
                        <a href="#contact" className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transform hover:-translate-y-0.5">
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-primary p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg font-medium">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg font-medium">Services</a>
                        <a href="#why-choose" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg font-medium">Why Choose Us</a>
                        <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg font-medium">Portfolio</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg font-medium">About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary font-bold hover:bg-slate-50 rounded-lg">Get Started</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
