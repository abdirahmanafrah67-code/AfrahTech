import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const steps = [
    {
        id: "discovery",
        icon: <Search className="h-8 w-8" />,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "design",
        icon: <Palette className="h-8 w-8" />,
        color: "from-[#FFD700] to-[#FFA500]"
    },
    {
        id: "development",
        icon: <Code2 className="h-8 w-8" />,
        color: "from-[#0A4D4D] to-[#0D6D6D]"
    },
    {
        id: "delivery",
        icon: <Rocket className="h-8 w-8" />,
        color: "from-purple-500 to-pink-500"
    }
];

export default function Process() {
    const { t } = useTranslation();

    return (
        <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        How We <span className="text-primary">Work</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        Our streamlined process ensures your project is delivered with the highest quality and on schedule.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-12"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 border border-slate-100 group-hover:border-primary/20 transition-all`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                                    0{index + 1}
                                </div>
                            </motion.div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {t(`process.steps.${step.id}.title`)}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed px-4">
                                {t(`process.steps.${step.id}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
