import { Lightbulb, Globe, Shield, Zap, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const teamMembers = [
    { name: "Abdirahman Afrah", role: "Founder & CEO", initials: "AF", image: "/afrah.png" },
    { name: "", role: "Business Development & Growth", initials: "BD", image: "/business_dev.png" },
    { name: "", role: "Data Scientist", initials: "DS", image: "/data_scientist.jpg" },
    { name: "", role: "Technical Lead", initials: "TL", image: "/tech_lead.jpg" },
    { name: "", role: "Head of Design", initials: "HD", image: "/head_of_design.jpg" },
    { name: "", role: "Senior AI Agent", initials: "AI", image: "/ai_specialist.jpg" },
    { name: "", role: "Mobile Architect", initials: "MA" },
];

export default function About() {
    const { t } = useTranslation();
    const location = useLocation();
    const isPage = location.pathname === '/about';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className={`bg-white relative overflow-hidden ${isPage ? 'pt-32 pb-24 min-h-screen' : 'py-24'}`}>
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A4D4D03_1px,transparent_1px),linear-gradient(to_bottom,#0A4D4D03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        East Africa's Premier <span className="text-primary">Digital Partner</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        We are a team of visionary developers and designers based in East Africa, dedicated to bridging the gap between local businesses and global technology standards.
                    </motion.p>
                </div>

                {/* Identity Cards */}
                <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('about.mission.title')}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t('about.mission.description')}
                            </p>
                        </div>
                        <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl shadow-slate-900/10">
                            <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
                            <p className="text-slate-300 leading-relaxed">
                                {t('about.vision.description')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] md:h-full min-h-[400px] rounded-3xl bg-slate-200 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-light opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                            <div className="space-y-6">
                                <Globe className="w-24 h-24 text-primary mx-auto mb-6" />
                                <h4 className="text-3xl font-bold text-slate-900">Regional Expertise, Global Impact.</h4>
                                <p className="text-slate-600 max-w-sm">
                                    Strategic hubs in Mogadishu, Nairobi, and beyond to serve the entire East African ecosystem.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Philosophy & Process Grid */}
                <div className="mb-40">
                    <div className="text-left mb-16">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                        >
                            Our Philosophy
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-slate-900"
                        >
                            Engineered for <span className="text-primary-light">Impact</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { step: "01", icon: Lightbulb, title: "Deep Discovery", text: "We dive deep into your business logic to understand the 'why' before the 'how'." },
                            { step: "02", icon: Shield, title: "Trust & Transparency", text: "Every line of code and every design decision is shared with complete honesty." },
                            { step: "03", icon: Zap, title: "Agile Momentum", text: "Rapid prototyping and iterative development to move from idea to market swiftly." },
                            { step: "04", icon: Globe, title: "Global Standards", text: "Applying silicon-valley engineering standards to every project in East Africa." },
                            { step: "05", icon: Users, title: "User Centricity", text: "We don't just build features; we build experiences that actual humans love to use." },
                            { step: "06", icon: Rocket, title: "Scalable Growth", text: "Architecting solutions that are ready to handle thousands of users from day one." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <value.icon className="w-7 h-7" />
                                    </div>
                                    <span className="text-5xl font-heading font-black text-slate-200/50 group-hover:text-primary/10 transition-colors duration-500 leading-none">
                                        {value.step}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{value.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors">{value.text}</p>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary group-hover:w-1/3 transition-all duration-500 rounded-t-full"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="pt-24 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                            >
                                Our Talent
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold text-slate-900"
                            >
                                The Professional <span className="text-primary-light">Team</span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 max-w-sm text-sm leading-relaxed"
                        >
                            A diverse group of technologists and creative thinkers working together to solve complex digital challenges.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                    >
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="relative mb-6">
                                    <div className="aspect-[4/5] rounded-[2rem] bg-slate-50 overflow-hidden border border-slate-100 group-hover:border-primary/20 transition-all duration-500 relative">
                                        {/* Avatar Placeholder or Image */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-primary/5 group-hover:to-primary/10 transition-colors duration-500">
                                            {member.image ? (
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <span className="text-4xl font-heading font-bold text-slate-200 group-hover:text-primary/20 transition-colors duration-500">
                                                    {member.initials}
                                                </span>
                                            )}
                                        </div>

                                        {/* Overlay Info on Hover could go here, but keeping it clean for now */}
                                        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="flex justify-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                                                    <Globe className="w-4 h-4" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                                                    <Users className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    {member.name && (
                                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                                            {member.name}
                                        </h4>
                                    )}
                                    <p className="text-primary font-semibold text-[11px] uppercase tracking-[0.15em] opacity-80">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
