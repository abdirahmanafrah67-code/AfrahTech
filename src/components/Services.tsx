import { Smartphone, Upload, Send, Layout, Wrench, Globe, Brain, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        id: "mobile",
        icon: <Smartphone className="h-6 w-6" />,
        color: "teal",
    },
    {
        id: "web",
        icon: <Globe className="h-6 w-6" />,
        color: "gold",
    },
    {
        id: "ai",
        icon: <Brain className="h-6 w-6" />,
        color: "teal",
    },
    {
        id: "publishing",
        icon: <Upload className="h-6 w-6" />,
        color: "gold",
    },
    {
        id: "design",
        icon: <Layout className="h-6 w-6" />,
        color: "teal",
    },
    {
        id: "branding",
        icon: <Send className="h-6 w-6" />,
        color: "gold",
    },
    {
        id: "maintenance",
        icon: <Wrench className="h-6 w-6" />,
        color: "teal",
    }
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const location = useLocation();
    const isPage = location.pathname === '/services';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className={`relative section-padding overflow-hidden bg-white ${isPage ? 'pt-32 min-h-screen' : ''}`}>
            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0A4D4D 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                        {t('services.title')}
                    </h2>
                    <p className="text-lg text-slate-500 font-sans leading-relaxed">
                        {t('services.description')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => {
                        // Cast to any to access features if types aren't updated, or use t.accessor
                        const features = t(`services.items.${service.id}.features`, { returnObjects: true }) as string[];

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="h-full"
                            >
                                <div className={`h-full bg-white rounded-2xl p-8 border transition-all duration-500 flex flex-col group
                                    ${hoveredIndex === index
                                        ? 'border-primary/20 shadow-[0_30px_60px_-15px_rgba(10,77,77,0.1)] -translate-y-1'
                                        : 'border-slate-100 shadow-sm'
                                    }`}
                                >
                                    {/* Icon & Title Group */}
                                    <div className="mb-6">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500
                                            ${service.color === 'teal'
                                                ? 'bg-primary/5 text-primary'
                                                : 'bg-secondary/10 text-secondary-dark'
                                            }
                                            ${hoveredIndex === index ? 'scale-110' : ''}`}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                            {t(`services.items.${service.id}.title`)}
                                        </h3>
                                        <p className="text-slate-600 font-sans text-[15px] leading-relaxed mb-6">
                                            {t(`services.items.${service.id}.description`)}
                                        </p>
                                    </div>

                                    {/* Features List - Dogob inspired */}
                                    <div className="space-y-3 mb-8 flex-grow">
                                        {Array.isArray(features) && features.map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-3 text-[14px]">
                                                <div className="mt-1 flex-shrink-0">
                                                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                                                </div>
                                                <span className="text-slate-500 font-sans">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-slate-50 mt-auto">
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/link cursor-pointer uppercase">
                                            <span>Explore Service</span>
                                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-1' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
