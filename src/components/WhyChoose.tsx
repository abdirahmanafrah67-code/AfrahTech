import { CheckCircle2, Award, Users, Clock, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const reasons = [
    {
        id: "team",
        icon: <Award className="h-6 w-6" />,
        color: "cyan"
    },
    {
        id: "quality",
        icon: <Shield className="h-6 w-6" />,
        color: "light"
    },
    {
        id: "delivery",
        icon: <Clock className="h-6 w-6" />,
        color: "cyan"
    },
    {
        id: "centric",
        icon: <Users className="h-6 w-6" />,
        color: "light"
    },
    {
        id: "tech",
        icon: <Zap className="h-6 w-6" />,
        color: "cyan"
    },
    {
        id: "track",
        icon: <CheckCircle2 className="h-6 w-6" />,
        color: "light"
    }
];

export default function WhyChoose() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    return (
        <section id="why-choose" className="section-padding bg-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('why_choose.title')}</h2>
                    <p className="text-lg text-slate-700">
                        {t('why_choose.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`bg-slate-50 p-8 rounded-2xl border transition-all duration-300 group shadow-lg hover:shadow-2xl cursor-pointer ${activeIndex === index
                                ? 'border-secondary bg-secondary/5 shadow-secondary/20'
                                : 'border-slate-200 hover:bg-white hover:border-primary/30 hover:shadow-primary/10'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 shadow-md ${activeIndex === index
                                ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-110'
                                : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg'
                                }`}>
                                {reason.icon}
                            </div>
                            <h3 className={`text-xl font-bold mb-3 transition-colors ${activeIndex === index ? 'text-secondary' : 'text-slate-900 group-hover:text-primary'}`}>
                                {t(`why_choose.items.${reason.id}.title`)}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t(`why_choose.items.${reason.id}.description`)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
