import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const categories = ["All", "Mobile Apps", "Web Platforms", "AI & Automation", "UX/UI Design"];

const projects = [
    {
        id: "nasasho",
        title: "Nasasho Booking",
        category: "Web Platforms",
        image: "/nasasho.jpg",
        description: "A premium hotel booking system designed for a seamless user experience and efficient property management.",
        tags: ["Next.js", "Tailwind CSS", "UI/UX"],
    },
    {
        id: "guriapp",
        title: "Guri App",
        category: "Mobile Apps",
        image: "/guriapp.png",
        description: "A modern real estate platform for renting and discovering homes with ease.",
        tags: ["React Native", "Firebase", "Real Estate"],
    },
    {
        id: "gaarapp",
        title: "Gaar App",
        category: "Mobile Apps",
        image: "/gaarapp.png",
        description: "A premium car rental and purchase platform designed for seamless vehicle discovery and transactions.",
        tags: ["React Native", "Firebase"],
    },
    {
        id: "meherbooks",
        title: "MeherBooks",
        category: "Mobile Apps",
        image: "/meherbooks.png",
        description: "A comprehensive business management and accounting solution built for MeherBook organization in Kenya.",
        tags: ["React Native", "Node.js"],
    },
];


export default function Professional() {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const getTranslatedCategory = (cat: string) => {
        if (i18n.language === 'en') return cat;
        const mappings: Record<string, Record<string, string>> = {
            'so': { 'All': 'Dhammaan', 'Web Platforms': 'Web-ka', 'Mobile Apps': 'Apps-ka', 'AI & Data Science': 'AI', 'UX/UI Design': 'Naqshadaynta' },
            'sw': { 'All': 'Zote', 'Web Platforms': 'Wavuti', 'Mobile Apps': 'Apps za Simu', 'AI & Data Science': 'AI', 'UX/UI Design': 'Ubunifu' },
            'ar': { 'All': 'الكل', 'Web Platforms': 'الويب', 'Mobile Apps': 'تطبيقات الجوال', 'AI & Data Science': 'الذكاء الاصطناعي', 'UX/UI Design': 'التصميم' }
        };
        return mappings[i18n.language]?.[cat] || cat;
    };

    return (
        <section id="professional" className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Our <span className="text-primary">Portfolio</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 mb-10">
                        A showcase of our selected works in mobile development, web platforms, and AI solutions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {getTranslatedCategory(cat)}
                            </button>
                        ))}
                    </div>
                </div>


                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-xl bg-slate-100 mb-6 aspect-video">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <ExternalLink className="w-5 h-5 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                        {['meherbooks', 'gaarapp', 'guriapp', 'nasasho'].includes(project.id as string) ? t(`professional.${project.id}.title`) : project.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {['meherbooks', 'gaarapp', 'guriapp', 'nasasho'].includes(project.id as string) ? t(`professional.${project.id}.description`) : project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-28">
                    <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-100 text-center shadow-sm">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Let's build something extraordinary together.
                        </h3>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                            We combine high-end engineering with award-winning design to create solutions that don't just work—they inspire.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-md flex items-center gap-2"
                            >
                                Start a Project
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a
                                href="https://wa.me/252619849199"
                                className="px-10 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-primary transition-all flex items-center gap-2"
                            >
                                Quick Chat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
