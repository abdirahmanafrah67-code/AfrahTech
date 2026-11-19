// Service landing pages (one per target keyword). Shared by the React page,
// the SEO component and scripts/prerender.mjs, so keep it free of React imports.

export type ServiceExample = {
    title: string;
    category: string;
    image: string;
    text: string;
    href?: string; // internal case study or external site
};

export type ServicePage = {
    slug: string;
    keyword: string;
    eyebrow: string;
    title: string; // H1
    metaTitle: string;
    description: string;
    keywords: string[];
    intro: string[];
    image: string;
    imageAlt: string;
    offerTitle: string;
    offers: { title: string; text: string }[];
    benefitsTitle: string;
    benefits: { title: string; text: string }[];
    examples: ServiceExample[];
    process: { title: string; text: string }[];
    faq: { q: string; a: string }[];
    ctaTitle: string;
    ctaText: string;
    relatedPost?: string; // blog slug
};

// Real Afraino projects used as examples across pages
const EX = {
    kabba: {
        title: 'Kabba Real Estate',
        category: 'Website',
        image: '/portfolio/kabba.jpg',
        text: 'Bilingual real estate website with listings, free valuation requests and WhatsApp contact.',
        href: 'https://www.kabbarealestate.com',
    },
    bokhol: {
        title: 'Bokhol',
        category: 'Web platform',
        image: '/portfolio/bokhol.jpg',
        text: 'B2B seafood platform that connects suppliers with buyers across Europe, in four languages.',
        href: 'https://www.bokhol.nl',
    },
    teco: {
        title: 'TECO Construction',
        category: 'Website',
        image: '/portfolio/teco.jpg',
        text: 'Responsive company website for a Somali engineering and construction company.',
    },
    mehrad: {
        title: 'Mehrad',
        category: 'Mobile app + AI',
        image: '/portfolio/mehrad.jpg',
        text: 'Loan and debt tracking app with digital receipts and an AI assistant. Live on Google Play.',
        href: '/portfolio/mehrad',
    },
    iken: {
        title: 'IKEN',
        category: 'Mobile app',
        image: '/portfolio/iken.jpg',
        text: 'Food delivery app connecting customers with home chefs and restaurants. Live on Google Play.',
        href: 'https://play.google.com/store/apps/details?id=com.afraino.iken',
    },
    propmas: {
        title: 'PROPMAS',
        category: 'Mobile app',
        image: '/portfolio/propmas.jpg',
        text: 'Real estate marketplace app to search listings, save favourites and message agents.',
    },
    anfa: {
        title: 'ANFA COLLECTION',
        category: 'WhatsApp AI chatbot',
        image: '/portfolio/anfa.jpg',
        text: 'WhatsApp chatbot trained on the store’s own products that answers customers 24/7.',
        href: '/portfolio/anfa-collection',
    },
    luqma: {
        title: 'Luqma',
        category: 'Mobile app + AI',
        image: '/portfolio/luqma-journey.png',
        text: 'Nutrition app: take a photo of a meal and get calories and macros.',
    },
    nasasho: {
        title: 'Nasasho Booking',
        category: 'Web platform',
        image: '/nasasho.jpg',
        text: 'Hotel booking system designed for easy booking and property management.',
    },
} satisfies Record<string, ServiceExample>;

const PROCESS_DEFAULT = [
    { title: 'Free consultation', text: 'We listen to your idea, your customers and your goals, and agree on what to build first.' },
    { title: 'Design', text: 'We design the screens and flows so you can see and approve the product before coding starts.' },
    { title: 'Build & test', text: 'Our developers build it in small steps and share progress with you along the way.' },
    { title: 'Launch & support', text: 'We launch, monitor and improve it, and stay available when you need changes.' },
];

