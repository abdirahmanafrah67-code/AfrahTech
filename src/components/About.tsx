import { Globe, Users, Target, Eye, Sparkles, MapPin, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
    { name: "Business Dev", role: "Business Development & Growth", image: "/business_dev.png" },
    { name: "CTO", role: "Chief Technology Officer", image: "/data_scientist.jpg" },
    { name: "Tech Lead", role: "Technical Lead", image: "/tech_lead.jpg" },
    { name: "Head of Design", role: "Head of Design", image: "/head_of_design.jpg" },
    { name: "AI Specialist", role: "Senior AI Agent", image: "/ai_specialist.jpg" },
];

const stats = [
    { value: "50+", label: "Projects Delivered", icon: Award },
    { value: "15+", label: "Countries Served", icon: Globe },
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "99%", label: "Client Satisfaction", icon: Sparkles },
];

const pillars = [
    {
        tag: "Our Mission",
        title: "Empower Businesses Worldwide",
        description: "To empower businesses worldwide with innovative digital solutions that drive growth and transformation.",
        icon: Target,
        bg: "bg-[#0A2E28]",
        tagColor: "bg-secondary/20 text-secondary",
        iconColor: "text-secondary",
        textColor: "text-white",
        descColor: "text-slate-300",
    },
    {
        tag: "Our Vision",
        title: "Leading Global Technology Partner",
        description: "To become the leading global technology partner for businesses seeking digital excellence anywhere in the world.",
        icon: Eye,
        bg: "bg-[#1a7a1a]",
        tagColor: "bg-white/10 text-white",
        iconColor: "text-secondary",
        textColor: "text-white",
        descColor: "text-slate-300",
    },
    {
        tag: "Innovation",
        title: "Cutting-Edge Solutions",
        description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
        icon: Sparkles,
        bg: "bg-[#f0faf0]",
        tagColor: "bg-primary/10 text-primary",
        iconColor: "text-primary",
        textColor: "text-[#0A2E28]",
        descColor: "text-slate-600",
    },
];

const whyItems = [
    "Silicon Valley engineering standards",
    "Agile delivery with full transparency",
    "Dedicated post-launch support",
    "End-to-end project ownership",
    "Multi-platform expertise",
    "AI-powered modern solutions",
];

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" }
        })
    };

    return (
        <section id="about" className="relative overflow-hidden pt-24 pb-0 min-h-screen">

            {/* ── Hero ── */}
            <div
                className="relative pt-20 pb-36 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0d5c0d 0%, #1a7a1a 30%, #4CAF50 65%, #8dc63f 85%, #d4e600 100%)" }}
            >
                {/* Dot-grid overlay */}
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
                {/* Glow orbs */}
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-secondary/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-white text-sm font-semibold tracking-wide">About Us</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.65 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight font-heading"
                    >
                        Your Global{' '}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #e8f500, #f5ff4d)" }}>
                            Digital Partner
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        We are a global team of visionary developers and designers, dedicated to delivering world-class technology solutions to businesses everywhere.
                    </motion.p>
                </div>
            </div>

            {/* ── Floating Stats Bar ── */}
            <div className="relative -mt-16 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center py-8 px-4 group">
                            <stat.icon className="w-6 h-6 text-[#0A2E28] mb-3 group-hover:text-secondary transition-colors duration-300" />
                            <span className="text-3xl font-heading font-black text-[#0A2E28]">{stat.value}</span>
                            <span className="text-[11px] text-slate-500 font-semibold tracking-[0.15em] mt-1 text-center">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── Mission / Vision / Innovation ── */}
            <div className="bg-white pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block bg-[#0A2E28]/5 text-[#0A2E28] text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-5">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A2E28] font-heading leading-tight">
                            Your Goals,{' '}
                            <span className="relative inline-block">
                                Our Commitment
                                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-secondary" />
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className={`relative p-8 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${p.bg}`}
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-black/5 translate-y-1/2 -translate-x-1/2" />
                                <div className="relative">
                                    <span className={`inline-block text-xs font-bold tracking-[0.15em] px-3 py-1.5 rounded-full mb-6 ${p.tagColor}`}>
                                        {p.tag}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                                        <p.icon className={`w-6 h-6 ${p.iconColor}`} />
                                    </div>
                                    <h3 className={`text-xl font-black mb-3 font-heading leading-snug ${p.textColor}`}>{p.title}</h3>
                                    <p className={`text-sm leading-relaxed ${p.descColor}`}>{p.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Global Reach ── */}
            <div className="bg-[#f8f9fa] py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Globe visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative w-72 h-72 md:w-80 md:h-80">
                                <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-ping" style={{ animationDuration: '3s' }} />
                                <div className="absolute inset-4 rounded-full border-2 border-primary/15 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                                <div className="absolute inset-8 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                                <div className="absolute inset-12 rounded-full flex items-center justify-center shadow-2xl"
                                    style={{ background: "linear-gradient(135deg, #0d5c0d, #1a7a1a)" }}>
                                    <Globe className="w-20 h-20 text-white/90 animate-spin-slow" />
                                </div>
                                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute top-4 right-8 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                    <MapPin className="w-3 h-3 text-primary" /> Mogadishu
                                </motion.div>
                                <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 3.5 }}
                                    className="absolute bottom-8 left-2 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                    <MapPin className="w-3 h-3 text-secondary-dark" /> Nairobi
                                </motion.div>
                                <motion.div animate={{ y: [-3, 7, -3] }} transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute bottom-2 right-4 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                    <MapPin className="w-3 h-3 text-primary-light" /> Worldwide
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block bg-[#0A2E28]/5 text-[#0A2E28] text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                                Global Presence
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-[#0A2E28] mb-5 leading-tight font-heading">
                                Global Reach,{' '}
                                <span className="text-primary">Local Expertise</span>
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                Headquartered in Mogadishu and Nairobi, we serve clients worldwide across every continent. Our distributed team brings together diverse perspectives to create solutions that work everywhere.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {whyItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-3">
                                {['Mobile Apps', 'AI & ML', 'Web Platforms', 'UI/UX Design', 'Cloud Solutions'].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#0A2E28] border border-[#0A2E28]/10 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Team Section ── */}
            <div className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block bg-[#0A2E28]/5 text-[#0A2E28] text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full mb-5">
                            Our Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0A2E28] font-heading mb-4 leading-tight">
                            Dedicated Team
                        </h2>
                        <p className="text-slate-500 leading-relaxed font-medium">
                            A diverse group of technologists and creative thinkers working together to solve complex digital challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.5 }}
                                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                            <Users className="w-10 h-10 text-primary/30" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E28]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-sm font-bold text-[#0A2E28] leading-snug group-hover:text-primary transition-colors duration-300 truncate">
                                        {member.name}
                                    </h4>
                                    <p className="text-[10px] text-slate-500 font-semibold tracking-[0.12em] mt-1 leading-tight">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <div className="py-24" style={{ background: "linear-gradient(135deg, #0d5c0d 0%, #1a7a1a 40%, #4CAF50 80%, #8dc63f 100%)" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-white mb-5 font-heading leading-tight"
                    >
                        Ready to Build Something{' '}
                        <span className="text-secondary">Extraordinary?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-medium"
                    >
                        We combine high-end engineering with award-winning design to create solutions that inspire.
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/book"
                            className="inline-flex items-center gap-2 bg-secondary text-[#0A2E28] font-black px-8 py-4 rounded-2xl hover:bg-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="https://wa.me/252619849199"
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300">
                            Quick Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
