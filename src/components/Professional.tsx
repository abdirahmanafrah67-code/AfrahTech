import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

type Project = {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
    link?: { href: string; label: string };
};

const projects: Project[] = [
    {
        id: "kabba",
        title: "Kabba Real Estate",
        category: "Web Platforms",
        image: "/portfolio/kabba.jpg",
        description: "A modern real estate website for a property agency in the Dominican Republic — browse the latest listings to buy or rent, request a free property valuation, read expert advice on the blog, and reach the team instantly on WhatsApp. Available in English and Spanish.",
        tags: ["Web Platform", "Real Estate", "Bilingual EN/ES"],
        link: { href: "https://www.kabbarealestate.com", label: "Visit website" },
    },
    {
        id: "anfa",
        title: "ANFA COLLECTION",
        category: "AI Solutions",
        image: "/portfolio/anfa.jpg",
        description: "A WhatsApp AI chatbot for a fashion store, trained on the shop's own data. It knows the products and services and answers customer questions 24/7.",
        tags: ["AI Chatbot", "WhatsApp", "Retail"],
    },
    {
        id: "bokhol",
        title: "Bokhol",
        category: "Web Platforms",
        image: "/portfolio/bokhol.jpg",
        description: "A B2B seafood platform connecting seafood suppliers with professional buyers across Europe — discover suppliers, compare market offers, post sourcing requests and follow the Bokhol Seafood Index. Available in English, Dutch, German and Spanish.",
        tags: ["Web Platform", "B2B Marketplace", "Multilingual"],
        link: { href: "https://www.bokhol.nl", label: "Visit website" },
    },
    {
        id: "teco",
        title: "TECO Construction",
        category: "Web Platforms",
        image: "/portfolio/teco.jpg",
        description: "A responsive website for TIIGSI Engineering Company (TECO), presenting reliable, top-tier building services for residential, commercial and infrastructure projects across Somalia.",
        tags: ["Web Platform", "Construction", "Responsive"],
    },
    {
        id: "mehrad",
        title: "Mehrad",
        category: "Mobile Apps",
        image: "/portfolio/mehrad.jpg",
        description: "A loan and debt tracking app for small businesses — record customer loans, track payments and issue digital receipts, with Mehrad.ai, an AI chatbot that answers questions about your records. Live on Google Play.",
        tags: ["Mobile app", "AI chatbot", "Android"],
        link: { href: "https://play.google.com/store/apps/details?id=com.meherbook.app", label: "View on Google Play" },
    },
    {
        id: "iken",
        title: "IKEN",
        category: "Mobile Apps",
        image: "/portfolio/iken.jpg",
        description: "A food delivery app that connects people with trusted home chefs and nearby restaurants — browse fresh, healthy meals cooked daily, order your favourite dish and get it delivered fast. Live on Google Play.",
        tags: ["Mobile app", "Food delivery", "Android"],
        link: { href: "https://play.google.com/store/apps/details?id=com.afraino.iken", label: "View on Google Play" },
    },
    {
        id: "propmas",
        title: "PROPMAS",
        category: "Mobile Apps",
        image: "/portfolio/propmas.jpg",
        description: "A real estate marketplace app for finding homes and property — search listings by location, compare beds, baths and size, save favourites and message agents.",
        tags: ["Mobile app", "Real Estate", "Marketplace"],
    },
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
        id: "luqma",
        title: "Luqma",
        category: "Mobile Apps",
        image: "/portfolio/luqma-journey.png",
        description: "An AI-powered nutrition tracking app — snap a photo of any meal and instantly get calorie & macro breakdowns.",
        tags: ["React Native", "AI / ML", "Firebase"],
    },
];

// Only show filter chips that actually have projects
const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const TRANSLATED_IDS = ['gaarapp', 'guriapp', 'nasasho'];

