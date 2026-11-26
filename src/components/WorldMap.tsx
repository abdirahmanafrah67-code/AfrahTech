import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { WORLD_MAP, MOGADISHU, CLIENT_MARKERS, somaliaDots, eastAfricaDots, worldDots } from '../data/worldDots';

// Apple-style neutral palette (deliberately not the brand colours)
const INK = '#1d1d1f';
const GREY = '#86868b';
const LAND = '#bdbdc2';
const FAINT = '#ececf0';
const SEA = '#c9dcf2'; // pale blue dots for the oceans
const BLUE = '#0071e3';
const R = 2.3;

const dist = (x: number, y: number) => Math.hypot(x - MOGADISHU.x, y - MOGADISHU.y);
const withDist = (flat: number[]) => {
    const out: { x: number; y: number; d: number }[] = [];
    for (let i = 0; i < flat.length; i += 2) out.push({ x: flat[i], y: flat[i + 1], d: dist(flat[i], flat[i + 1]) });
    return out;
};
const world = withDist(worldDots);
const east = withDist(eastAfricaDots);
const somalia = withDist(somaliaDots);
const markers = CLIENT_MARKERS.map((m) => ({ ...m, d: dist(m.x, m.y) }));

export default function WorldMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    // With "reduce motion" on, show the final state straight away
    const lit = useInView(mapRef, { once: true, margin: '-100px' }) || !!reduceMotion;
    // A wave spreads out from Mogadishu: the further a dot, the later it lights up
    const wave = (d: number, base = 0.2) => (reduceMotion ? undefined : `fill 0.5s ease ${base + d * 0.0018}s`);

    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-[980px] mx-auto px-4 sm:px-6 text-center"
            >
                <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.03em]" style={{ color: INK }}>
                    Made in Mogadishu.
                    <br />
                    Built for the world.
                </h2>
                <p className="mt-5 max-w-[640px] mx-auto text-[19px] md:text-[21px] leading-[1.4]" style={{ color: '#6e6e73' }}>
                    From our headquarters in Somalia, we build apps, websites and AI for businesses across East Africa, Europe
                    and the Caribbean.
                </p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-0.5 text-[17px] hover:underline" style={{ color: '#0066cc' }}>
                    Work with us <ChevronRight className="w-4 h-4" />
                </Link>
            </motion.div>

            <div ref={mapRef} className="mt-14 md:mt-16 max-w-[1040px] mx-auto md:px-6 overflow-hidden">
                <svg
                    viewBox={`0 0 ${WORLD_MAP.width} ${WORLD_MAP.height}`}
                    // On phones the map is widened and centred on Africa and Europe
                    className="block h-auto w-[165%] max-w-none -ml-[42%] md:w-full md:ml-0"
                    role="img"
                    aria-label="World dot map of land and sea showing Afraino's headquarters in Mogadishu, Somalia, its home region of East Africa, and client projects in Kenya, the Netherlands and the Dominican Republic"
                >
                    {/* Sea: a repeating dot pattern on the same grid as the land dots,
                        so every land dot sits exactly on top of (and hides) a sea dot */}
                    <defs>
                        <pattern id="sea-dots" width={WORLD_MAP.step} height={WORLD_MAP.step} patternUnits="userSpaceOnUse">
                            <circle cx={WORLD_MAP.step / 2} cy={WORLD_MAP.step / 2} r={1.1} fill={SEA} />
                        </pattern>
                        {/* Fade the sea out towards the edges so the map blends into the page */}
                        <radialGradient id="sea-fade" cx="50%" cy="50%" r="60%">
                            <stop offset="55%" stopColor="#fff" stopOpacity={1} />
                            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                        </radialGradient>
                        <mask id="sea-mask">
                            <rect width={WORLD_MAP.width} height={WORLD_MAP.height} fill="url(#sea-fade)" />
                        </mask>
                    </defs>
                    <rect width={WORLD_MAP.width} height={WORLD_MAP.height} fill="url(#sea-dots)" mask="url(#sea-mask)" />

                    {world.map(({ x, y, d }) => (
                        <circle key={`w${x},${y}`} cx={x} cy={y} r={R} fill={lit ? LAND : FAINT} style={{ transition: wave(d, 0) }} />
                    ))}
                    {east.map(({ x, y, d }) => (
                        <circle key={`e${x},${y}`} cx={x} cy={y} r={R} fill={lit ? GREY : FAINT} style={{ transition: wave(d) }} />
                    ))}
                    {somalia.map(({ x, y, d }) => (
                        <circle key={`s${x},${y}`} cx={x} cy={y} r={R} fill={lit ? INK : FAINT} style={{ transition: wave(d, 0.1) }} />
                    ))}

                    {/* Client project markers */}
                    {markers.map((m) => (
                        <motion.circle
                            key={m.name}
                            cx={m.x}
                            cy={m.y}
                            r={5}
                            fill={INK}
                            stroke="#ffffff"
                            strokeWidth={2}
                            initial={reduceMotion ? false : { scale: 0 }}
                            animate={lit ? { scale: 1 } : undefined}
                            transition={{ duration: 0.35, delay: 0.4 + m.d * 0.0018 }}
                            style={{ transformOrigin: `${m.x}px ${m.y}px` }}
                        >
                            <title>{m.name}</title>
                        </motion.circle>
                    ))}

                    {/* Mogadishu HQ */}
                    {!reduceMotion && (
                        <motion.circle
                            cx={MOGADISHU.x}
                            cy={MOGADISHU.y}
                            fill="none"
                            stroke={BLUE}
                            strokeWidth={1.5}
                            initial={{ r: 6, opacity: 0.8 }}
                            animate={{ r: [6, 24], opacity: [0.8, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                        />
                    )}
                    <circle cx={MOGADISHU.x} cy={MOGADISHU.y} r={6} fill={BLUE} stroke="#ffffff" strokeWidth={2} />
                </svg>
            </div>

            <div className="mt-8 px-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px]" style={{ color: GREY }}>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: BLUE }} /> Mogadishu HQ</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: INK }} /> Client projects: Kenya, Netherlands, Dominican Republic</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: GREY }} /> East Africa</span>
            </div>
        </section>
    );
}
