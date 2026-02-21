import { ArrowRight, Smartphone, Code2, Globe, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();

    // Mouse parallax removed for stability

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
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Slower Animated Background Gradients */}
            <motion.div
                className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 blur-3xl"
                animate={{
                    background: [
                        'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                        'radial-gradient(circle, #0A4D4D 0%, transparent 70%)',
                        'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                    ]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 -z-10 w-1/2 h-full opacity-20 blur-3xl"
                animate={{
                    background: [
                        'radial-gradient(circle, #0A4D4D 0%, transparent 70%)',
                        'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                        'radial-gradient(circle, #0A4D4D 0%, transparent 70%)',
                    ]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0A4D4D04_1px,transparent_1px),linear-gradient(to_bottom,#0A4D4D04_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

            {/* Reduced Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#FFD700' : '#0A4D4D',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A4D4D]/5 to-[#FFD700]/5 text-[#0A4D4D] font-medium text-sm border border-[#0A4D4D]/10 backdrop-blur-sm"
                            variants={itemVariants}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
                            </span>
                            {t('hero.badge')}
                        </motion.div>

                        <motion.h1
                            className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900"
                            variants={itemVariants}
                        >
                            {t('hero.title_part1')}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]">
                                {t('hero.title_part2')}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-700 max-w-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            {t('hero.description')}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#contact"
                                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-slate-900 px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {t('hero.cta_start')}
                                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                            </motion.a>
                            <motion.a
                                href="#portfolio"
                                className="inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border-2 border-[#0A4D4D]/10 hover:border-[#0A4D4D]/20 px-8 py-4 rounded-full font-semibold transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {t('hero.cta_work')}
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="pt-8 border-t border-slate-100 flex gap-8"
                            variants={itemVariants}
                        >
                            {[
                                { value: '5+', label: 'Apps Published' },
                                { value: '4.9/5', label: 'Client Rating' },
                                { value: '100%', label: 'Success Rate' }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <p className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {index === 0 ? t('hero.stats.apps') : index === 1 ? t('hero.stats.rating') : t('hero.stats.success')}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative lg:h-[650px] flex items-center justify-center p-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Unique Digital Ecosystem Visualization (The "Afraino Hub") */}
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

                            {/* Central Prism Hub */}
                            <motion.div
                                className="relative w-48 h-48 z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary rounded-[2rem] rotate-45 blur-xl opacity-20 animate-pulse" />
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[2rem] rotate-45 border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent" />
                                    <motion.div
                                        className="relative rounded-full bg-primary p-4 shadow-xl"
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Cpu className="h-10 w-10 text-secondary" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Satellite Service Nodes (A more unique alternative to snippets) */}
                            {[
                                { icon: Code2, label: 'Custom Apps', pos: '-top-4 -left-4', color: 'from-secondary to-secondary-light' },
                                { icon: Smartphone, label: 'Mobile First', pos: 'top-8 -right-12', color: 'from-primary to-[#1A5D5D]' },
                                { icon: Database, label: 'Data Science', pos: '-bottom-8 -right-8', color: 'from-secondary to-secondary-light' },
                                { icon: Globe, label: 'Cloud Solutions', pos: 'bottom-12 -left-12', color: 'from-primary to-[#1A5D5D]' }
                            ].map((node, index) => {
                                const Icon = node.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute ${node.pos} z-20 flex flex-col items-center gap-2 group`}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                    >
                                        <div className={`p-4 rounded-3xl bg-gradient-to-br ${node.color} shadow-lg border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="px-3 py-1 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full shadow-sm">
                                            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-tighter">{node.label}</span>
                                        </div>

                                        {/* Connection Line to Hub */}
                                        <div className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 -z-10 origin-left"
                                            style={{ transform: `rotate(${index * 90 + 225}deg)` }} />
                                    </motion.div>
                                );
                            })}

                            {/* Ambient Floating Shapes (Unique to Afraino Style) */}
                            <motion.div
                                className="absolute -z-10 w-80 h-80 rounded-full border border-secondary/5"
                                animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -z-20 w-[500px] h-[500px] rounded-full border border-primary/5"
                                animate={{ scale: [1.1, 1, 1.1], rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity }}
                            />
                            <div className="absolute inset-0 bg-radial-gradient from-secondary/10 to-transparent blur-3xl -z-30 opacity-30" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
