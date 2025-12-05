import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <img
        src="/logo.png"
        alt="Fraino - Your Digital Partner for Growth"
        className="h-16 w-auto object-contain"
    />
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Logo />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-slate-700 hover:text-secondary font-medium transition-colors">Home</a>
                        <a href="#services" className="text-slate-700 hover:text-secondary font-medium transition-colors">Services</a>
                        <a href="#why-choose" className="text-slate-700 hover:text-secondary font-medium transition-colors">Why Choose Us</a>
                        <a href="#technologies" className="text-slate-700 hover:text-secondary font-medium transition-colors">Technologies</a>
                        <a href="#about" className="text-slate-700 hover:text-secondary font-medium transition-colors">About</a>
                        <a href="#contact" className="bg-secondary hover:bg-secondary-light text-primary px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transform hover:-translate-y-0.5">
                            Get Started
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
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
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg font-medium">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg font-medium">Services</a>
                        <a href="#why-choose" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg font-medium">Why Choose Us</a>
                        <a href="#technologies" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg font-medium">Technologies</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-700 hover:text-secondary hover:bg-slate-50 rounded-lg font-medium">About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-secondary font-bold hover:bg-slate-50 rounded-lg">Get Started</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
