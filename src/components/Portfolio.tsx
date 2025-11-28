import { Smartphone, ExternalLink } from 'lucide-react';

const apps = [
    {
        name: "Guryp App",
        description: "Comprehensive group management and communication platform",
        category: "Social & Communication"
    },
    {
        name: "Shirwac Flight Booking App",
        description: "Seamless flight booking experience for travelers",
        category: "Travel & Booking"
    },
    {
        name: "Hotel Booking App",
        description: "Easy hotel reservations and management system",
        category: "Hospitality"
    },
    {
        name: "Somcar App",
        description: "Modern car rental and transportation solution",
        category: "Transportation"
    },
    {
        name: "Birth Registration System",
        description: "Digital birth registration and certificate management",
        category: "Government Services"
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Apps We've Built</h2>
                    <p className="text-lg text-slate-600">
                        Trusted by leading organizations across Somalia and East Africa. Here are some of our successful projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {apps.map((app, index) => (
                        <div key={index} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-primary/30">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shadow-lg border border-primary/20">
                                    <Smartphone className="h-7 w-7 text-primary" />
                                </div>
                                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-secondary transition-colors" />
                            </div>
                            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-4 border border-secondary/20">
                                {app.category}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{app.name}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {app.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Organizations Section */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 border border-slate-200 shadow-lg">
                    <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Organizations We Work With</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-center h-24 hover:shadow-lg hover:border-primary/30 transition-all group">
                            <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Shirwac Airlines</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-center h-24 hover:shadow-lg hover:border-primary/30 transition-all group">
                            <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Somcar</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-center h-24 hover:shadow-lg hover:border-primary/30 transition-all group">
                            <span className="text-lg font-bold text-primary text-center group-hover:text-secondary transition-colors">Government of Somalia</span>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-center justify-center h-24 hover:shadow-lg hover:border-primary/30 transition-all group">
                            <span className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">Guryp</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
