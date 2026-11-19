import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { sortedPosts, readingMinutes } from '../data/blog';

const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

// Home page teaser: the three newest articles
export default function BlogPreview() {
    const latest = sortedPosts.slice(0, 3);

    return (
        <section id="blog" className="bg-white py-20 md:py-28 border-t border-black/[0.06]">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 md:mb-10">
                    <div>
                        <h2 className="headline-sm">Insights for growing businesses.</h2>
                    </div>
                    <Link to="/blog" className="link-more flex-shrink-0">
                        View all articles <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {latest.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: i * 0.06 }}
                            className={i === 2 ? 'sm:hidden lg:block' : ''}
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
                                    <h3 className="text-[18px] leading-[1.25] font-semibold tracking-[-0.01em] text-[#0A2E28] line-clamp-3">
                                        {post.title}
                                    </h3>
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
