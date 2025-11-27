import { CheckCircle2, Award, Users, Clock, Shield, Zap } from 'lucide-react';
import { useState } from 'react';

const reasons = [
    {
        icon: <Award className="h-6 w-6" />,
        title: "Expert Team",
        description: "Skilled developers and designers with years of industry experience delivering top-tier solutions.",
        color: "cyan"
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Quality First",
        description: "We never compromise on quality, ensuring your app is robust, secure, and scalable.",
        color: "light"
    },
    {
        icon: <Clock className="h-6 w-6" />,
        title: "On-Time Delivery",
        description: "We respect deadlines and ensure your project is launched on schedule without cutting corners.",
        color: "cyan"
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Client-Centric Approach",
        description: "Your success is our priority. We work closely with you throughout the entire development process.",
        color: "light"
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Cutting-Edge Technology",
        description: "We use the latest tools and frameworks to build modern, high-performance applications.",
        color: "cyan"
    },
    {
        icon: <CheckCircle2 className="h-6 w-6" />,
        title: "Proven Track Record",
        description: "Successfully delivered multiple apps with thousands of active users across East Africa.",
        color: "light"
    }
];

export default function WhyChoose() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="why-choose" className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Why Choose AFRAH Tech?</h2>
                    <p className="text-lg text-white/90">
                        We're not just developers – we're your partners in digital transformation. Here's what sets us apart.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-all duration-300 group shadow-lg hover:shadow-2xl cursor-pointer ${activeIndex === index ? 'border-secondary/50 shadow-secondary/20' : 'hover:bg-white/10 hover:border-white/20 hover:shadow-secondary/10'}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-md ${activeIndex === index
                                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-110'
                                : reason.color === 'cyan'
                                    ? 'bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary/30'
                                    : 'bg-white/10 text-white group-hover:bg-white/20 group-hover:shadow-lg'
                                }`}>
                                {reason.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-3 transition-colors ${activeIndex === index ? 'text-secondary' : 'text-white'}`}>{reason.title}</h3>
                            <p className="text-white/80 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
