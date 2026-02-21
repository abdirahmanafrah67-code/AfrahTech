import { motion } from 'framer-motion';
import { Moon, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function RamadanOffer() {
    const { t } = useTranslation();

    return (
        <section className="relative py-20 overflow-hidden bg-[#0A0F1E]">
            {/* Islamic Geometric Pattern Background Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-art.png')`,
                    backgroundSize: '400px'
                }} />

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-br from-[#161D2F] to-[#0A0F1E] rounded-[40px] p-8 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden group">
                    {/* Animated Stars */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-10 right-20 text-secondary/40"
                    >
                        <Star className="w-4 h-4 fill-current" />
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-20 left-10 text-secondary/30"
                    >
                        <Star className="w-3 h-3 fill-current" />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold mb-6 tracking-wide uppercase">
                                <Moon className="w-4 h-4 fill-current" />
                                <span>{t('ramadan.subtitle')}</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                                {t('ramadan.title')}
                            </h2>

                            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                                {t('ramadan.description')}
                            </p>

                            <div className="flex flex-wrap gap-4 items-center">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-primary px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transform hover:-translate-y-1"
                                >
                                    <span>{t('ramadan.cta')}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <span className="text-slate-500 text-sm font-medium italic">
                                    * {t('ramadan.valid_until')}
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative hidden lg:flex justify-center"
                        >
                            <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent flex items-center justify-center border border-white/5">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <Moon className="w-40 h-40 text-secondary fill-secondary/10 drop-shadow-[0_0_30px_rgba(255,184,0,0.3)]" strokeWidth={1} />
                                </motion.div>

                                <div className="absolute inset-0 animate-spin-slow">
                                    <Star className="absolute top-0 right-1/4 w-4 h-4 text-secondary/40 fill-current" />
                                    <Star className="absolute bottom-10 left-10 w-3 h-3 text-secondary/30 fill-current" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
