import { motion } from 'framer-motion';

const clients = [
    { name: 'Kabba Real Estate', logo: '/kabba-logo.png' },
    { name: 'Nasasho', logo: '/nasasho.jpg' },
    { name: 'Guri App', logo: '/guriapp.png' },
    { name: 'Gaar App', logo: '/gaarapp.png' },
    { name: 'Mehrad', logo: '/m-logo.png' },
    { name: 'Iken', logo: '/iken.jpg' },
    { name: 'SkillLab', logo: '/gear-tech.jpg' },
    { name: 'TECO Construction', logo: '/teco.png' },
    { name: 'Luqma', logo: '/luqma.png' },
    { name: 'Bookhol', logo: '/bookhol.png' },
];

// Rendered twice for a seamless infinite scroll
const loop = [...clients, ...clients];

export default function ClientLogos() {
    return (
        <section className="bg-white py-14 overflow-hidden border-b border-black/[0.06]">
            <p className="text-center text-[14px] text-[#0A2E28]/50 mb-8">
                Trusted by industry leaders
            </p>

            <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    className="flex gap-12 items-center w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                    {loop.map((client, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                            <img src={client.logo} alt={client.name} className="w-10 h-10 rounded-[10px] object-contain bg-white" />
                            <span className="text-[15px] font-medium text-[#0A2E28] whitespace-nowrap">{client.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
