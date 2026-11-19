import { useEffect, useRef, useState } from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Testimonial = {
    id: string;
    client: string;
    person?: string;
    role: string;
    project: string;
    // Short headline, plain English
    title: string;
    // A real quote from the client (shown in quotation marks)
    quote?: string;
    // Star rating out of 5
    rating: number;
    // Used instead of a quote when the client gave no written quote
    summary?: string;
    video: string;
    poster: string;
};

// Videos are self-hosted in /public/testimonials so they play on the site
// with no Facebook player or redirect.
const testimonials: Testimonial[] = [
    {
        id: 'mehrad',
        client: 'Mehrad',
        person: 'Abdullahi Axmed Maxamed',
        role: 'Founder',
        project: 'Mehrad app',
        title: 'From a simple idea to a real app.',
        quote: 'Afraino turned a simple idea into a modern digital system that really works.',
        rating: 5,
        video: '/testimonials/mehrad.mp4',
        poster: '/testimonials/mehrad-poster.jpg',
    },
    {
        id: 'anfa',
        client: 'ANFA COLLECTION',
        role: 'Founder',
        project: 'WhatsApp AI chatbot',
        title: 'A chatbot that knows our business.',
        quote: 'Afraino built us a WhatsApp chatbot that knows our products and gives our customers the right answers.',
        rating: 5,
        video: '/testimonials/anfa.mp4',
        poster: '/testimonials/anfa-poster.jpg',
    },
    {
        id: 'teco',
        client: 'TECO Construction',
        role: 'Client',
        project: 'Software & media marketing',
        title: 'Software and marketing for TECO.',
        summary: 'We built software for TECO Construction and ran their media marketing.',
        rating: 5,
        video: '/testimonials/teco.mp4',
        poster: '/testimonials/teco-poster.jpg',
    },
];

function Stars({ rating, className = '', size }: { rating: number; className?: string; size: string }) {
    return (
        <div className={`flex gap-0.5 ${className}`} role="img" aria-label={`Rated ${rating} out of 5`}>
            {[1, 2, 3, 4, 5].map((n) => (
                <Star
                    key={n}
                    aria-hidden="true"
                    className={`${size} ${n <= rating ? 'fill-[#f5b301] text-[#f5b301]' : 'fill-[#0A2E28]/10 text-transparent'}`}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [activeId, setActiveId] = useState(testimonials[0].id);
    const [started, setStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const item = testimonials.find((t) => t.id === activeId) ?? testimonials[0];

    // When switching client, reset to the cover; play right away if the
    // visitor had already started a video.
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.load();
        if (started) v.play().catch(() => setStarted(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeId]);

    const play = () => {
        setStarted(true);
        videoRef.current?.play();
    };

    return (
        <section id="testimonials" className="surface py-20 md:py-28">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
                    <h2 className="headline">Hear it from our clients.</h2>
                </div>

                {/* Main player */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-video rounded-[28px] overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                >
                    <video
                        ref={videoRef}
                        src={item.video}
                        poster={item.poster}
                        controls={started}
                        playsInline
                        preload="none"
                        className="w-full h-full object-cover"
                    />
                    {!started && (
                        <button
                            onClick={play}
                            aria-label={`Play ${item.client} video`}
                            className="group absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                        >
                            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">
                                <Play className="w-7 h-7 md:w-8 md:h-8 text-[#0A2E28] fill-current ms-1" />
                            </span>
                        </button>
                    )}
                </motion.div>

                {/* Quote */}
                <div className="mt-10 md:mt-12 text-center max-w-[760px] mx-auto min-h-[180px]">
                    <Stars rating={item.rating} className="justify-center mb-4" size="w-5 h-5" />
                    <h3 className="text-[24px] md:text-[32px] leading-[1.15] font-semibold tracking-[-0.025em] text-[#0A2E28]">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-[17px] md:text-[19px] leading-[1.45] text-[#0A2E28]/70">
                        {item.quote ? `“${item.quote}”` : item.summary}
                    </p>
                    <p className="mt-5 text-[15px] font-semibold text-[#0A2E28]">
                        {item.person ? `${item.person}, ${item.role}, ${item.client}` : item.client}
                    </p>
                    <p className="text-[14px] text-[#0A2E28]/55">{item.project}</p>
                </div>

                {/* Client picker */}
                <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
                    {testimonials.map((t) => {
                        const active = t.id === item.id;
                        return (
                            <button
                                key={t.id}
                                onClick={() => setActiveId(t.id)}
                                aria-pressed={active}
                                className={`group text-start rounded-[18px] overflow-hidden bg-white transition-all duration-200 ${
                                    active
                                        ? 'ring-2 ring-[#1a7a1a] shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                                        : 'ring-1 ring-black/[0.06] opacity-70 hover:opacity-100'
                                }`}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={t.poster}
                                        alt={t.client}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                    />
                                </div>
                                <div className="px-3 py-2.5 md:px-4 md:py-3">
                                    <Stars rating={t.rating} className="mb-1" size="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    <p className="text-[13px] md:text-[15px] font-semibold text-[#0A2E28] truncate">{t.client}</p>
                                    <p className="hidden sm:block text-[12px] md:text-[13px] text-[#0A2E28]/55 truncate">{t.project}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/book" className="btn-primary">
                        Start your project
                    </Link>
                </div>
            </div>
        </section>
    );
}
