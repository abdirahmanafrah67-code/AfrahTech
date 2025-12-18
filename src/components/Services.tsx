import { Smartphone, Upload, Send, Layout, Wrench, Globe, Brain } from 'lucide-react';
import { useState } from 'react';

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
        icon: <Brain className="h-8 w-8" />,
        title: "AI Model & Agents",
        description: "Custom AI models and intelligent agents built to automate tasks and enhance decision-making.",
        color: "orange"
    },
    {
        icon: <Upload className="h-8 w-8" />,
        title: "App Store Publishing",
        description: "Complete handling of the submission process to Google Play Store and Apple App Store.",
        color: "teal"
    },
    {
        icon: <Layout className="h-8 w-8" />,
        title: "UI/UX Design",
        description: "User-centric interfaces designed for intuitive navigation and exceptional user experiences.",
        color: "orange"
    },
    {
        icon: <Send className="h-8 w-8" />,
        title: "Branding & Identity",
        description: "Crafting unique brand identities that resonate with your target audience and stand out.",
        color: "teal"
    },
    {
        icon: <Wrench className="h-8 w-8" />,
        title: "Maintenance & Support",
        description: "Ongoing updates, bug fixes, and performance optimization to keep your digital solutions running smoothly.",
        color: "orange"
    }
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
                    <p className="text-lg text-slate-600">
                        We provide comprehensive digital solutions to help your business grow and succeed in the digital-first world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-300 border group cursor-pointer ${activeIndex === index
                                ? 'border-secondary/50 shadow-xl shadow-secondary/10 -translate-y-1'
                                : 'border-slate-200 hover:shadow-2xl hover:border-primary/30'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-sm ${activeIndex === index
                                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-110'
                                : service.color === 'orange'
                                    ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:shadow-secondary/20'
                                    : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20'
                                }`}>
                                {service.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-3 transition-colors ${activeIndex === index ? 'text-secondary' : 'text-slate-900 group-hover:text-primary'}`}>{service.title}</h3>
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
