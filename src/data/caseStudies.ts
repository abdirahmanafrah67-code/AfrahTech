// Portfolio case studies. Shared by the React page, SEO and prerender.
// Only state facts confirmed by the client. Leave `results` empty until real
// numbers are available; the page hides that section when it is empty.

export type CaseSection = {
    title: string;
    paragraphs?: string[];
    list?: string[];
    steps?: { title: string; text: string }[];
};

export type CaseStudy = {
    slug: string;
    client: string;
    category: string;
    title: string; // H1
    metaTitle: string;
    description: string;
    keywords: string[];
    summary: string;
    image: string;
    imageAlt: string;
    facts: { label: string; value: string }[];
    sections: CaseSection[];
    results?: { value: string; label: string }[];
    testimonial: { quote: string; person?: string; role: string; video: string; poster: string };
    service: { slug: string; label: string }; // related service page
    link?: { href: string; label: string };
};

export const caseStudies: CaseStudy[] = [
    {
        slug: 'anfa-collection',
        client: 'ANFA COLLECTION',
        category: 'WhatsApp AI chatbot',
        title: 'ANFA COLLECTION: a WhatsApp AI chatbot that knows the store',
        metaTitle: 'Case Study: WhatsApp AI Chatbot for ANFA COLLECTION | Afraino',
        description:
            'How Afraino built a WhatsApp AI chatbot for ANFA COLLECTION, a fashion store in Somalia, trained on its own products to answer customers 24/7.',
        keywords: ['WhatsApp chatbot case study', 'WhatsApp AI chatbot Somalia', 'AI automation retail Somalia', 'ANFA COLLECTION'],
        summary:
            'ANFA COLLECTION is a fashion store that sells to customers through WhatsApp. Afraino built an AI chatbot, trained on the store’s own products and services, that answers customer questions any time of day.',
        image: '/portfolio/anfa.jpg',
        imageAlt: 'ANFA COLLECTION WhatsApp chatbot conversation on a phone',
        facts: [
            { label: 'Client', value: 'ANFA COLLECTION' },
            { label: 'Industry', value: 'Fashion retail' },
            { label: 'Service', value: 'WhatsApp AI chatbot' },
            { label: 'Channel', value: 'WhatsApp Business' },
        ],
        sections: [
            {
                title: 'The business problem',
                paragraphs: [
                    'Customers contact ANFA COLLECTION on WhatsApp to ask about products: what is available, prices, sizes and how to order. Many of these questions are the same every day.',
                    'Answering every message by hand takes the team’s time, and customers who write late at night or during busy hours have to wait for a reply.',
                ],
            },
            {
                title: 'Why the business needed automation',
                list: [
                    'Fast replies: a customer who waits too long may buy somewhere else.',
                    'Always available: questions arrive outside working hours too.',
                    'Correct, consistent answers: every customer should get the same accurate product information.',
                    'More time for the team: staff can focus on orders and customers who need a person.',
                ],
            },
            {
                title: 'How Afraino implemented the chatbot',
                steps: [
                    { title: 'Learned the business', text: 'We started with the store’s products, services and the questions customers ask most often.' },
                    { title: 'Trained it on the store’s own data', text: 'The chatbot’s knowledge comes from ANFA COLLECTION’s own information, so it answers about their products, not generic text.' },
                    { title: 'Connected it to WhatsApp', text: 'The chatbot works inside WhatsApp, the app ANFA’s customers already use.' },
                    { title: 'Tested and launched', text: 'We tested the replies with real customer questions before going live.' },
                ],
            },
            {
                title: 'How the chatbot handles customer questions',
                steps: [
                    { title: 'A customer sends a message', text: 'For example, asking whether a product is available or how to order.' },
                    { title: 'The AI understands the question', text: 'It reads the message in the customer’s own words, in Somali or English.' },
                    { title: 'It answers from the store’s information', text: 'The reply is based on ANFA COLLECTION’s products and services.' },
                    { title: 'Day and night', text: 'The chatbot replies 24/7, so customers do not wait for the store to open.' },
                ],
            },
        ],
        // Add measurable results here when the client shares them,
        // e.g. { value: '…%', label: 'of questions answered automatically' }
        results: [],
        testimonial: {
            quote: 'Afraino built us a WhatsApp chatbot that knows our products and gives our customers the right answers.',
            role: 'Founder, ANFA COLLECTION',
            video: '/testimonials/anfa.mp4',
            poster: '/testimonials/anfa-poster.jpg',
        },
        service: { slug: 'whatsapp-ai-chatbot', label: 'WhatsApp AI chatbots' },
    },
    {
        slug: 'mehrad',
        client: 'Mehrad',
        category: 'Mobile app + AI',
        title: 'Mehrad: from a simple idea to a live loan-tracking app',
        metaTitle: 'Case Study: Mehrad Loan & Debt Tracking App with AI | Afraino',
        description:
            'How Afraino turned the Mehrad idea into a mobile app for small businesses to record loans, track payments and issue digital receipts, with an AI assistant. Live on Google Play.',
        keywords: ['mobile app case study Somalia', 'loan tracking app Somalia', 'Mehrad app', 'mobile app development Somalia'],
        summary:
            'Mehrad helps small businesses record customer loans, track payments and issue digital receipts. Afraino designed and built the app, including Mehrad.ai, an AI assistant that answers questions about your records. It is live on Google Play.',
        image: '/portfolio/mehrad.jpg',
        imageAlt: 'Mehrad loan and debt tracking app screens',
        facts: [
            { label: 'Client', value: 'Mehrad' },
            { label: 'Industry', value: 'Small business finance' },
            { label: 'Service', value: 'Mobile app + AI' },
            { label: 'Platform', value: 'Android (Google Play)' },
        ],
        sections: [
            {
                title: 'The business problem',
                paragraphs: [
                    'Many small shops sell on credit: customers take goods now and pay later. Keeping track of who owes what, and how much has been paid, is often done in notebooks or from memory.',
                    'Mehrad’s founder had a simple idea: put this record-keeping on the phone, so shop owners always know their numbers.',
                ],
            },
            {
                title: 'What Afraino built',
                list: [
                    'Record customer loans in a few taps.',
                    'Track payments and see the remaining balance per customer.',
                    'Issue digital receipts instead of paper.',
                    'Mehrad.ai: an AI chatbot that answers questions about your own records.',
                ],
            },
            {
                title: 'How we delivered it',
                steps: [
                    { title: 'Shaped the idea', text: 'We turned the founder’s idea into a clear first version with the most important features.' },
                    { title: 'Designed the app', text: 'Simple screens so shop owners can record a loan or payment quickly.' },
                    { title: 'Built the app and AI', text: 'We developed the mobile app and added Mehrad.ai for questions about the records.' },
                    { title: 'Published on Google Play', text: 'We prepared the store listing and launched the app on Google Play.' },
                ],
            },
        ],
        results: [],
        testimonial: {
            quote: 'Afraino turned a simple idea into a modern digital system that really works.',
            person: 'Abdullahi Axmed Maxamed',
            role: 'Founder, Mehrad',
            video: '/testimonials/mehrad.mp4',
            poster: '/testimonials/mehrad-poster.jpg',
        },
        service: { slug: 'mobile-app-development', label: 'mobile app development' },
        link: { href: 'https://play.google.com/store/apps/details?id=com.meherbook.app', label: 'View on Google Play' },
    },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

const escHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const caseStudyHtml = (c: CaseStudy) =>
    `<article><p><a href="/portfolio">Portfolio</a> · ${escHtml(c.category)}</p><h1>${escHtml(c.title)}</h1><p>${escHtml(c.summary)}</p>` +
    `<img src="${c.image}" alt="${escHtml(c.imageAlt)}" /><ul>` +
    c.facts.map((f) => `<li>${escHtml(f.label)}: ${escHtml(f.value)}</li>`).join('') + `</ul>` +
    c.sections.map((s) =>
        `<h2>${escHtml(s.title)}</h2>` +
        (s.paragraphs ?? []).map((p) => `<p>${escHtml(p)}</p>`).join('') +
        (s.list ? `<ul>${s.list.map((l) => `<li>${escHtml(l)}</li>`).join('')}</ul>` : '') +
        (s.steps ? `<ol>${s.steps.map((st) => `<li><strong>${escHtml(st.title)}</strong>: ${escHtml(st.text)}</li>`).join('')}</ol>` : ''),
    ).join('') +
    (c.results?.length ? `<h2>Results</h2><ul>${c.results.map((r) => `<li>${escHtml(r.value)} ${escHtml(r.label)}</li>`).join('')}</ul>` : '') +
    `<h2>What the client says</h2><blockquote>“${escHtml(c.testimonial.quote)}”<cite>${escHtml([c.testimonial.person, c.testimonial.role].filter(Boolean).join(', '))}</cite></blockquote>` +
    `<p><a href="/${c.service.slug}">Learn about our ${escHtml(c.service.label)}</a> · <a href="/book">Book a free consultation</a></p></article>`;
