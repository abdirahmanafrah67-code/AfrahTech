import { Code2, Palette, Smartphone, Cloud, Database, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const technologies = [
    {
        category: "Mobile Development",
        icon: <Smartphone className="h-8 w-8" />,
        tools: ["React Native", "Flutter", "iOS & Android"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        category: "Web Development",
        icon: <Code2 className="h-8 w-8" />,
        tools: ["React", "Next.js", "Node.js", "TypeScript"],
        color: "from-purple-500 to-pink-500"
    },
    {
        category: "AI & Machine Learning",
        icon: <Zap className="h-8 w-8" />,
        tools: ["Python", "TensorFlow", "OpenAI", "Custom Models"],
        color: "from-orange-500 to-red-500"
    },
    {
        category: "UI/UX Design",
        icon: <Palette className="h-8 w-8" />,
        tools: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        color: "from-green-500 to-emerald-500"
    },
    {
        category: "Backend & Cloud",
        icon: <Cloud className="h-8 w-8" />,
        tools: ["Firebase", "AWS", "Node.js", "MongoDB"],
        color: "from-indigo-500 to-blue-500"
    },
    {
        category: "Database",
        icon: <Database className="h-8 w-8" />,
        tools: ["PostgreSQL", "MongoDB", "Firebase", "SQL"],
        color: "from-cyan-500 to-teal-500"
    }
];

export default function Technologies() {
    const { t, i18n } = useTranslation();

    const getTranslatedCategory = (category: string) => {
        // Simple mapping for categories
        switch (category) {
            case "Mobile Development": return i18n.language === 'sw' ? 'Maendeleo ya Simu' : i18n.language === 'ar' ? 'تطوير تطبيقات الجوال' : i18n.language === 'so' ? 'Horumarinta Apps-ka' : category;
            case "Web Development": return i18n.language === 'sw' ? 'Maendeleo ya Wavuti' : i18n.language === 'ar' ? 'تطوير المواقع الإلكترونية' : i18n.language === 'so' ? 'Horumarinta Mareegaha' : category;
            case "AI & Machine Learning": return i18n.language === 'sw' ? 'AI na Kujifunza kwa Mashine' : i18n.language === 'ar' ? 'الذكاء الاصطناعي وتعلم الآلة' : i18n.language === 'so' ? 'AI iyo Mashiinnada wax barta' : category;
            case "UI/UX Design": return i18n.language === 'sw' ? 'Ubunifu wa UI/UX' : i18n.language === 'ar' ? 'تصميم واجهة وتجربة المستخدم' : i18n.language === 'so' ? 'Naqshadaynta UI/UX' : category;
            case "Backend & Cloud": return i18n.language === 'sw' ? 'Backend na Wingu' : i18n.language === 'ar' ? 'الخدمات الخلفية والسحابية' : i18n.language === 'so' ? 'Backend iyo Daruuraha' : category;
            case "Database": return i18n.language === 'sw' ? 'Hifadhidata' : i18n.language === 'ar' ? 'قواعد البيانات' : i18n.language === 'so' ? 'Hifadhidata' : category;
            default: return category;
        }
    };

    return (
        <section id="technologies" className="section-padding bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('technologies.title')}</h2>
                    <p className="text-lg text-slate-600">
                        {t('technologies.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <div className="text-white">
                                    {tech.icon}
                                </div>
                            </div>

                            {/* Category */}
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                {getTranslatedCategory(tech.category)}
                            </h3>

                            {/* Tools List */}
                            <div className="flex flex-wrap gap-2">
                                {tech.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-secondary/10 hover:text-primary transition-colors"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-block bg-gradient-to-r from-primary via-primary-light to-primary p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">{t('technologies.cta.title')}</h3>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            {t('technologies.cta.description')}
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-primary px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-secondary/50 transform hover:-translate-y-1"
                        >
                            {t('technologies.cta.button')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
