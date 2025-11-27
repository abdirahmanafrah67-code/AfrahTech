import { Smartphone, Upload, Palette, Layout, Wrench, Globe } from 'lucide-react';

const services = [
    {
        icon: <Smartphone className="h-8 w-8" />,
        title: "Mobile App Development",
        description: "Native and cross-platform apps built with cutting-edge technology for iOS and Android.",
        color: "orange"
    },
    {
        icon: <Globe className="h-8 w-8" />,
        title: "Web Development",
        description: "Responsive, modern websites and web applications built with the latest frameworks and technologies.",
        color: "teal"
    },
    {
        icon: <Upload className="h-8 w-8" />,
        title: "App Store Publishing",
        description: "Complete handling of the submission process to Google Play Store and Apple App Store.",
        color: "orange"
    },
    {
        icon: <Layout className="h-8 w-8" />,
        title: "UI/UX Design",
        description: "User-centric interfaces designed for intuitive navigation and exceptional user experiences.",
        color: "teal"
    },
    {
        icon: <Palette className="h-8 w-8" />,
        title: "Branding & Identity",
        description: "Crafting unique brand identities that resonate with your target audience and stand out.",
        color: "orange"
    },
    {
        icon: <Wrench className="h-8 w-8" />,
        title: "Maintenance & Support",
        description: "Ongoing updates, bug fixes, and performance optimization to keep your app running smoothly.",
        color: "teal"
    }
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                    <p className="text-lg text-slate-600">
                        We provide comprehensive digital solutions to help your business grow and succeed in the mobile-first world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 group hover:border-primary/30">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm group-hover:shadow-lg ${service.color === 'orange'
                                ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:shadow-secondary/20'
                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20'
                                }`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
