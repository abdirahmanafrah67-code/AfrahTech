import { Smartphone, ExternalLink, Sparkles, Brain, Home, Car, Hotel, FileText } from 'lucide-react';

const apps = [
    {
        name: "Birth Registration System",
        description: "Digital birth registration and certificate management system for government services",
        category: "Government Services",
        image: "/apps/birth-registration.jpg",
        icon: <FileText className="h-7 w-7" />,
        gradient: "from-indigo-500 to-purple-500"
    },
    {
        name: "Nasasho Hotel Booking App",
        description: "Comprehensive hotel booking platform with real-time availability and seamless reservations",
        category: "Hospitality",
        image: "/apps/nasasho-hotel.jpg",
        icon: <Hotel className="h-7 w-7" />,
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        name: "Rent Car App",
        description: "Modern car rental platform with easy booking, flexible rental periods, and fleet management",
        category: "Transportation",
        image: "/apps/rent-car.jpg",
        icon: <Car className="h-7 w-7" />,
        gradient: "from-red-500 to-orange-500"
    },
    {
        name: "Guryo App",
        description: "Smart house rental platform connecting property owners with tenants efficiently",
        category: "Real Estate",
        image: "/apps/guryo-houses.jpg",
        icon: <Home className="h-7 w-7" />,
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        name: "AI Model & Agents Platform",
        description: "Intelligent automation system with custom AI models for business process optimization",
        category: "Artificial Intelligence",
        image: null,
        icon: <Brain className="h-7 w-7" />,
        gradient: "from-purple-500 to-pink-500"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20">
                        <Sparkles className="h-4 w-4" />
                        Our Work
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Apps We've Built</h2>
                    <p className="text-lg text-slate-600">
                        Trusted by leading organizations across Somalia and East Africa. Here are some of our successful projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {apps.map((app, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200 overflow-hidden"
                        >
                            {/* Image or Gradient Header */}
                            {app.image ? (
                                <div className="h-48 overflow-hidden bg-slate-100">
                                    <img
                                        src={app.image}
                                        alt={app.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ) : (
                                <div className={`h-48 bg-gradient-to-br ${app.gradient} flex items-center justify-center`}>
                                    <div className="text-white opacity-80">
                                        {app.icon}
                                    </div>
                                </div>
                            )}

                            <div className="p-8">
                                {/* Icon and External Link */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} p-0.5 shadow-lg`}>
                                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                            {app.icon}
                                        </div>
                                    </div>
                                    <button className="p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-primary transition-all group-hover:scale-110">
                                        <ExternalLink className="h-5 w-5" />
                                    </button>
                                </div>

                                {/* Category Badge */}
                                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-4">
                                    {app.category}
                                </span>

                                {/* App Name */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {app.name}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {app.description}
                                </p>

                                {/* Hover Effect Line */}
                                <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${app.gradient} rounded-full transition-all duration-500`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Organizations Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl blur-xl"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-slate-200 shadow-xl">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Trusted By Leading Organizations</h3>
                            <p className="text-slate-600">We're proud to partner with these amazing companies</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                            <div className="group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center h-28 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1">
                                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors text-center">Government of Somalia</span>
                            </div>
                            <div className="group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center h-28 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1">
                                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Nasasho Hotels</span>
                            </div>
                            <div className="group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center h-28 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1">
                                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Rent Car Services</span>
                            </div>
                            <div className="group bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex items-center justify-center h-28 hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1">
                                <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Guryo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
