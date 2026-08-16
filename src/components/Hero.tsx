import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    const facebookVideoUrl = "https://www.facebook.com/share/v/1HNUYMQDmm/?mibextid=wwXIfr";

    // Animation variants simplified
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="relative pt-28 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >


                        <motion.h1
                            className="text-5xl lg:text-7xl font-heading font-extrabold leading-[1.15] text-white drop-shadow-md"
                            variants={itemVariants}
                        >
                            {t('hero.title_part1')}{' '}
                            <span className="block sm:inline text-[#0A2E28] font-extrabold drop-shadow-sm">
                                {t('hero.title_part2')}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-white/90 max-w-lg leading-relaxed font-medium drop-shadow-md"
                            variants={itemVariants}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                            variants={itemVariants}
                        >
                            <a 
                                href={facebookVideoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2.5 bg-white/95 hover:bg-white text-[#0A2E28] border border-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-md group"
                            >
                                <span className="w-7 h-7 rounded-full bg-[#0A2E28] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="h-3.5 w-3.5 fill-white translate-x-0.5" />
                                </span>
                                Watch Video
                            </a>
                        </motion.div>




                    </motion.div>

                    <motion.div
                        className="relative lg:h-[680px] flex items-end justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="relative w-full max-w-[680px] lg:max-w-[750px] h-[550px] lg:h-[680px] flex items-end justify-center">
                            
                            {/* Ambient Soft Glow Behind Visor */}
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#e8f500]/35 via-emerald-400/25 to-teal-500/15 rounded-full blur-3xl -z-10 animate-pulse" />

                            {/* Floating Tech Dots */}
                            <motion.div className="absolute top-16 left-8 w-3 h-3 bg-[#e8f500] rounded-full shadow-lg shadow-[#e8f500]/60 z-20" animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity }} />
                            <motion.div className="absolute top-24 right-12 w-2.5 h-2.5 bg-emerald-400 rounded-full z-20" animate={{ y: [8, -8, 8] }} transition={{ duration: 3.5, repeat: Infinity }} />

                            {/* Large Immersive Model with Bottom Soft Fade (Vortiq Style) */}
                            <motion.div 
                                className="w-full h-full relative flex items-end justify-center"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img 
                                    src="/vr_hero2.png" 
                                    alt="Afraino AI Experience" 
                                    className="w-full h-full object-contain object-bottom mix-blend-screen scale-110 origin-bottom [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]"
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