export const servicePages: ServicePage[] = [
    {
        slug: 'software-development-somalia',
        keyword: 'Software development company in Somalia',
        eyebrow: 'Software Development',
        title: 'Software Development Company in Somalia',
        metaTitle: 'Software Development Company in Somalia | Afraino',
        description:
            'Afraino is a software development company in Mogadishu, Somalia. We do custom software development, mobile apps, websites and practical AI automation for businesses in Somalia and abroad.',
        keywords: [
            'software development company in Somalia',
            'software company Somalia',
            'custom software development Somalia',
            'custom software Mogadishu',
            'software developers Somalia',
            'shirkad software Soomaaliya',
        ],
        intro: [
            'Afraino is a software development company based in Mogadishu. We turn business ideas into working digital products: mobile apps, websites, web platforms and AI tools.',
            'Many businesses in Somalia still run on paper, Excel sheets and WhatsApp messages. Custom software puts that work in one place, saves time and gives you clear information to make decisions.',
        ],
        image: '/blog/app-website-maintenance-support.jpg',
        imageAlt: 'Developer workspace with code on a monitor and laptop',
        offerTitle: 'What we build',
        offers: [
            { title: 'Custom software development', text: 'Systems for sales, stock, bookings, loans or customers, designed around how your team works.' },
            { title: 'Mobile apps', text: 'Android and iOS apps for your customers or your staff, published on Google Play and the App Store.' },
            { title: 'Websites & web platforms', text: 'Company websites, marketplaces, dashboards and booking systems that work on every device.' },
            { title: 'AI solutions', text: 'Chatbots and AI assistants that answer questions and automate routine work.' },
            { title: 'Integrations', text: 'Connect your software to WhatsApp, email, payments and other tools you already use.' },
            { title: 'Maintenance & support', text: 'Updates, fixes and improvements after launch so your product keeps working.' },
        ],
        benefitsTitle: 'Why work with a local software company',
        benefits: [
            { title: 'We know the market', text: 'We build for Somali customers: local languages, WhatsApp-first habits and mobile-first users.' },
            { title: 'One team, end to end', text: 'Design, development, AI and publishing under one roof, so nothing gets lost between agencies.' },
            { title: 'Easy to reach', text: 'Talk to us directly on WhatsApp, by phone or in person in Mogadishu.' },
            { title: 'Built to grow', text: 'We start with what matters most and add features as your business grows.' },
        ],
        examples: [EX.mehrad, EX.kabba, EX.bokhol, EX.anfa],
        process: PROCESS_DEFAULT,
        faq: [
            { q: 'What does a software development company do?', a: 'A software development company plans, designs, builds and maintains digital products such as mobile apps, websites, business systems and AI tools. Afraino does all of these for businesses in Somalia and abroad.' },
            { q: 'Where is Afraino located?', a: 'Our office is in Mogadishu, Somalia. We work with clients in Somalia and in other countries, including projects in Europe and the Dominican Republic.' },
            { q: 'How much does custom software cost in Somalia?', a: 'It depends on the features, the number of platforms and the integrations you need. After a free consultation we give you a clear quote for your project.' },
            { q: 'Can you work with my existing system?', a: 'Yes. We can improve, extend or connect an existing system, or move your data to a new one.' },
            { q: 'Do you support the software after launch?', a: 'Yes. We offer maintenance and support so your software stays updated, secure and working.' },
        ],
        ctaTitle: 'Have a software idea?',
        ctaText: 'Tell us what you want to build. The first consultation is free.',
        relatedPost: 'mobile-app-development-company-somalia',
    },
    {
        slug: 'mobile-app-development',
        keyword: 'Mobile app development Somalia',
        eyebrow: 'Mobile App Development',
        title: 'Mobile App Development in Somalia',
        metaTitle: 'Mobile App Development Somalia | Android & iOS Apps | Afraino',
        description:
            'Mobile app development in Somalia: Afraino designs and builds Android and iOS apps in Mogadishu and publishes them on Google Play and the App Store.',
        keywords: [
            'mobile app development Somalia',
            'app development company Somalia',
            'Android app developers Mogadishu',
            'iOS app development Somalia',
            'sameynta app Soomaaliya',
        ],
        intro: [
            'Most people in Somalia use the internet on their phone. A mobile app puts your business on the screen your customers check every day.',
            'Afraino designs, builds and publishes Android and iOS apps for startups and businesses, from the first idea to the live app on Google Play and the App Store.',
        ],
        image: '/blog/mobile-app-development-company-somalia.jpg',
        imageAlt: 'Two people working together in front of a computer monitor',
        offerTitle: 'Apps we build',
        offers: [
            { title: 'Android & iOS apps', text: 'One app that works on both Android and iPhone, so you reach every customer.' },
            { title: 'Delivery & booking apps', text: 'Order, book and track: apps like IKEN for food delivery.' },
            { title: 'Marketplace apps', text: 'Listings, search, favourites and chat between buyers and sellers.' },
            { title: 'Business & finance apps', text: 'Record sales, loans and payments, like the Mehrad app.' },
            { title: 'AI-powered apps', text: 'Add AI features such as chat assistants or photo recognition.' },
            { title: 'App store publishing', text: 'We prepare and publish your app on Google Play and the App Store.' },
        ],
        benefitsTitle: 'What a mobile app gives your business',
        benefits: [
            { title: 'Always in your customer’s pocket', text: 'Customers can order, book or contact you any time, without searching for you.' },
            { title: 'Faster service', text: 'Orders, bookings and payments are recorded automatically instead of by hand.' },
            { title: 'Better customer data', text: 'See what customers buy and when, so you can plan stock and marketing.' },
            { title: 'A modern brand', text: 'A good app shows customers that your business is professional and trustworthy.' },
        ],
        examples: [EX.mehrad, EX.iken, EX.propmas, EX.luqma],
        process: [
            { title: 'Free consultation', text: 'We discuss your idea, your users and the main features of the first version.' },
            { title: 'UI/UX design', text: 'We design every screen so you can test the app’s flow before development.' },
            { title: 'Development', text: 'We build the app and its backend, and share test versions with you.' },
            { title: 'Publish & support', text: 'We publish the app on Google Play and the App Store and keep it updated.' },
        ],
        faq: [
            { q: 'How long does it take to build a mobile app in Somalia?', a: 'It depends on the number of features. A simple first version is faster than a large platform. We agree on the scope and timeline during the free consultation.' },
            { q: 'Do you build apps for both Android and iPhone?', a: 'Yes. We build apps that run on both Android and iOS, so you can reach all your customers.' },
            { q: 'Can you publish my app on Google Play and the App Store?', a: 'Yes. We prepare the store listing and handle the publishing process. Our apps Mehrad and IKEN are live on Google Play.' },
            { q: 'How much does an app cost?', a: 'The price depends on features, design and integrations. We give a clear quote after understanding your project. Read our guide on app development cost in Somalia for more detail.' },
            { q: 'Can my app work in Somali?', a: 'Yes. We can build your app in Somali, English, Arabic or several languages.' },
        ],
        ctaTitle: 'Ready to build your app?',
        ctaText: 'Book a free consultation and get a plan for your first version.',
        relatedPost: 'mobile-app-cost-somalia',
    },
    {
        slug: 'web-development',
        keyword: 'Website development Somalia',
        eyebrow: 'Website Development',
        title: 'Website Development in Mogadishu, Somalia',
        metaTitle: 'Website Development Mogadishu, Somalia | Business Websites | Afraino',
        description:
            'Website development in Somalia: Afraino builds fast, mobile-friendly business websites and web platforms in Mogadishu that help customers find and contact you.',
        keywords: [
            'website development Mogadishu',
            'website development Somalia',
            'web design Mogadishu',
            'website company Somalia',
            'business website Somalia',
            'web developers Mogadishu',
        ],
        intro: [
            'When people hear about your business, they search for it on Google. A professional website is where they decide to trust you and contact you.',
            'Afraino builds fast, mobile-friendly websites and web platforms for companies in Somalia and abroad, with clear contact options such as WhatsApp, calls and forms.',
        ],
        image: '/blog/business-website-mogadishu.jpg',
        imageAlt: 'Young woman smiling while working on a laptop',
        offerTitle: 'Websites we build',
        offers: [
            { title: 'Company websites', text: 'Show your services, projects and contact details in a clean, professional way.' },
            { title: 'Real estate & listings', text: 'Property or product listings with search and enquiry forms.' },
            { title: 'Booking systems', text: 'Let customers book rooms, appointments or services online.' },
            { title: 'B2B platforms', text: 'Platforms that connect suppliers and buyers, like Bokhol.' },
            { title: 'Multilingual websites', text: 'Websites in Somali, English, Arabic and other languages.' },
            { title: 'SEO setup', text: 'Titles, descriptions, sitemap and speed set up so Google can find your pages.' },
        ],
        benefitsTitle: 'What a good website does for you',
        benefits: [
            { title: 'Found on Google', text: 'Customers who search for your service can find you instead of a competitor.' },
            { title: 'Works on every phone', text: 'Fast, responsive pages that look right on mobile, tablet and desktop.' },
            { title: 'More enquiries', text: 'WhatsApp buttons, call links and forms make it easy to contact you.' },
            { title: 'Easy to update', text: 'Add new projects, products or posts as your business grows.' },
        ],
        examples: [EX.kabba, EX.bokhol, EX.teco, EX.nasasho],
        process: PROCESS_DEFAULT,
        faq: [
            { q: 'How much does a website cost in Somalia?', a: 'It depends on the number of pages, languages and features such as bookings or listings. We give a clear quote after a free consultation.' },
            { q: 'Will my website work on mobile phones?', a: 'Yes. Every website we build is responsive and designed mobile-first.' },
            { q: 'Can you help my website appear on Google?', a: 'Yes. We set up the technical SEO basics: page titles, descriptions, a sitemap, fast loading and Google Search Console.' },
            { q: 'Can I add a WhatsApp button to my website?', a: 'Yes. We can add WhatsApp, call and email buttons so customers can contact you in one tap.' },
            { q: 'Do you build websites for clients outside Somalia?', a: 'Yes. For example, Kabba Real Estate (Dominican Republic) and Bokhol (Europe).' },
        ],
        ctaTitle: 'Need a new website?',
        ctaText: 'Tell us about your business and we will plan the right website for you.',
        relatedPost: 'business-website-mogadishu',
    },
    {
        slug: 'ai-solutions',
        keyword: 'AI development company Somalia',
        eyebrow: 'AI Solutions',
        title: 'AI Company in Somalia: AI Development & Automation',
        metaTitle: 'AI Company in Somalia | AI Automation for Businesses | Afraino',
        description:
            'Afraino is an AI company in Somalia. We build AI chatbots, AI agents and AI automation for businesses that answer customers and take repeated work off your team.',
        keywords: [
            'AI company in Somalia',
            'AI development company Somalia',
            'AI automation for businesses',
            'AI solutions Somalia',
            'AI agents Somalia',
            'artificial intelligence Mogadishu',
            'AI chatbot Somalia',
        ],
        intro: [
            'AI is no longer only for big tech companies. Businesses in Somalia can use AI today to answer customer questions, understand their data and save hours of manual work.',
            'Afraino builds practical AI solutions: chatbots trained on your business information, AI assistants inside apps, and tools that automate repeated tasks.',
        ],
        image: '/blog/ai-solutions-business-somalia.jpg',
        imageAlt: 'Abstract sphere of connected dots and lines',
        offerTitle: 'AI solutions we build',
        offers: [
            { title: 'AI chatbots', text: 'Chatbots on WhatsApp or your website that answer from your own business information.' },
            { title: 'AI agents', text: 'Assistants that can look up information and complete simple tasks for your team or customers.' },
            { title: 'AI inside your app', text: 'Add features like Mehrad.ai, which answers questions about a user’s records.' },
            { title: 'Image recognition', text: 'Recognise items in photos, like Luqma’s meal scanning.' },
            { title: 'Document & data tools', text: 'Summarise, search and organise documents and business data.' },
            { title: 'Custom AI models', text: 'Train or tune models on your own data when off-the-shelf tools are not enough.' },
        ],
        benefitsTitle: 'How AI helps your business',
        benefits: [
            { title: 'Answers 24/7', text: 'Customers get replies at night, on weekends and during busy hours.' },
            { title: 'Less repeated work', text: 'Your team stops typing the same answers and focuses on sales and service.' },
            { title: 'Uses your knowledge', text: 'The AI answers from your products, prices and policies, not from guesses.' },
            { title: 'Starts small', text: 'Begin with one use case, measure it, then expand.' },
        ],
        examples: [EX.anfa, EX.mehrad, EX.luqma],
        process: [
            { title: 'Find the use case', text: 'We look at where your team spends the most time and where AI can help first.' },
            { title: 'Prepare your data', text: 'We collect and organise the information the AI needs: products, FAQs, policies.' },
            { title: 'Build & test', text: 'We build the AI solution and test it with real questions before launch.' },
            { title: 'Launch & improve', text: 'We launch, review the conversations and keep improving the answers.' },
        ],
        faq: [
            { q: 'What does an AI development company do?', a: 'An AI development company builds software that uses artificial intelligence, such as chatbots, AI assistants, image recognition and data tools. Afraino builds these for businesses in Somalia.' },
            { q: 'Can AI understand Somali?', a: 'Modern AI models can read and write Somali. We test the answers in the languages your customers use before launch.' },
            { q: 'Will AI replace my staff?', a: 'No. AI handles repeated questions and simple tasks so your staff can focus on work that needs people.' },
            { q: 'Is my business data safe?', a: 'We only use the data needed for the solution, keep access limited and follow the security practices of the AI providers we use.' },
            { q: 'What is the easiest way to start with AI?', a: 'A WhatsApp or website chatbot trained on your products and FAQs is usually the fastest first step.' },
        ],
        ctaTitle: 'Want to use AI in your business?',
        ctaText: 'Book a free consultation and we will find the best first AI use case for you.',
        relatedPost: 'ai-solutions-business-somalia',
    },
    {
        slug: 'whatsapp-ai-chatbot',
        keyword: 'WhatsApp AI chatbot Somalia',
        eyebrow: 'WhatsApp AI Chatbot',
        title: 'WhatsApp AI Chatbot for Businesses in Somalia',
        metaTitle: 'WhatsApp Chatbot Somalia | AI Customer Replies 24/7 | Afraino',
        description:
            'Get a WhatsApp AI chatbot for your business in Somalia. Afraino builds chatbots trained on your products that answer customers 24/7 in Somali and English.',
        keywords: [
            'WhatsApp AI chatbot Somalia',
            'WhatsApp chatbot Somalia',
            'WhatsApp automation Somalia',
            'WhatsApp bot Mogadishu',
            'AI customer service Somalia',
            'chatbot WhatsApp Soomaali',
        ],
        intro: [
            'In Somalia, customers message businesses on WhatsApp. When many people ask the same questions about products, prices and delivery, replying by hand takes hours, and late replies lose sales.',
            'A WhatsApp AI chatbot from Afraino is trained on your own business information. It answers common questions instantly, any time of day, and passes complex conversations to your team.',
        ],
        image: '/blog/whatsapp-ai-chatbot-somalia.jpg',
        imageAlt: 'Woman laughing while reading a message on her smartphone',
        offerTitle: 'What your chatbot can do',
        offers: [
            { title: 'Answer product questions', text: 'Share product details, availability and prices from your own catalogue.' },
            { title: 'Reply in Somali & English', text: 'Customers can write in the language they are comfortable with.' },
            { title: 'Take orders & bookings', text: 'Collect order or booking details and send them to your team.' },
            { title: 'Share location & hours', text: 'Answer “where are you?” and “are you open?” instantly.' },
            { title: 'Hand over to a person', text: 'Pass the conversation to your staff when a human is needed.' },
            { title: 'Easy updates', text: 'Update the chatbot’s knowledge when products or prices change.' },
        ],
        benefitsTitle: 'Why businesses use WhatsApp chatbots',
        benefits: [
            { title: 'Instant replies', text: 'No customer waits for hours for a simple answer.' },
            { title: 'Open 24/7', text: 'The chatbot keeps answering at night and on holidays.' },
            { title: 'Consistent answers', text: 'Every customer gets the same correct information.' },
            { title: 'More time for sales', text: 'Your team handles the conversations that need a person.' },
        ],
        examples: [EX.anfa],
        process: [
            { title: 'Free consultation', text: 'We learn about your products, your customers and their most common questions.' },
            { title: 'Train on your data', text: 'We prepare your catalogue, prices and FAQs as the chatbot’s knowledge.' },
            { title: 'Connect WhatsApp', text: 'We connect the chatbot to your WhatsApp Business number and test it.' },
            { title: 'Launch & improve', text: 'We go live, review conversations and improve the answers over time.' },
        ],
        faq: [
            { q: 'What is a WhatsApp AI chatbot?', a: 'It is an automated assistant on your WhatsApp Business number that uses AI to understand customer messages and reply with answers from your business information.' },
            { q: 'Can the chatbot reply in Somali?', a: 'Yes. We set it up and test it to reply in Somali, English or both.' },
            { q: 'Do I need a WhatsApp Business account?', a: 'Yes. The chatbot runs on a WhatsApp Business number. We help you set it up.' },
            { q: 'What happens when the chatbot cannot answer?', a: 'It hands the conversation to your team, so the customer still gets help.' },
            { q: 'Have you built a WhatsApp chatbot before?', a: 'Yes. We built a WhatsApp AI chatbot for ANFA COLLECTION, a fashion store, trained on its own products and services.' },
        ],
        ctaTitle: 'Get your WhatsApp chatbot',
        ctaText: 'Tell us about your business and we will show you how a chatbot can answer your customers.',
        relatedPost: 'whatsapp-ai-chatbot-somalia',
    },
    {
        slug: 'ui-ux-design',
        keyword: 'UI UX design Somalia',
        eyebrow: 'UI/UX Design',
        title: 'UI/UX Design in Somalia',
        metaTitle: 'UI UX Design Somalia | App & Website Design | Afraino',
        description:
            'UI/UX design in Somalia: Afraino designs clear, modern app and website interfaces in Mogadishu, from user research and wireframes to clickable prototypes.',
        keywords: [
            'UI UX design Somalia',
            'UI design Mogadishu',
            'UX designer Somalia',
            'app design Somalia',
            'website design Somalia',
        ],
        intro: [
            'People judge an app or website in seconds. If it is confusing, they leave. Good UI/UX design makes your product easy to understand and pleasant to use.',
            'Afraino designs apps and websites for Somali and international users, from the first sketch to a clickable prototype that your developers can build.',
        ],
        image: '/blog/ui-ux-design-somalia.jpg',
        imageAlt: 'Paper sketches and a pen on a desk',
        offerTitle: 'What we design',
        offers: [
            { title: 'User research', text: 'Understand who your users are and what they need to do.' },
            { title: 'User flows & wireframes', text: 'Plan each screen and step before adding colours and details.' },
            { title: 'App UI design', text: 'Modern Android and iOS screens that follow platform guidelines.' },
            { title: 'Website UI design', text: 'Clean layouts that guide visitors to contact or buy.' },
            { title: 'Clickable prototypes', text: 'Test the experience on your phone before development starts.' },
            { title: 'Design systems', text: 'Reusable colours, fonts and components that keep your product consistent.' },
        ],
        benefitsTitle: 'Why design comes first',
        benefits: [
            { title: 'Fewer costly changes', text: 'Fixing a design is faster and cheaper than rewriting code.' },
            { title: 'Easier to use', text: 'Clear screens mean fewer support questions and more completed actions.' },
            { title: 'Built for local users', text: 'We design for Somali languages, right-to-left Arabic and mobile-first habits.' },
            { title: 'A trusted look', text: 'A polished interface makes your brand look professional.' },
        ],
        examples: [EX.iken, EX.propmas, EX.nasasho, EX.luqma],
        process: [
            { title: 'Discover', text: 'We learn about your users, your goals and similar products.' },
            { title: 'Wireframe', text: 'We plan the structure of every screen and the steps between them.' },
            { title: 'Visual design', text: 'We apply your brand colours, fonts and imagery to the screens.' },
            { title: 'Prototype & hand-off', text: 'We test a clickable prototype and prepare the design for development.' },
        ],
        faq: [
            { q: 'What is the difference between UI and UX?', a: 'UX (user experience) is how a product works and how easy it is to use. UI (user interface) is how it looks: colours, fonts, buttons and layout. Good products need both.' },
            { q: 'Can you design an app that someone else will build?', a: 'Yes. We can deliver the design and prototype for your own developers, or design and build it ourselves.' },
            { q: 'Which tools do you use?', a: 'We design in modern tools such as Figma and share links so you can comment and test prototypes on your phone.' },
            { q: 'Can you redesign my existing app or website?', a: 'Yes. We review what is not working, then redesign the screens to make them clearer and more modern.' },
            { q: 'Do you design in Somali and Arabic?', a: 'Yes. We design for Somali, English and right-to-left Arabic layouts.' },
        ],
        ctaTitle: 'Make your product easy to use',
        ctaText: 'Share your app or website idea and we will plan the design with you.',
        relatedPost: 'ui-ux-design-somalia',
    },
];

