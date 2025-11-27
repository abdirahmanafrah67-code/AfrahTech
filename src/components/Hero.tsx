import { ArrowRight, Smartphone, Code2, Palette, Globe, Rocket, BarChart3 } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-secondary/20 to-transparent opacity-60 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-tr from-secondary/20 to-transparent opacity-60 blur-3xl"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm border border-secondary/30 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            #1 Mobile Development Agency in Somalia
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                            Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary-light to-secondary">Digital Reality</span>
                        </h1>

                        <p className="text-xl text-white/90 max-w-lg leading-relaxed">
                            We craft high-performance mobile apps, stunning UI/UX designs, and scalable digital solutions that drive business growth across East Africa.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transform hover:-translate-y-1">
                                Start Your Project
                                <ArrowRight className="h-5 w-5" />
                            </a>
                            <a href="#portfolio" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm hover:border-secondary/50">
                                View Our Work
                            </a>
                        </div>

                        <div className="pt-8 border-t border-white/20 flex gap-8">
                            <div>
                                <p className="text-3xl font-bold text-secondary">5+</p>
                                <p className="text-sm text-white/80">Apps Published</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-secondary">4.9/5</p>
                                <p className="text-sm text-white/80">Client Rating</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-secondary">100%</p>
                                <p className="text-sm text-white/80">Success Rate</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in delay-200 perspective-1000">
                        {/* Main Central Hub - Abstract Phone/Interface */}
                        <div className="relative w-80 h-[500px] bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] shadow-2xl border-4 border-slate-200 z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                            <div className="absolute inset-0 rounded-[2.2rem] overflow-hidden">
                                {/* Header */}
                                <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6">
                                    <div className="w-20 h-4 bg-slate-200 rounded-full"></div>
                                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                                        <Smartphone className="h-4 w-4 text-secondary" />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 space-y-6 bg-gradient-to-br from-slate-50 to-white">
                                    {/* Hero Card inside phone */}
                                    <div className="h-32 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-primary p-4 text-white flex flex-col justify-between shadow-lg shadow-primary/30">
                                        <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                                        <div className="space-y-2">
                                            <div className="w-3/4 h-3 bg-white/40 rounded"></div>
                                            <div className="w-1/2 h-3 bg-white/40 rounded"></div>
                                        </div>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="flex gap-4">
                                        <div className="flex-1 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-3 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                <Rocket className="h-4 w-4" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">Launch</span>
                                        </div>
                                        <div className="flex-1 h-24 rounded-2xl bg-white border border-slate-200 shadow-sm p-3 flex flex-col justify-center items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Palette className="h-4 w-4" />
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">Design</span>
                                        </div>
                                    </div>

                                    {/* List Items */}
                                    <div className="space-y-3">
                                        <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center px-4 gap-3 shadow-sm">
                                            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                                <Code2 className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="w-20 h-2 bg-slate-300 rounded mb-1"></div>
                                                <div className="w-12 h-2 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center px-4 gap-3 shadow-sm">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                <Globe className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="w-20 h-2 bg-slate-300 rounded mb-1"></div>
                                                <div className="w-12 h-2 bg-slate-200 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements - Orbiting the main hub */}

                        {/* Element 1: Code/Dev */}
                        <div className="absolute top-20 -left-12 lg:-left-20 bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-secondary/10 p-2.5 rounded-xl">
                                    <Code2 className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Development</p>
                                    <p className="text-sm font-bold text-slate-900">Clean Code</p>
                                </div>
                            </div>
                        </div>

                        {/* Element 2: Analytics/Growth */}
                        <div className="absolute bottom-32 -right-12 lg:-right-16 bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 z-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2.5 rounded-xl">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium">Growth</p>
                                    <p className="text-sm font-bold text-slate-900">+150% Users</p>
                                </div>
                            </div>
                        </div>

                        {/* Element 3: UI/UX */}
                        <div className="absolute top-1/2 -right-20 lg:-right-24 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 z-0 opacity-90 animate-pulse" style={{ animationDuration: '3s' }}>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Palette className="h-5 w-5" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">UI/UX</span>
                            </div>
                        </div>

                        {/* Element 4: Publishing */}
                        <div className="absolute bottom-20 -left-8 lg:-left-12 bg-white p-3 rounded-2xl shadow-xl border border-slate-200 z-20 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Rocket className="h-4 w-4" />
                                </div>
                                <span className="text-xs font-bold text-slate-700">Published</span>
                            </div>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full -z-10"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white/5 rounded-full -z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
