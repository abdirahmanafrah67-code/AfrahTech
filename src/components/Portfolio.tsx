import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Apple, Star, ArrowUpRight, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

const projects = [
    {
        id: 'luqma',
        name: 'Luqma',
        tagline: 'Snap. Track. Thrive.',
        category: 'Health & Nutrition App',
        categoryType: 'Mobile Apps',
        description:
            'An AI-powered nutrition tracking app that lets users snap a photo of any meal and instantly get detailed calorie & macro breakdowns. Features personalized meal plans, daily recommendations, and journey tracking.',
        platform: 'iOS & Android',
        tech: ['React Native', 'AI / ML', 'Node.js', 'Firebase'],
        rating: 4.8,
        reviews: '2.4k',
        bgDark: '#0a1f0a',
        accentBg: '#e8f500',
        icon: '/portfolio/luqma-icon.png',
        screenshots: [
            { src: '/portfolio/luqma-snap.png', label: 'Snap a Photo' },
            { src: '/portfolio/luqma-plan.png', label: 'Personalized Plan' },
            { src: '/portfolio/luqma-journey.png', label: 'Track Your Journey' },
        ],
    },
    {
        id: 'nasasho',
        name: 'Nasasho Booking',
        tagline: 'Book with confidence.',
        category: 'Web Platform',
        categoryType: 'Web Platforms',
        description:
            'A premium hotel booking system designed for a seamless user experience and efficient property management. Built with modern web technologies for speed and reliability.',
        platform: 'Web',
        tech: ['Next.js', 'Tailwind CSS', 'UI/UX'],
        rating: 4.7,
        reviews: '1.2k',
        bgDark: '#0A2E28',
        accentBg: '#e8f500',
        icon: '/afraino-icon.jpg',
        screenshots: [
            { src: '/nasasho.jpg', label: 'Hotel Booking Platform' },
        ],
    },
    {
        id: 'guriapp',
        name: 'Guri App',
        tagline: 'Find your perfect home.',
        category: 'Mobile App',
        categoryType: 'Mobile Apps',
        description:
            'A modern real estate platform for renting and discovering homes with ease. Guri connects tenants and landlords with a seamless, intuitive mobile experience.',
        platform: 'iOS & Android',
        tech: ['React Native', 'Firebase', 'Real Estate'],
        rating: 4.6,
        reviews: '890',
        bgDark: '#131b2e',
        accentBg: '#e8f500',
        icon: '/afraino-icon.jpg',
        screenshots: [
            { src: '/guriapp.png', label: 'Guri App' },
        ],
    },
    {
        id: 'gaarapp',
        name: 'Gaar App',
        tagline: 'Drive the future.',
        category: 'Mobile App',
        categoryType: 'Mobile Apps',
        description:
            'A premium car rental and purchase platform designed for seamless vehicle discovery and transactions. Gaar redefines how people find and book vehicles on mobile.',
        platform: 'iOS & Android',
        tech: ['React Native', 'Firebase', 'Payments'],
        rating: 4.5,
        reviews: '670',
        bgDark: '#1a1a2e',
        accentBg: '#e8f500',
        icon: '/afraino-icon.jpg',
        screenshots: [
            { src: '/gaarapp.png', label: 'Gaar App' },
        ],
    },
    {
        id: 'meherbooks',
        name: 'MeherBooks',
        tagline: 'Accounting made simple.',
        category: 'Mobile App',
        categoryType: 'Mobile Apps',
        description:
            'A comprehensive business management and accounting solution built for MeherBook organization in Kenya. Streamlines invoicing, expense tracking, and financial reporting.',
        platform: 'iOS & Android',
        tech: ['React Native', 'Node.js', 'Finance'],
        rating: 4.9,
        reviews: '540',
        bgDark: '#1a120a',
        accentBg: '#e8f500',
        icon: '/afraino-icon.jpg',
        screenshots: [
            { src: '/meherbooks.png', label: 'MeherBooks' },
        ],
    },
];