export default function Professional() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isPage = location.pathname === '/portfolio';
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filtered = selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory);
    // On the home page show a short preview; the full list lives on /portfolio
    const visible = isPage ? filtered : projects.slice(0, 6);

    const getTranslatedCategory = (cat: string) => {
        if (i18n.language === 'en') return cat;
        const mappings: Record<string, Record<string, string>> = {
            so: { All: 'Dhammaan', 'Web Platforms': 'Web-ka', 'Mobile Apps': 'Apps-ka', 'AI Solutions': 'Xalka AI' },
            sw: { All: 'Zote', 'Web Platforms': 'Wavuti', 'Mobile Apps': 'Apps za Simu', 'AI Solutions': 'Suluhisho za AI' },
            ar: { All: 'الكل', 'Web Platforms': 'الويب', 'Mobile Apps': 'تطبيقات الجوال', 'AI Solutions': 'حلول الذكاء الاصطناعي' },
        };
        return mappings[i18n.language]?.[cat] || cat;
    };

    const titleOf = (p: Project) => (TRANSLATED_IDS.includes(p.id) ? t(`professional.${p.id}.title`) : p.title);
    const descOf = (p: Project) => (TRANSLATED_IDS.includes(p.id) ? t(`professional.${p.id}.description`) : p.description);

    return (
        <section id="professional" className={`bg-white ${isPage ? 'pt-28 md:pt-32 pb-24' : 'py-20 md:py-28'}`}>
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
                    {isPage ? (
                        <>
                            <h1 className="headline">{t('nav.professional')}</h1>
                            <p className="subhead mt-4 text-[#0A2E28]/65">
                                Apps and platforms we've designed, built and launched.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="eyebrow text-[#1a7a1a]">{t('nav.professional')}</p>
                            <h2 className="headline mt-2">Built by Afraino.</h2>
                        </>
                    )}
                </div>

                {/* Segmented filter (portfolio page only) */}
                {isPage && (
                    <div className="flex justify-center mb-10 md:mb-14">
                        <div className="inline-flex p-1 rounded-full surface overflow-x-auto scrollbar-hide max-w-full">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-[14px] whitespace-nowrap transition-all duration-200 ${
                                        selectedCategory === cat
                                            ? 'bg-white text-[#0A2E28] font-medium shadow-[0_1px_4px_rgba(0,0,0,0.1)]'
                                            : 'text-[#0A2E28]/60 hover:text-[#0A2E28]'
                                    }`}
                                >
                                    {getTranslatedCategory(cat)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Project tiles */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                                className="group surface rounded-[22px] overflow-hidden flex flex-col"
                            >
                                <div className="px-5 pt-6 md:px-6 md:pt-7 text-center">
                                    <p className="text-[12px] text-[#1a7a1a] font-medium">
                                        {getTranslatedCategory(project.category)}
                                    </p>
                                    <h3 className="mt-0.5 text-[20px] md:text-[22px] leading-[1.18] font-semibold tracking-[-0.02em]">
                                        {titleOf(project)}
                                    </h3>
                                    <p className="mt-2 text-[14px] leading-[1.45] text-[#0A2E28]/65 line-clamp-2">
                                        {descOf(project)}
                                    </p>
                                    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[14px] [&_.link-more]:text-[14px]">
                                        {project.link && (
                                            <a
                                                href={project.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link-more"
                                            >
                                                {project.link.label} <ArrowUpRight className="w-3.5 h-3.5" />
                                            </a>
                                        )}
                                        <Link to="/book" className="link-more">
                                            Build similar <ChevronRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-5 px-4 md:px-5 pb-0 flex-1 flex items-end">
                                    <div className="w-full aspect-[4/3] rounded-t-[14px] overflow-hidden bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
                                        <img
                                            src={project.image}
                                            alt={titleOf(project)}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {!isPage && (
                    <div className="mt-10 text-center">
                        <Link to="/portfolio" className="btn-primary">
                            See all projects
                        </Link>
                    </div>
                )}

                {/* Closing call to action */}
                {isPage && (
                    <div className="mt-20 md:mt-28 tile-brand rounded-[28px] px-8 py-16 md:py-20 text-center text-white">
                        <h2 className="headline-sm max-w-[640px] mx-auto">
                            Let's build something extraordinary together.
                        </h2>
                        <p className="mt-4 text-[17px] md:text-[19px] text-white/85 max-w-[520px] mx-auto">
                            We combine high-end engineering with thoughtful design to create products people love.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link to="/book" className="btn-primary">
                                Start a project
                            </Link>
                            <a
                                href="https://wa.me/252619849199"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-pill border border-white text-white hover:bg-white/10"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
