import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-slate-100 to-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-slate-600">
                        Ready to start your project? Contact us today for a free consultation.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 group">
                            <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Email Us</p>
                                <p className="text-slate-900 font-semibold">afrahTech@gmail.com</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary/30 group">
                            <div className="bg-secondary/10 p-3 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Call Us</p>
                                <p className="text-slate-900 font-semibold">+252 619 849 199</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 group">
                            <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Visit Us</p>
                                <p className="text-slate-900 font-semibold">Mogadishu, Somalia</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none shadow-sm" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 flex justify-center items-center gap-2 transform hover:-translate-y-0.5">
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
