import { CheckCircle2, Award, Users, Clock, Shield, Zap, ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const reasons = [
    {
        id: "team",
        icon: <Award className="h-5 w-5" />,
    },
    {
        id: "quality",
        icon: <Shield className="h-5 w-5" />,
    },
    {
        id: "delivery",
        icon: <Clock className="h-5 w-5" />,
    },
    {
        id: "centric",
        icon: <Users className="h-5 w-5" />,
    },
    {
        id: "tech",
        icon: <Zap className="h-5 w-5" />,
    },
    {
        id: "track",
        icon: <CheckCircle2 className="h-5 w-5" />,
    }
];

export default function WhyChoose() {
    const { t } = useTranslation();
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 370; // Card width (340px) + gap (30px approx)
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="why-choose" className="py-24 bg-[#f8f9fa] border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* Left Column: Title & Scroll Controls */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[320px]">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0A2E28] leading-tight font-heading tracking-tight">
                                {t('why_choose.title')} <span className="inline-block text-primary">↴</span>
                            </h2>
                            <p className="mt-6 text-slate-500 font-medium text-base leading-relaxed max-w-sm">
                                {t('why_choose.description')}
                            </p>
                        </div>
                        
                        <div className="mt-8 flex flex-col gap-6">
                            <Link
                                to="/about"
                                className="inline-flex items-center gap-2 border border-[#0A2E28]/30 hover:border-[#0A2E28] text-[#0A2E28] rounded-full px-6 py-2.5 text-sm font-bold w-fit hover:bg-[#0A2E28] hover:text-white transition-all duration-300"
                            >
                                {t('nav.about')} ↗
                            </Link>
                            
                            {/* Scroll Arrows */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#0A2E28] hover:text-[#0A2E28] hover:bg-white transition-all duration-300 shadow-sm"
                                    aria-label="Scroll left"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#0A2E28] hover:text-[#0A2E28] hover:bg-white transition-all duration-300 shadow-sm"
                                    aria-label="Scroll right"
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Horizontal Cards Carousel */}
                    <div className="lg:col-span-8 overflow-visible">
                        <div 
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 scroll-smooth snap-x snap-mandatory -mr-4 pr-4 sm:-mr-6 sm:pr-6 lg:-mr-[50vw] lg:pr-[50vw]"
                        >
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="w-[280px] sm:w-[340px] flex-shrink-0 bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.05)] hover:border-slate-200/80 transition-all duration-500 flex flex-col justify-between min-h-[420px] snap-start"
                                >
                                    <div>
                                        {/* Card 1 abstract banner matches "Building Your Business Your Way" illustration */}
                                        {index === 0 && (
                                            <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-[#0d5c0d] to-[#1a7a1a] p-5 flex flex-col justify-end shadow-inner">
                                                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                                <p className="text-white font-extrabold text-base leading-snug relative z-10 font-heading">
                                                    Building Your Business Your Way
                                                </p>
                                            </div>
                                        )}
                                        
                                        <h3 className="text-xl font-bold text-[#0A2E28] leading-snug font-heading tracking-tight">
                                            {t(`why_choose.items.${reason.id}.title`)}
                                        </h3>
                                        
                                        {/* Thin divider line from the reference design */}
                                        <div className="w-8 h-[2.5px] bg-[#0A2E28]/10 my-4"></div>
                                        
                                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                            {t(`why_choose.items.${reason.id}.description`)}
                                        </p>
                                    </div>
                                    
                                    {/* Icon badge at bottom-left */}
                                    <div className="mt-6 w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0A2E28] shadow-sm">
                                        {reason.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
