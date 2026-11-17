import { Play, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const facebookVideoUrl = 'https://www.facebook.com/share/v/1HNUYMQDmm/?mibextid=wwXIfr';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section id="home" className="tile-brand relative overflow-hidden pt-12">
            <div className="max-w-[1024px] mx-auto px-6 pt-16 md:pt-24 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="text-[44px] leading-[1.05] md:text-[80px] md:leading-[1.03] font-semibold tracking-[-0.035em]"
                >
                    {t('hero.title_part1')}
                    <br />
                    <span className="text-[#0A2E28]">{t('hero.title_part2')}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.12 }}
                    className="subhead mt-5 max-w-[640px] mx-auto text-white/90"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <Link to="/book" className="btn-primary">
                        {t('hero.cta_start')}
                    </Link>
                    <a
                        href={facebookVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill border border-white text-white hover:bg-white/10"
                    >
                        <Play className="w-4 h-4 fill-current" />
                        Watch Afraino
                    </a>
                </motion.div>

                <Link to="/portfolio" className="mt-5 inline-flex items-center gap-0.5 text-[17px] text-white hover:underline underline-offset-4">
                    {t('hero.cta_work')} <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative mx-auto mt-6 max-w-[600px] px-6"
            >
                <img
                    src="/vr_hero2.png"
                    alt="Afraino AI experience"
                    className="w-full h-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_75%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
                />
            </motion.div>
        </section>
    );
}
