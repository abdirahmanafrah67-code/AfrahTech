import { motion, AnimatePresence } from 'framer-motion';
import { Moon, X, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function RamadanBanner() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <div className="fixed bottom-6 right-6 z-[100] max-w-[320px] pointer-events-none">
                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="pointer-events-auto"
                >
                    <div className="relative group">
                        {/* Animated Glow Border */}
                        <div className="absolute -inset-[1.5px] bg-gradient-to-r from-secondary via-primary to-secondary rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                        {/* Premium Card Content */}
                        <div className="relative bg-primary/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-4 overflow-hidden">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center text-primary shadow-lg shadow-secondary/20">
                                    <Moon className="w-5 h-5 fill-current" />
                                </div>

                                <div className="flex-1 pr-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                                            {t('ramadan.title')}
                                        </span>
                                        <Sparkles className="w-3 h-3 text-secondary animate-pulse" />
                                    </div>
                                    <h3 className="text-white font-bold text-sm leading-tight mb-2">
                                        {t('ramadan.subtitle')}
                                    </h3>
                                    <p className="text-white/60 text-[11px] leading-relaxed mb-3 line-clamp-2">
                                        {t('ramadan.description')}
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-1.5 text-secondary hover:text-white transition-colors text-[11px] font-bold group"
                                    >
                                        <span>{t('ramadan.cta')}</span>
                                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>

                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/30 hover:text-white"
                                    aria-label="Close"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            {/* Decorative Background Pattern */}
                            <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
                                <StarIcon className="w-20 h-20 text-secondary/30 -rotate-12 translate-x-10 -translate-y-10" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

const StarIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);
