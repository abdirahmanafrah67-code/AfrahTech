import { Globe, Target, Eye, Sparkles, Award, Clock, CheckCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
    { name: 'Business Dev', role: 'Business Development & Growth', image: '/business_dev.png' },
    { name: 'CTO', role: 'Chief Technology Officer', image: '/cto.png' },
    { name: 'Tech Lead', role: 'Technical Lead', image: '/tech_lead.jpg' },
    { name: 'Head of Design', role: 'Head of Design', image: '/head_of_design.jpg' },
    { name: 'AI Specialist', role: 'Senior AI Agent', image: '/ai_specialist.jpg' },
];

const stats = [
    { value: '50+', label: 'Projects Delivered', icon: Award },
    { value: '15+', label: 'Countries Served', icon: Globe },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '99%', label: 'Client Satisfaction', icon: Sparkles },
];

const pillars = [
    {
        tag: 'Our Mission',
        title: 'Empower Businesses Worldwide',
        description: 'To empower businesses worldwide with innovative digital solutions that drive growth and transformation.',
        icon: Target,
        tile: 'bg-[#0A2E28] text-white',
        body: 'text-white/70',
        accent: 'text-[#e8f500]',
    },
    {
        tag: 'Our Vision',
        title: 'Leading Global Technology Partner',
        description: 'To become the leading global technology partner for businesses seeking digital excellence anywhere in the world.',
        icon: Eye,
        tile: 'bg-[#1a7a1a] text-white',
        body: 'text-white/75',
        accent: 'text-[#e8f500]',
    },
    {
        tag: 'Innovation',
        title: 'Cutting-Edge Solutions',
        description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
        icon: Sparkles,
        tile: 'surface text-[#0A2E28]',
        body: 'text-[#0A2E28]/65',
        accent: 'text-[#1a7a1a]',
    },
];

const whyItems = [
    'Silicon Valley engineering standards',
    'Agile delivery with full transparency',
    'Dedicated post-launch support',
    'End-to-end project ownership',
    'Multi-platform expertise',
    'AI-powered modern solutions',
];

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6 },
};

export default function About() {
    return (
        <section id="about" className="bg-white">
            {/* Hero tile */}
            <div className="tile-brand pt-12">
                <div className="max-w-[1024px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center text-white">
                    <motion.h1 {...fadeUp} className="mt-2 text-[44px] leading-[1.05] md:text-[80px] md:leading-[1.03] font-semibold tracking-[-0.035em]">
                        Your global
                        <br />
                        <span className="text-[#0A2E28]">digital partner.</span>
                    </motion.h1>
                    <motion.p {...fadeUp} className="subhead mt-5 max-w-[640px] mx-auto text-white/90">
                        We are a global team of visionary developers and designers, dedicated to delivering world-class technology solutions to businesses everywhere.
                    </motion.p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-16 md:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
                    {stats.map((stat) => (
                        <motion.div key={stat.label} {...fadeUp} className="text-center">
                            <stat.icon className="w-7 h-7 mx-auto text-[#1a7a1a]" strokeWidth={1.5} />
                            <p className="mt-3 text-[40px] md:text-[48px] font-semibold tracking-[-0.03em] leading-none">{stat.value}</p>
                            <p className="mt-2 text-[14px] text-[#0A2E28]/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mission / Vision / Innovation */}
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20 md:pb-28">
                <motion.div {...fadeUp} className="text-center max-w-[720px] mx-auto mb-12">
                    <h2 className="headline-sm">Your goals, our commitment.</h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-3 md:gap-4">
                    {pillars.map((p) => (
                        <motion.div key={p.tag} {...fadeUp} className={`${p.tile} rounded-[22px] p-6 md:p-7 min-h-[240px] flex flex-col`}>
                            <p.icon className={`w-9 h-9 ${p.accent}`} strokeWidth={1.5} />
                            <p className={`mt-6 text-[14px] font-medium ${p.accent}`}>{p.tag}</p>
                            <h3 className="mt-1 text-[24px] leading-[1.17] font-semibold tracking-[-0.02em]">{p.title}</h3>
                            <p className={`mt-3 text-[15px] leading-[1.5] ${p.body}`}>{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Global reach */}
            <div className="surface py-20 md:py-28">
                <div className="max-w-[1024px] mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <motion.div {...fadeUp}>
                        <h2 className="headline-sm">Global reach. Local expertise.</h2>
                        <p className="mt-5 text-[17px] leading-[1.5] text-[#0A2E28]/65">
                            Headquartered in Mogadishu and Nairobi, we serve clients worldwide across every continent. Our distributed team brings together diverse perspectives to create solutions that work everywhere.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['Mogadishu', 'Nairobi', 'Worldwide'].map((city) => (
                                <span key={city} className="inline-flex items-center gap-1.5 bg-white rounded-full px-3.5 py-1.5 text-[13px]">
                                    <MapPin className="w-3.5 h-3.5 text-[#1a7a1a]" /> {city}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                    <motion.ul {...fadeUp} className="bg-white rounded-[28px] p-8 md:p-10 space-y-4">
                        {whyItems.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-[17px]">
                                <CheckCircle className="w-5 h-5 text-[#1a7a1a] flex-shrink-0" strokeWidth={1.75} />
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>

            {/* Team */}
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-20 md:py-28">
                <motion.div {...fadeUp} className="text-center max-w-[640px] mx-auto mb-12">
                    <h2 className="headline-sm">Meet the team.</h2>
                    <p className="mt-4 text-[17px] md:text-[19px] text-[#0A2E28]/65">
                        A diverse group of technologists and creative thinkers working together to solve complex digital challenges.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {teamMembers.map((member) => (
                        <motion.div key={member.name} {...fadeUp} className="group">
                            <div className="aspect-[3/4] rounded-[20px] overflow-hidden surface">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                />
                            </div>
                            <h4 className="mt-3 text-[17px] font-semibold tracking-[-0.01em]">{member.name}</h4>
                            <p className="text-[13px] text-[#0A2E28]/60">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6 pb-20 md:pb-28">
                <div className="tile-brand rounded-[28px] px-8 py-16 md:py-20 text-center text-white">
                    <h2 className="headline-sm max-w-[640px] mx-auto">Ready to build something extraordinary?</h2>
                    <p className="mt-4 text-[17px] md:text-[19px] text-white/85 max-w-[520px] mx-auto">
                        We combine high-end engineering with award-winning design to create solutions that inspire.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link to="/book" className="btn-primary">Start a project</Link>
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
            </div>
        </section>
    );
}