export const getServicePage = (slug: string) => servicePages.find((p) => p.slug === slug);

const escHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Static HTML for prerendering (crawlable without JavaScript)
export const servicePageHtml = (p: ServicePage) =>
    `<article><p>${escHtml(p.eyebrow)}</p><h1>${escHtml(p.title)}</h1>` +
    p.intro.map((t) => `<p>${escHtml(t)}</p>`).join('') +
    `<p><a href="/book">Book a free consultation</a> · <a href="https://wa.me/252619849199">Chat on WhatsApp</a></p>` +
    `<img src="${p.image}" alt="${escHtml(p.imageAlt)}" />` +
    `<h2>${escHtml(p.offerTitle)}</h2><ul>` +
    p.offers.map((o) => `<li><strong>${escHtml(o.title)}</strong>: ${escHtml(o.text)}</li>`).join('') +
    `</ul><h2>${escHtml(p.benefitsTitle)}</h2><ul>` +
    p.benefits.map((o) => `<li><strong>${escHtml(o.title)}</strong>: ${escHtml(o.text)}</li>`).join('') +
    `</ul><h2>Examples of our work</h2><ul>` +
    p.examples.map((e) => `<li>${e.href ? `<a href="${e.href}">${escHtml(e.title)}</a>` : escHtml(e.title)}: ${escHtml(e.text)}</li>`).join('') +
    `</ul><h2>How we work</h2><ol>` +
    p.process.map((s) => `<li><strong>${escHtml(s.title)}</strong>: ${escHtml(s.text)}</li>`).join('') +
    `</ol><h2>Frequently asked questions</h2>` +
    p.faq.map((f) => `<h3>${escHtml(f.q)}</h3><p>${escHtml(f.a)}</p>`).join('') +
    `<h2>${escHtml(p.ctaTitle)}</h2><p>${escHtml(p.ctaText)}</p><p><a href="/book">Book a free consultation</a></p></article>`;
