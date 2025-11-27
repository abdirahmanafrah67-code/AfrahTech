import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern Abstract Logo based on Afrah Tech branding */}
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#002855', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#001f40', stopOpacity: 1 }} />
            </linearGradient>
        </defs>

        {/* Main Circle/Background */}
        <circle cx="50" cy="50" r="48" fill="white" stroke="#002855" strokeWidth="2" />

        {/* Abstract Shapes representing the multi-colored icon */}
        {/* Navy Part */}
        <path d="M 50 20 A 30 30 0 0 1 80 50 L 50 50 Z" fill="#002855" />

        {/* Red Part */}
        <path d="M 80 50 A 30 30 0 0 1 50 80 L 50 50 Z" fill="#D9381E" />

        {/* Yellow Part */}
        <path d="M 50 80 A 30 30 0 0 1 20 50 L 50 50 Z" fill="#F2A900" />

        {/* Light Blue Part */}
        <path d="M 20 50 A 30 30 0 0 1 50 20 L 50 50 Z" fill="#009BDE" />

        {/* Center Dot */}
        <circle cx="50" cy="50" r="5" fill="white" />
    </svg>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 transition-all duration-300 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="bg-white p-1.5 rounded-full shadow-md">
                            <Logo />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-logo font-bold text-2xl text-white leading-none tracking-wide">AFRAH <span className="text-accent">Tech</span></span>
                            <span className="text-[9px] text-slate-300 tracking-wider font-logo">Your Digital Partner for Growth</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-secondary font-medium transition-colors">Home</a>
                        <a href="#services" className="text-white hover:text-secondary font-medium transition-colors">Services</a>
                        <a href="#why-choose" className="text-white hover:text-secondary font-medium transition-colors">Why Choose Us</a>
                        <a href="#portfolio" className="text-white hover:text-secondary font-medium transition-colors">Portfolio</a>
                        <a href="#about" className="text-white hover:text-secondary font-medium transition-colors">About</a>
                        <a href="#contact" className="bg-secondary hover:bg-secondary-light text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transform hover:-translate-y-0.5">
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-secondary p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-primary/95 backdrop-blur-lg shadow-xl border-b border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:text-secondary hover:bg-white/5 rounded-lg font-medium">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:text-secondary hover:bg-white/5 rounded-lg font-medium">Services</a>
                        <a href="#why-choose" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:text-secondary hover:bg-white/5 rounded-lg font-medium">Why Choose Us</a>
                        <a href="#portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:text-secondary hover:bg-white/5 rounded-lg font-medium">Portfolio</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white hover:text-secondary hover:bg-white/5 rounded-lg font-medium">About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary font-bold hover:bg-white/5 rounded-lg">Get Started</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
