import { ArrowRight, Smartphone, Code2, Palette, Globe, Rocket, Sparkles, Cpu, Database } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);

    // Mouse parallax effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX - innerWidth / 2) / 50);
            mouseY.set((clientY - innerHeight / 2) / 50);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const codeSnippets = [
        { code: '<AI />', color: 'from-[#FFD700] to-[#FFA500]', icon: Cpu },
        { code: 'Mobile()', color: 'from-[#0A4D4D] to-[#0D6D6D]', icon: Smartphone },
        { code: '{ML}', color: 'from-[#FFD700] to-[#FFED4E]', icon: Database },
        { code: 'React', color: 'from-[#0A4D4D] to-[#1A5D5D]', icon: Code2 },
    ];

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Animated Background Gradients */}
            <motion.div
                className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 blur-3xl"
                animate={{
                    background: [
                        'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                        'radial-gradient(circle, #0A4D4D 0%, transparent 70%)',
                        'radial-gradient(circle, #FFD700 0%, transparent 70%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* Animated Grid Pattern */}
            <motion.div
                className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0A4D4D08_1px,transparent_1px),linear-gradient(to_bottom,#0A4D4D08_1px,transparent_1px)] bg-[size:32px_32px]"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#FFD700' : '#0A4D4D',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
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
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0A4D4D]/10 to-[#FFD700]/10 text-[#0A4D4D] font-medium text-sm border border-[#0A4D4D]/30 backdrop-blur-sm"
                            variants={itemVariants}
                        >
                            <motion.span
                                className="relative flex h-2 w-2"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
                            </motion.span>
                            #1 Mobile & AI Development Agency in East Africa
                        </motion.div>

                        <motion.h1
                            className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900"
                            variants={itemVariants}
                        >
                            Transforming Ideas into{' '}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700]"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                style={{ backgroundSize: '200% 200%' }}
                            >
                                Digital Reality
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-slate-700 max-w-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            We craft high-performance mobile apps, AI agents, machine learning solutions, and sustainable digital products that drive business growth across East Africa.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#contact"
                                className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-slate-900 px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#FFD700]/30 hover:shadow-[#FFD700]/50"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Your Project
                                <ArrowRight className="h-5 w-5" />
                            </motion.a>
                            <motion.a
                                href="#portfolio"
                                className="inline-flex justify-center items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border-2 border-[#0A4D4D]/20 hover:border-[#0A4D4D]/40 px-8 py-4 rounded-full font-semibold transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Our Work
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="pt-8 border-t border-slate-200 flex gap-8"
                            variants={itemVariants}
                        >
                            {[
                                { value: '5+', label: 'Apps Published' },
                                { value: '4.9/5', label: 'Client Rating' },
                                { value: '100%', label: 'Success Rate' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.p
                                        className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                    >
                                        {stat.value}
                                    </motion.p>
                                    <p className="text-sm text-slate-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="relative lg:h-[600px] flex items-center justify-center"
                        style={{ x, y }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Floating Code Snippets */}
                        {codeSnippets.map((snippet, index) => {
                            const Icon = snippet.icon;
                            const positions = [
                                { top: '10%', left: '-10%' },
                                { top: '20%', right: '-15%' },
                                { bottom: '25%', left: '-5%' },
                                { bottom: '15%', right: '-10%' }
                            ];

                            return (
                                <motion.div
                                    key={index}
                                    className={`absolute z-30 bg-gradient-to-br ${snippet.color} p-4 rounded-2xl shadow-2xl backdrop-blur-sm`}
                                    style={positions[index]}
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [-2, 2, -2],
                                    }}
                                    transition={{
                                        duration: 3 + index * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                    whileHover={{ scale: 1.1, rotate: 0 }}
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-6 w-6 text-white" />
                                        <code className="text-white font-mono font-bold text-lg">
                                            {snippet.code}
                                        </code>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Main Central Hub - Abstract Phone/Interface */}
                        <motion.div
                            className="relative w-80 h-[500px] bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] shadow-2xl border-4 border-slate-200 z-10"
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                                {/* Header */}
                                <motion.div
                                    className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="w-20 h-4 bg-slate-200 rounded-full"></div>
                                    <motion.div
                                        className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Smartphone className="h-4 w-4 text-white" />
                                    </motion.div>
                                </motion.div>

                                {/* Content Area */}
                                <div className="p-6 space-y-6 bg-gradient-to-br from-slate-50 to-white">
                                    {/* Hero Card inside phone */}
                                    <motion.div
                                        className="h-32 rounded-2xl bg-gradient-to-br from-[#0A4D4D] via-[#0D6D6D] to-[#0A4D4D] p-4 text-white flex flex-col justify-between shadow-lg shadow-[#0A4D4D]/30"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <motion.div
                                            className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Sparkles className="h-4 w-4 text-[#FFD700]" />
                                        </motion.div>
                                        <div className="space-y-2">
                                            <motion.div
                                                className="w-3/4 h-3 bg-white/40 rounded"
                                                animate={{ width: ['75%', '85%', '75%'] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="w-1/2 h-3 bg-white/40 rounded"
                                                animate={{ width: ['50%', '60%', '50%'] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Stats Row */}
                                    <motion.div
                                        className="flex gap-4"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.9 }}
                                    >
                                        {[
                                            { icon: Rocket, label: 'Launch', color: 'from-[#FFD700] to-[#FFA500]' },
                                            { icon: Palette, label: 'Design', color: 'from-[#0A4D4D] to-[#0D6D6D]' }
                                        ].map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    className="flex-1 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-3 flex flex-col justify-center items-center gap-2"
                                                    whileHover={{ y: -5, borderColor: '#FFD700' }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <motion.div
                                                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                                                        animate={{ scale: [1, 1.1, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                                                    >
                                                        <Icon className="h-4 w-4" />
                                                    </motion.div>
                                                    <span className="text-xs font-bold text-slate-700">{item.label}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>

                                    {/* List Items */}
                                    <motion.div
                                        className="space-y-3"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.1 }}
                                    >
                                        {[
                                            { icon: Code2, color: 'from-[#FFD700] to-[#FFA500]' },
                                            { icon: Globe, color: 'from-[#0A4D4D] to-[#0D6D6D]' }
                                        ].map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center px-4 gap-3 shadow-sm"
                                                    whileHover={{ x: 5, borderColor: '#FFD700' }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    <motion.div
                                                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                                                        animate={{ rotate: [0, 5, -5, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                                                    >
                                                        <Icon className="h-4 w-4" />
                                                    </motion.div>
                                                    <div className="flex-1">
                                                        <motion.div
                                                            className="w-20 h-2 bg-slate-300 rounded mb-1"
                                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                        />
                                                        <motion.div
                                                            className="w-12 h-2 bg-slate-200 rounded"
                                                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Animated Circles */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-[#0A4D4D]/10 rounded-full -z-10"
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border-2 border-[#FFD700]/10 rounded-full -z-20"
                            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
