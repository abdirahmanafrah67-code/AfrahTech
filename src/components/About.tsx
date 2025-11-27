import { Target, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-60"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl opacity-60"></div>

                        <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl border border-primary-light/20">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Our Mission & Vision</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-4">
                                    <div className="bg-secondary/20 p-3 rounded-xl h-fit backdrop-blur-sm border border-secondary/20 shadow-lg">
                                        <Target className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Mission</h4>
                                        <p className="text-slate-200 text-sm leading-relaxed">To empower businesses across East Africa with innovative digital solutions that drive growth and transformation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white/10 p-3 rounded-xl h-fit backdrop-blur-sm border border-white/10 shadow-lg">
                                        <Lightbulb className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Vision</h4>
                                        <p className="text-slate-200 text-sm leading-relaxed">To become the leading technology partner for businesses seeking digital excellence in Somalia and beyond.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-secondary/20 p-3 rounded-xl h-fit backdrop-blur-sm border border-secondary/20 shadow-lg">
                                        <Rocket className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Innovation</h4>
                                        <p className="text-slate-200 text-sm leading-relaxed">We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Dedicated to Digital Excellence</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            At AFRAH Tech, we are passionate about technology and its potential to transform businesses. We started with a simple mission: to help companies navigate the complex mobile landscape and build solutions that truly make a difference.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Today, we are a full-service mobile development agency, trusted by leading organizations across Somalia. We don't just build apps; we build lasting partnerships and digital products that drive real value for businesses and their customers.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="border-l-4 border-primary pl-6 bg-gradient-to-r from-primary/5 to-transparent py-4 rounded-r-lg">
                                <p className="text-4xl font-bold text-primary mb-1">24/7</p>
                                <p className="text-slate-600 font-medium">Support Available</p>
                            </div>
                            <div className="border-l-4 border-secondary pl-6 bg-gradient-to-r from-secondary/5 to-transparent py-4 rounded-r-lg">
                                <p className="text-4xl font-bold text-secondary mb-1">100%</p>
                                <p className="text-slate-600 font-medium">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
