import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sortedPosts, readingMinutes } from '../data/blog';

const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function Blog() {
    const [featured, ...rest] = sortedPosts;

    return (
        <section className="bg-white pt-28 md:pt-32 pb-24">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-14">
                    <h1 className="headline">Blog</h1>
                    <p className="subhead mt-4 text-[#0A2E28]/65">
                        Practical guides on apps, websites and AI for businesses in Somalia.
                    </p>
                </div>

                {/* Featured post */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Link
                        to={`/blog/${featured.slug}`}
                        className="group grid md:grid-cols-[1.35fr_1fr] md:items-center surface rounded-[22px] overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={featured.cover}
                                alt={featured.coverAlt}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 md:p-10 flex flex-col justify-center">
                            <h2 className="text-[24px] md:text-[32px] leading-[1.15] font-semibold tracking-[-0.02em]">
                                {featured.title}
                            </h2>
                            <p className="mt-3 text-[15px] leading-[1.5] text-[#0A2E28]/65 line-clamp-3">{featured.description}</p>
                            <p className="mt-5 text-[13px] text-[#0A2E28]/50">
                                {formatDate(featured.date)} · {readingMinutes(featured)} min read
                            </p>
                        </div>
                    </Link>
                </motion.div>

                {/* All posts */}
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rest.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
                        >
                            <Link
                                to={`/blog/${post.slug}`}
                                className="group h-full flex flex-col surface rounded-[22px] overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={post.cover}
                                        alt={post.coverAlt}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h2 className="text-[18px] leading-[1.25] font-semibold tracking-[-0.01em]">{post.title}</h2>
                                    <p className="mt-2 text-[14px] leading-[1.45] text-[#0A2E28]/65 line-clamp-2">{post.description}</p>
                                    <p className="mt-auto pt-4 text-[12px] text-[#0A2E28]/50">
                                        {formatDate(post.date)} · {readingMinutes(post)} min read
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
