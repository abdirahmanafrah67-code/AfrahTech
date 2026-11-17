import { CheckCircle2, Award, Users, Clock, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const reasons = [
    { id: 'team', icon: Award },
    { id: 'quality', icon: Shield },
    { id: 'delivery', icon: Clock },
    { id: 'centric', icon: Users },
    { id: 'tech', icon: Zap },
    { id: 'track', icon: CheckCircle2 },
];

export default function WhyChoose() {
    const { t } = useTranslation();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        scrollRef.current?.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' });
    };

    return (
        <section id="why-choose" className="surface py-20 md:py-28 overflow-hidden">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <div className="max-w-[620px]">
                        <h2 className="headline-sm">{t('why_choose.title')}</h2>
                        <p className="mt-3 text-[17px] md:text-[19px] text-[#0A2E28]/65 leading-[1.45]">
                            {t('why_choose.description')}
                        </p>
                    </div>
                    <Link to="/about" className="link-more flex-shrink-0">
                        {t('nav.about')} <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Horizontal card rail, aligned to the content column */}
            <div
                ref={scrollRef}
                className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
                style={{
                    // Line the first card up with the 1024px content column
                    paddingLeft: 'max(1rem, calc((100vw - 1024px) / 2 + 1.5rem))',
                    paddingRight: 'max(1rem, calc((100vw - 1024px) / 2 + 1.5rem))',
                    scrollPaddingLeft: 'max(1rem, calc((100vw - 1024px) / 2 + 1.5rem))',
                }}
            >
                {reasons.map((reason) => {
                    const Icon = reason.icon;
                    return (
                        <div
                            key={reason.id}
                            className="snap-start flex-shrink-0 w-[240px] md:w-[260px] min-h-[240px] bg-white rounded-[22px] p-6 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                        >
                            <Icon className="w-7 h-7 text-[#1a7a1a]" strokeWidth={1.5} />
                            <h3 className="mt-4 text-[19px] leading-[1.2] font-semibold tracking-[-0.02em]">
                                {t(`why_choose.items.${reason.id}.title`)}
                            </h3>
                            <p className="mt-2 text-[14px] leading-[1.5] text-[#0A2E28]/65">
                                {t(`why_choose.items.${reason.id}.description`)}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 mt-6 flex justify-end gap-3">
                <button
                    onClick={() => scroll('left')}
                    className="w-9 h-9 rounded-full bg-black/[0.06] hover:bg-black/[0.1] flex items-center justify-center text-[#0A2E28]/70 transition-colors"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-9 h-9 rounded-full bg-black/[0.06] hover:bg-black/[0.1] flex items-center justify-center text-[#0A2E28]/70 transition-colors"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
