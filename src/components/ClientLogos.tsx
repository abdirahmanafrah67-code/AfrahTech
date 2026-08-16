import { motion } from 'framer-motion';

const clients = [
    { name: 'Nasasho', logo: '/nasasho.jpg' },
    { name: 'Guri App', logo: '/guriapp.png' },
    { name: 'Gaar App', logo: '/gaarapp.png' },
    { name: 'MeherBooks', logo: '/m-logo.png' },
    { name: 'Iken', logo: '/iken.jpg' },
    { name: 'SkillLab', logo: '/gear-tech.jpg' },
    { name: 'TECO Construction', logo: '/teco.png' },
    { name: 'Luqma', logo: '/luqma.png' },
    { name: 'Bookhol', logo: '/bookhol.png' },
    // Duplicate for seamless infinite scroll
    { name: 'Nasasho', logo: '/nasasho.jpg' },
    { name: 'Guri App', logo: '/guriapp.png' },
    { name: 'Gaar App', logo: '/gaarapp.png' },
    { name: 'MeherBooks', logo: '/m-logo.png' },
    { name: 'Iken', logo: '/iken.jpg' },
    { name: 'SkillLab', logo: '/gear-tech.jpg' },
    { name: 'TECO Construction', logo: '/teco.png' },
    { name: 'Luqma', logo: '/luqma.png' },
    { name: 'Bookhol', logo: '/bookhol.png' },
];

export default function ClientLogos() {
    return (
        <section className="py-16 border-y border-white/5 bg-slate-950/20 backdrop-blur-sm overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <p className="text-sm font-bold text-white tracking-wider">
                    Trusted by industry leaders
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex gap-8 items-center whitespace-nowrap w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35, // Adjusted speed for more items
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3.5 px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.05] hover:border-white/[0.12] rounded-2xl transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md"
                        >
                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/95 p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                            <span className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
