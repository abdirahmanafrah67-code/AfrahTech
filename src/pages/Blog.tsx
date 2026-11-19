import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { sortedPosts, readingMinutes, type Post } from '../data/blog';

const PAGE_SIZE = 9;

const formatDate = (iso: string) =>
    new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

// Topics come from the posts themselves, so new categories appear automatically
export const blogTopics = Array.from(new Set(sortedPosts.map((p) => p.category)));

function PostCard({ post, index }: { post: Post; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
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
    );
}

export default function Blog() {
    const [params, setParams] = useSearchParams();
    const topic = blogTopics.includes(params.get('topic') ?? '') ? (params.get('topic') as string) : 'All';
    const [query, setQuery] = useState('');
    const [shown, setShown] = useState(PAGE_SIZE);

    const setTopic = (t: string) => {
        setShown(PAGE_SIZE);
        setParams(t === 'All' ? {} : { topic: t }, { replace: true });
    };

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return sortedPosts.filter(
            (p) =>
                (topic === 'All' || p.category === topic) &&
                (!q || `${p.title} ${p.description} ${p.keywords.join(' ')}`.toLowerCase().includes(q)),
        );
    }, [topic, query]);

    // Big featured card only on the unfiltered view
    const showFeatured = topic === 'All' && !query.trim() && filtered.length > 0;
    const featured: Post | undefined = showFeatured ? filtered[0] : undefined;
    const rest = showFeatured ? filtered.slice(1) : filtered;
    const grid = rest.slice(0, shown);

    return (
        <section className="bg-white pt-20 md:pt-24 pb-24">
            <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
                {/* Search */}
                <label className="relative block w-full md:w-[360px] mx-auto mb-10 md:mb-12">
                    <span className="sr-only">Search articles</span>
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A2E28]/40" />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setShown(PAGE_SIZE); }}
                        placeholder="Search articles"
                        className="w-full surface rounded-full pl-10 pr-9 py-2 text-[14px] text-[#0A2E28] placeholder:text-[#0A2E28]/40 outline-none focus:ring-2 focus:ring-[#1a7a1a]/30 [&::-webkit-search-cancel-button]:hidden"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            aria-label="Clear search"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A2E28]/40 hover:text-[#0A2E28]"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </label>

                <div className="text-center max-w-[720px] mx-auto mb-8 md:mb-10">
                    <h1 className="headline">{topic === 'All' ? 'Blog' : topic}</h1>
                    <p className="subhead mt-4 text-[#0A2E28]/65">
                        {topic === 'All'
                            ? 'Practical guides on apps, websites and AI for businesses in Somalia.'
                            : `${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'} on ${topic} for businesses in Somalia.`}
                    </p>
                </div>

                {/* Topics */}
                <div className="mb-8">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center md:overflow-visible">
                        {['All', ...blogTopics].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTopic(t)}
                                aria-pressed={topic === t}
                                className={`px-4 py-1.5 rounded-full text-[14px] whitespace-nowrap transition-colors ${
                                    topic === t
                                        ? 'bg-[#0A2E28] text-white'
                                        : 'surface text-[#0A2E28]/70 hover:text-[#0A2E28]'
                                }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured post */}
                {featured && (
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
                )}

                {/* Grid */}
                {grid.length > 0 && (
                    <div className={`${featured ? 'mt-4' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
                        {grid.map((post, i) => (
                            <PostCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>
                )}

                {filtered.length === 0 && (
                    <p className="py-16 text-center text-[17px] text-[#0A2E28]/60">
                        No articles found.{' '}
                        <button onClick={() => { setQuery(''); setTopic('All'); }} className="text-[#1a7a1a] hover:underline">
                            Show all articles
                        </button>
                    </p>
                )}

                {rest.length > shown && (
                    <div className="mt-10 text-center">
                        <button onClick={() => setShown((n) => n + PAGE_SIZE)} className="btn-pill surface text-[#0A2E28] hover:bg-[#ebebed]">
                            Load more articles
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
