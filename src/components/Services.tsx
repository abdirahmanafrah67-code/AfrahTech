import { Smartphone, Upload, Send, Layout, Wrench, Globe, Brain, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        id: "mobile",
        icon: <Smartphone className="h-7 w-7" />,
        variant: "dark",
    },
    {
        id: "web",
        icon: <Globe className="h-7 w-7" />,
        variant: "featured", // Highlighted Lime Green Card
    },
    {
        id: "ai",
        icon: <Brain className="h-7 w-7" />,
        variant: "dark",
    },
    {
        id: "publishing",
        icon: <Upload className="h-7 w-7" />,
        variant: "light",
    },
    {
        id: "design",
        icon: <Layout className="h-7 w-7" />,
        variant: "light",
    },
    {
        id: "branding",
        icon: <Send className="h-7 w-7" />,
        variant: "light",
    },
    {
        id: "maintenance",
        icon: <Wrench className="h-7 w-7" />,
        variant: "light",
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
        hidden: { y: 25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="services" className={`relative bg-white py-24 overflow-hidden ${isPage ? 'pt-32 min-h-screen' : ''}`}>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header (Clean Title without badge) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0A2E28] mb-6 leading-tight tracking-tight">
                        Our Mission Is To Make Your{' '}
                        <span className="bg-[#e8f500] text-[#0A2E28] px-3.5 py-1 rounded-2xl inline-block font-black shadow-sm my-1">
                            Business
                        </span>{' '}
                        Better Through Technology
                    </h2>
                </motion.div>

                {/* Services Cards Grid (Brand Color Palette) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => {
                        const features = t(`services.items.${service.id}.features`, { returnObjects: true }) as string[];
                        const isFeatured = service.variant === 'featured';
                        const isDark = service.variant === 'dark';

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="h-full"
                            >
                                <div className={`h-full rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden
                                    ${isFeatured 
                                        ? 'bg-[#e8f500] text-[#0A2E28] shadow-xl shadow-[#e8f500]/25 hover:scale-[1.02]' 
                                        : isDark 
                                            ? 'bg-[#0A2E28] text-white shadow-xl hover:scale-[1.02]' 
                                            : 'bg-[#f4f9f6] text-[#0A2E28] border border-[#0A2E28]/10 hover:scale-[1.02] shadow-sm hover:shadow-md'
                                    }`}
                                >
                                    <div>
                                        {/* Circular Icon Badge */}
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}
                                            ${isFeatured
                                                ? 'bg-[#0A2E28] text-white'
                                                : isDark
                                                    ? 'bg-[#e8f500] text-[#0A2E28]'
                                                    : 'bg-[#0A2E28] text-white'
                                            }`}
                                        >
                                            {service.icon}
                                        </div>

                                        {/* Card Title */}
                                        <h3 className={`text-2xl font-heading font-extrabold mb-3 tracking-tight
                                            ${isFeatured ? 'text-[#0A2E28]' : isDark ? 'text-white' : 'text-[#0A2E28]'}`}
                                        >
                                            {t(`services.items.${service.id}.title`)}
                                        </h3>

                                        {/* Card Description */}
                                        <p className={`text-[15px] font-sans leading-relaxed mb-6 font-medium
                                            ${isFeatured ? 'text-[#0A2E28]/90' : isDark ? 'text-slate-300' : 'text-slate-600'}`}
                                        >
                                            {t(`services.items.${service.id}.description`)}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-3 mb-8">
                                            {Array.isArray(features) && features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-3 text-[14px]">
                                                    <div className="mt-1 flex-shrink-0">
                                                        <Check className={`w-4 h-4 stroke-[3] ${isFeatured ? 'text-[#0A2E28]' : isDark ? 'text-[#e8f500]' : 'text-[#0A2E28]'}`} />
                                                    </div>
                                                    <span className={`font-sans font-medium ${isFeatured ? 'text-[#0A2E28]/90' : isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
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
