import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <svg width="200" height="70" viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
            </style>
        </defs>

        {/* Text 'afraıno' - Dark Navy using dotless 'i' */}
        <text x="5" y="52" fontFamily="Poppins, sans-serif" fontWeight="900" fontSize="52" fill="#1a1f71" letterSpacing="-2">afraıno</text>

        {/* Red Dot for the 'i' */}
        <circle cx="115" cy="20" r="7" fill="#FF0000" />
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
