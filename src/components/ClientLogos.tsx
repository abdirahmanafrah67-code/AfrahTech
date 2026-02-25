import { motion } from 'framer-motion';

const clients = [
    { name: 'Nasasho', logo: '/nasasho.jpg' },
    { name: 'Guri App', logo: '/guriapp.png' },
    { name: 'Gaar App', logo: '/gaarapp.png' },
    { name: 'MeherBooks', logo: '/meherbooks.png' },
    { name: 'Iken', logo: '/iken.jpg' },
    { name: 'SkillLab', logo: '/gear-tech.jpg' },
    { name: 'Nasasho', logo: '/nasasho.jpg' }, // Duplicate for seamless scroll
    { name: 'Guri App', logo: '/guriapp.png' },
    { name: 'Gaar App', logo: '/gaarapp.png' },
    { name: 'MeherBooks', logo: '/meherbooks.png' },
    { name: 'Iken', logo: '/iken.jpg' },
    { name: 'Gear Tech', logo: '/gear-tech.jpg' },
];

export default function ClientLogos() {
    return (
        <section className="py-12 bg-white border-b border-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Trusted by industry leaders
                </p>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-12 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 border border-slate-100 p-1 group-hover:border-primary/20">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <span className="text-xl font-bold text-slate-300 group-hover:text-primary transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
        </section>
    );
}