const categoryFilters = ['All', 'Mobile Apps', 'Web Platforms'];

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All' ? projects : projects.filter(p => p.categoryType === filter);
    const activeProject = filtered[activeIndex] ?? filtered[0];

    const handleSelect = (i: number) => {
        setActiveIndex(i);
        setActiveScreenshot(0);
    };

    const handleFilter = (f: string) => {
        setFilter(f);
        setActiveIndex(0);
        setActiveScreenshot(0);
    };

    const prevScreenshot = () =>
        setActiveScreenshot(i => i === 0 ? activeProject.screenshots.length - 1 : i - 1);
    const nextScreenshot = () =>
        setActiveScreenshot(i => i === activeProject.screenshots.length - 1 ? 0 : i + 1);

    return (
        <section id="portfolio" className="bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0A2E28] leading-tight tracking-tight">
                        Our{' '}
                        <span className="bg-[#e8f500] text-[#0A2E28] px-3.5 py-1 rounded-2xl inline-block font-black shadow-sm">
                            Portfolio
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg font-sans max-w-xl mx-auto">
                        A showcase of our selected works in mobile development, web platforms, and AI solutions.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categoryFilters.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                                filter === cat
                                    ? 'bg-[#0A2E28] text-white border-[#0A2E28] shadow-md'
                                    : 'bg-white text-[#0A2E28] border-[#0A2E28]/20 hover:border-[#0A2E28]/50'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project Tabs (thumbnail row) */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
                    {filtered.map((p, i) => (
                        <button
                            key={p.id}
                            onClick={() => handleSelect(i)}
                            className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border transition-all duration-200 font-semibold text-sm ${
                                i === activeIndex
                                    ? 'bg-[#0A2E28] text-white border-[#0A2E28] shadow-lg'
                                    : 'bg-white text-[#0A2E28] border-[#0A2E28]/15 hover:border-[#0A2E28]/40'
                            }`}
                        >
                            <img src={p.icon} alt={p.name} className="w-6 h-6 rounded-lg object-cover flex-shrink-0" />
                            {p.name}
                        </button>
                    ))}
                </div>

                {/* Main Project Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl overflow-hidden shadow-2xl"
                        style={{ background: activeProject.bgDark }}
                    >
                        <div className="grid lg:grid-cols-2 gap-0 min-h-[520px]">

                            {/* Left: Info Panel */}
                            <div className="flex flex-col justify-between p-10 lg:p-12">
                                <div>
                                    {/* App Icon & Name */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl border-2 border-white/10 flex-shrink-0">
                                            <img
                                                src={activeProject.icon}
                                                alt={activeProject.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <span
                                                className="text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-1 inline-block"
                                                style={{ background: activeProject.accentBg, color: '#0A2E28' }}
                                            >
                                                {activeProject.category}
                                            </span>
                                            <h3 className="text-2xl font-heading font-extrabold text-white leading-none">
                                                {activeProject.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-xl font-heading font-bold text-white/90 mb-4 leading-snug">
                                        {activeProject.tagline}
                                    </p>

                                    <p className="text-slate-400 font-sans text-[15px] leading-relaxed mb-6">
                                        {activeProject.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {activeProject.tech.map(t => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 text-white/80 border border-white/10"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats + CTA */}
                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                                    {/* Rating */}
                                    <div className="flex items-center gap-1.5">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(activeProject.rating) ? 'fill-[#e8f500] text-[#e8f500]' : 'text-white/20'}`} />
                                            ))}
                                        </div>
                                        <span className="text-white font-bold text-sm">
                                            {activeProject.rating}
                                            <span className="text-white/50 font-normal ml-1">({activeProject.reviews})</span>
                                        </span>
                                    </div>

                                    {/* Platform */}
                                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                                        {activeProject.platform === 'Web'
                                            ? <Globe className="w-4 h-4" />
                                            : <><Smartphone className="w-4 h-4" /><Apple className="w-4 h-4" /></>
                                        }
                                        <span>{activeProject.platform}</span>
                                    </div>

                                    {/* CTA */}
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-sm shadow-lg"
                                        style={{ background: activeProject.accentBg, color: '#0A2E28' }}
                                    >
                                        Build Similar
                                        <ArrowUpRight className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Right: Screenshot Viewer */}
                            <div className="relative flex items-center justify-center p-8 bg-gradient-to-br from-white/5 to-transparent">
                                <div className="relative w-full max-w-[300px] mx-auto">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeProject.id + activeScreenshot}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -30 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10"
                                        >
                                            <img
                                                src={activeProject.screenshots[activeScreenshot].src}
                                                alt={activeProject.screenshots[activeScreenshot].label}
                                                className="w-full object-cover"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Screenshot Label */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white whitespace-nowrap border border-white/10">
                                        {activeProject.screenshots[activeScreenshot].label}
                                    </div>
                                </div>

                                {/* Nav Arrows (only show if more than 1 screenshot) */}
                                {activeProject.screenshots.length > 1 && (
                                    <>
                                        <button onClick={prevScreenshot} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm">
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button onClick={nextScreenshot} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                {/* Dot Indicators */}
                                {activeProject.screenshots.length > 1 && (
                                    <div className="absolute bottom-4 right-6 flex gap-1.5">
                                        {activeProject.screenshots.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setActiveScreenshot(i)}
                                                className={`h-2 rounded-full transition-all ${i === activeScreenshot ? 'bg-[#e8f500] w-5' : 'w-2 bg-white/30'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Teaser */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-8 text-center"
                >
                    <p className="text-slate-400 text-sm font-sans">
                        More projects coming soon —{' '}
                        <a href="#contact" className="text-[#0A2E28] font-bold underline underline-offset-4 hover:text-[#e8f500] transition-colors">
                            let's build yours next
                        </a>
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
