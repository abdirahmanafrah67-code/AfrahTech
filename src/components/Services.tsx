import { Smartphone, Upload, Send, Layout, Wrench, Globe, Brain, Check, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// tone: 'dark' = brand dark green tile, 'lime' = brand lime tile, 'light' = soft grey tile
const services = [
    { id: 'mobile', icon: Smartphone, tone: 'dark', to: '/mobile-app-development' },
    { id: 'web', icon: Globe, tone: 'lime', to: '/web-development' },
    { id: 'ai', icon: Brain, tone: 'light', to: '/ai-solutions' },
    { id: 'publishing', icon: Upload, tone: 'light' },
    { id: 'design', icon: Layout, tone: 'light', to: '/ui-ux-design' },
    { id: 'branding', icon: Send, tone: 'light' },
    { id: 'maintenance', icon: Wrench, tone: 'light' },
] as const;

const toneStyles = {
    dark: { tile: 'bg-[#0A2E28] text-white', body: 'text-white/70', icon: 'text-[#e8f500]', link: 'text-[#e8f500]' },
    lime: { tile: 'bg-[#e8f500] text-[#0A2E28]', body: 'text-[#0A2E28]/75', icon: 'text-[#0A2E28]', link: 'text-[#0A2E28]' },
    light: { tile: 'surface text-[#0A2E28]', body: 'text-[#0A2E28]/65', icon: 'text-[#1a7a1a]', link: 'text-[#1a7a1a]' },
};

export default function Services() {
    const { t } = useTranslation();
    const location = useLocation();
    const isPage = location.pathname === '/services';

    return (
        <section id="services" className={`bg-white ${isPage ? 'pt-28 md:pt-32 pb-24 min-h-screen' : 'py-20 md:py-28'}`}>
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-[720px] mx-auto mb-12 md:mb-16"
                >
                    <h2 className="headline">
                        Make your business better through technology.
                    </h2>
                </motion.div>

                {/* Compact tiles: icon top-left, title, short text; whole tile links to booking */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {services.map((service, index) => {
                        const s = toneStyles[service.tone];
                        const Icon = service.icon;
                        const features = t(`services.items.${service.id}.features`, { returnObjects: true }) as string[];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
                            >
                                <Link
                                    to={"to" in service ? service.to : "/book"}
                                    className={`${s.tile} group h-full rounded-[18px] p-5 flex flex-col hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200`}
                                >
                                    <div className="flex items-center justify-between">
                                        <Icon className={`w-6 h-6 ${s.icon}`} strokeWidth={1.6} />
                                        <ChevronRight className={`w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ${s.link}`} />
                                    </div>
                                    <h3 className="mt-4 text-[16px] leading-[1.25] font-semibold tracking-[-0.01em]">
                                        {t(`services.items.${service.id}.title`)}
                                    </h3>
                                    <p className={`mt-1.5 text-[13px] leading-[1.45] ${s.body} ${isPage ? '' : 'line-clamp-3'}`}>
                                        {t(`services.items.${service.id}.description`)}
                                    </p>

                                    {isPage && Array.isArray(features) && (
                                        <ul className="mt-4 space-y-1">
                                            {features.map((feature) => (
                                                <li key={feature} className={`flex items-start gap-1.5 text-[13px] ${s.body}`}>
                                                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${s.icon}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}

                    {/* 8th tile: call to action, completes the 4×2 grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.45, delay: 0.15 }}
                    >
                        <Link
                            to="/book"
                            className="bg-[#1a7a1a] group h-full min-h-[150px] rounded-[18px] p-5 flex flex-col justify-between text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200"
                        >
                            <h3 className="text-[16px] leading-[1.25] font-semibold">Not sure what you need?</h3>
                            <span className="mt-4 inline-flex items-center gap-0.5 text-[13px] font-medium">
                                Book a free consultation
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
