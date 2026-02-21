import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        author: "Ahmed Mohamed",
        role: "CEO, Nasasho Group",
        image: "https://i.pravatar.cc/150?u=ahmed",
        content: "Afraino transformed our vision into a stunning reality. Their expertise in mobile booking systems is unmatched in East Africa.",
        rating: 5
    },
    {
        id: 2,
        author: "Sarah Juma",
        role: "Product Manager, Guri Realty",
        image: "https://i.pravatar.cc/150?u=sarah",
        content: "The design quality and attention to detail Sarah's team brought to our real estate app was exceptional. They are true partners.",
        rating: 5
    },
    {
        id: 3,
        author: "David Kariuki",
        role: "Director, MeherBooks Kenya",
        image: "https://i.pravatar.cc/150?u=david",
        content: "From backend architecture to user interface, Afraino delivered a professional enterprise solution that exceeded our expectations.",
        rating: 5
    }
];

export default function Testimonials() {

    return (
        <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        Client Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Trusted by <span className="text-primary">Leading Brands</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        Don't just take our word for it. Here's what our partners say about working with Afraino.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                            className="relative group h-full"
                        >
                            {/* Decorative Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="h-full bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] border border-slate-100 group-hover:border-primary/20 transition-all duration-500 flex flex-col relative z-10 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                                {/* Quote Icon Float */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-secondary rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <Quote size={20} />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                        >
                                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                                        </motion.div>
                                    ))}
                                </div>

                                <blockquote className="flex-1">
                                    <p className="text-slate-700 text-lg leading-relaxed mb-10 font-medium">
                                        "{testimonial.content}"
                                    </p>
                                </blockquote>

                                <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner ring-2 ring-white ring-offset-2 ring-offset-slate-50">
                                            <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-lg flex items-center justify-center border-2 border-white">
                                            <Star size={10} className="fill-primary text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">{testimonial.author}</h4>
                                        <p className="text-sm text-primary font-semibold tracking-wide uppercase">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
