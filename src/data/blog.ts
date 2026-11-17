// Blog posts. Used by the React pages AND by scripts/prerender.mjs, which
// writes a static HTML file per post so Google sees the full text without JS.
// Keep this file free of React/browser imports.
//
// Inline formatting inside `text`: **bold** and [link text](/path or https://...)

export type Block =
    | { type: 'p'; text: string }
    | { type: 'h2'; text: string }
    | { type: 'h3'; text: string }
    | { type: 'ul'; items: string[] }
    | { type: 'ol'; items: string[] }
    | { type: 'quote'; text: string; cite?: string };

export type Post = {
    slug: string;
    lang: 'en' | 'so';
    title: string;
    // <title> tag, ~60 chars, main keyword first
    metaTitle: string;
    // meta description, ~150 chars
    description: string;
    keywords: string[];
    category: string;
    date: string; // ISO yyyy-mm-dd
    updated?: string;
    author: string;
    cover: string;
    coverAlt: string;
    body: Block[];
    faq: { q: string; a: string }[];
};

const AUTHOR = 'Afraino Team';

export const posts: Post[] = [
    {
        slug: 'mobile-app-development-company-somalia',
        lang: 'en',
        title: 'Mobile App Development Company in Somalia: How to Choose the Right One',
        metaTitle: 'Mobile App Development Company in Somalia | How to Choose',
        description:
            'Looking for a mobile app development company in Somalia? A practical checklist to compare app developers in Mogadishu: portfolio, process, payments, publishing and support.',
        keywords: [
            'mobile app development company Somalia',
            'app developers Mogadishu',
            'software company Somalia',
            'Android app development Somalia',
            'iOS app development Somalia',
        ],
        category: 'Mobile Apps',
        date: '2026-11-17',
        author: AUTHOR,
        cover: '/blog/mobile-app-development-company-somalia.jpg',
        coverAlt: 'Team of young African professionals working together on laptops',
        body: [
            { type: 'p', text: 'Searching for the best **mobile app development company in Somalia**? More Somali businesses than ever want their own mobile app: to take orders, track customers, accept mobile money or simply look professional. But choosing the wrong developer is expensive. This guide gives you a simple checklist to compare **mobile app development companies in Somalia** before you sign anything.' },
            { type: 'h2', text: '1. Look at apps they have actually launched' },
            { type: 'p', text: 'A real company can show you live apps, not just designs. Ask for links to Google Play or the App Store and install them yourself. Check if the app is fast, if it looks good on a cheap Android phone, and if it was updated recently.' },
            { type: 'p', text: 'For example, our [portfolio](/portfolio) links straight to live apps such as Mehrad (loan and debt tracking for small businesses) and IKEN (food delivery) on Google Play.' },
            { type: 'h2', text: '2. Ask them to explain their process' },
            { type: 'p', text: 'A good app company works in clear steps. You should hear something like this:' },
            {
                type: 'ol',
                items: [
                    '**Discovery**: understand your business, users and goals.',
                    '**Design**: screens you can click through before any code is written.',
                    '**Development**: building the app in short cycles, with regular demos.',
                    '**Testing**: on real phones, including low-cost Android devices.',
                    '**Launch**: publishing to Google Play and the App Store.',
                    '**Support**: fixing bugs and adding features after launch.',
                ],
            },
            { type: 'p', text: 'If a company cannot explain this clearly, they will not manage your project clearly either.' },
            { type: 'h2', text: '3. Make sure they understand the Somali market' },
            { type: 'p', text: 'An app built for Somalia has different needs than one built for Europe. Ask if they can:' },
            {
                type: 'ul',
                items: [
                    'Accept local mobile money such as **EVC Plus, Zaad, Sahal and eDahab**.',
                    'Support the **Somali language**, and English or Arabic if you need them.',
                    'Keep the app light so it works on slow or expensive internet.',
                    'Use WhatsApp, which most Somali customers already use every day.',
                ],
            },
            { type: 'h2', text: '4. Ask who owns the code' },
            { type: 'p', text: 'You are paying for the app, so you should own it. Your contract should say that the source code, design files and store accounts belong to your business. Ask for the app to be published under **your own** Google Play and Apple developer accounts.' },
            { type: 'h2', text: '5. Compare quotes the right way' },
            { type: 'p', text: 'The cheapest quote is often the most expensive in the end. Compare what is included: design, both Android and iOS, an admin panel, hosting, publishing and support. Read more in [how much it costs to build an app in Somalia](/blog/mobile-app-cost-somalia).' },
            { type: 'h2', text: '6. Check support after launch' },
            { type: 'p', text: 'Phones and app stores change every year. Ask what happens when Android or iOS updates, who fixes bugs, and how fast they reply. A local team you can reach on WhatsApp is a big advantage.' },
            { type: 'h2', text: 'Quick checklist' },
            {
                type: 'ul',
                items: [
                    'Live apps you can install and test',
                    'A clear step-by-step process',
                    'Local payments and Somali language',
                    'You own the code and store accounts',
                    'A detailed quote, not just one number',
                    'Support plan after launch',
                ],
            },
            { type: 'p', text: 'Afraino is a software and mobile app development company in Mogadishu. If you have an app idea, [book a free consultation](/book) and we will help you plan it.' },
        ],
        faq: [
            { q: 'How long does it take to build a mobile app in Somalia?', a: 'It depends on the features. A simple app can take a few weeks, while an app with payments, user accounts and an admin panel usually takes a few months. A good company gives you a timeline after the discovery step.' },
            { q: 'Should I build for Android or iPhone first?', a: 'Many Somali businesses start with Android because most of their customers use Android phones. With modern tools, one codebase can often serve both Android and iOS.' },
            { q: 'Can a Somali app accept EVC Plus or Zaad?', a: 'Yes. Apps can accept local mobile money through a payment gateway that supports these services. Your developer should handle the setup and testing.' },
        ],
    },
    {
        slug: 'mobile-app-cost-somalia',
        lang: 'en',
        title: 'App Development Cost in Somalia: What Changes the Price of an App',
        metaTitle: 'App Development Cost in Somalia (2026 Guide)',
        description:
            'What does it cost to build a mobile app in Somalia? Learn the 8 things that change the price of app development in Mogadishu and how to get an accurate quote.',
        keywords: [
            'app development cost Somalia',
            'how much does an app cost Somalia',
            'mobile app price Mogadishu',
            'build an app Somalia',
        ],
        category: 'Mobile Apps',
        date: '2026-11-15',
        author: AUTHOR,
        cover: '/blog/mobile-app-cost-somalia.jpg',
        coverAlt: 'Business owner planning an app budget at a laptop with a calculator',
        body: [
            { type: 'p', text: 'What is the real **app development cost in Somalia**? "How much does an app cost?" is the first question almost every client asks us. The honest answer is: it depends on what the app needs to do. Two apps that look similar can have very different prices. Here are the things that really change the cost of **app development in Somalia**, so you can plan your budget and compare quotes fairly.' },
            { type: 'h2', text: '1. Number of features' },
            { type: 'p', text: 'Every feature is work: login, user profiles, search, chat, notifications, maps, bookings. Start with the few features your business really needs (an MVP) and add more later.' },
            { type: 'h2', text: '2. Android, iOS or both' },
            { type: 'p', text: 'Building for one platform costs less than two. Cross-platform tools let one codebase run on both, which usually saves time and money compared with two separate apps.' },
            { type: 'h2', text: '3. Design quality' },
            { type: 'p', text: 'A simple template is cheaper than a custom design with your brand, animations and illustrations. Good design pays back because customers trust and use a beautiful app more.' },
            { type: 'h2', text: '4. Payments' },
            { type: 'p', text: 'Accepting **EVC Plus, Zaad, Sahal** or cards needs a payment gateway, testing and security work.' },
            { type: 'h2', text: '5. Admin panel and backend' },
            { type: 'p', text: 'Most business apps need a web dashboard where your team manages orders, users and content. This is a separate part of the project and should be in the quote.' },
            { type: 'h2', text: '6. AI features' },
            { type: 'p', text: 'Chatbots, smart search or photo recognition add value but also add work. For example, the Mehrad app includes Mehrad.ai, an AI chatbot that answers questions about your own records.' },
            { type: 'h2', text: '7. Languages' },
            { type: 'p', text: 'Supporting Somali, English and Arabic means translating every screen, and Arabic needs a right-to-left layout.' },
            { type: 'h2', text: '8. Hosting, publishing and support' },
            { type: 'p', text: 'Remember the running costs: servers, the Google Play and Apple developer accounts, and maintenance after launch. Read our [guide to publishing your app](/blog/publish-app-google-play-app-store-somalia).' },
            { type: 'h2', text: 'How to get an accurate quote' },
            {
                type: 'ol',
                items: [
                    'Write down who will use the app and what they need to do.',
                    'List your must-have features and your nice-to-have features.',
                    'Share apps you like, so the team understands your taste.',
                    'Ask for a quote broken into parts: design, app, admin panel, publishing, support.',
                ],
            },
            { type: 'p', text: 'Want a clear price for your idea? [Book a free consultation](/book) with Afraino and we will give you a detailed quote.' },
        ],
        faq: [
            { q: 'Is it cheaper to build only for Android?', a: 'Building for one platform is usually cheaper, but cross-platform development lets you reach both Android and iPhone users with one codebase, often for much less than two separate apps.' },
            { q: 'Are there yearly costs after the app is built?', a: 'Yes. Plan for hosting, the Apple Developer Program fee, and maintenance to keep the app working with new phone and store updates.' },
            { q: 'Can I start small and add features later?', a: 'Yes, and we recommend it. Launch a simple first version (MVP), learn from real users, then invest in the features they actually use.' },
        ],
    },
    {
        slug: 'whatsapp-ai-chatbot-somalia',
        lang: 'en',
        title: 'WhatsApp AI Chatbot for Business in Somalia: Answer Customers 24/7',
        metaTitle: 'WhatsApp AI Chatbot for Business in Somalia',
        description:
            'How a WhatsApp AI chatbot trained on your business data can answer customers 24/7. Real example: the chatbot Afraino built for ANFA COLLECTION.',
        keywords: [
            'WhatsApp chatbot Somalia',
            'AI chatbot Somalia',
            'WhatsApp business automation',
            'AI for business Mogadishu',
        ],
        category: 'AI Solutions',
        date: '2026-11-10',
        author: AUTHOR,
        cover: '/blog/whatsapp-ai-chatbot-somalia.jpg',
        coverAlt: 'Woman smiling while chatting with a business on her smartphone',
        body: [
            { type: 'p', text: 'This guide explains how a **WhatsApp AI chatbot for business in Somalia** works, with a real example. Your customers are already on WhatsApp. They message you at night, on weekends and during busy hours, asking the same questions: Is this in stock? What is the price? Where are you? A **WhatsApp AI chatbot** can answer these instantly, any time, so you never lose a customer because nobody replied.' },
            { type: 'h2', text: 'What is a WhatsApp AI chatbot?' },
            { type: 'p', text: 'It is an assistant connected to your business WhatsApp number. Unlike old bots with fixed menus, an AI chatbot understands normal messages and replies in natural language. The key is that it is **trained on your own business data**: your products, services, prices and policies. So it gives your answers, not generic ones.' },
            { type: 'h2', text: 'Real example: ANFA COLLECTION' },
            { type: 'p', text: 'We built a WhatsApp AI chatbot for **ANFA COLLECTION**, a fashion store. It was trained on the shop\'s data, so it understands customer needs and gives correct answers about products, services and common questions, at any time of day.' },
            { type: 'quote', text: 'Afraino built us a WhatsApp chatbot that knows our products and gives our customers the right answers.', cite: 'Founder, ANFA COLLECTION' },
            { type: 'p', text: 'You can watch the founder talk about it on our [home page](/#testimonials).' },
            { type: 'h2', text: 'What a chatbot can do for your business' },
            {
                type: 'ul',
                items: [
                    'Answer common questions instantly, 24/7.',
                    'Share product details and photos.',
                    'Collect orders or booking requests.',
                    'Pass difficult conversations to a human on your team.',
                    'Free your staff to focus on sales and service.',
                ],
            },
            { type: 'h2', text: 'Which businesses benefit most?' },
            { type: 'p', text: 'Shops, restaurants, clinics, real estate agencies, schools, travel agencies: any business that gets many similar questions on WhatsApp.' },
            { type: 'h2', text: 'How we build it' },
            {
                type: 'ol',
                items: [
                    'We collect your information: products, prices, FAQs, opening hours.',
                    'We train the AI on that data and set the tone of voice.',
                    'We connect it to your WhatsApp Business number.',
                    'We test real conversations with you before going live.',
                    'We keep improving it as your business changes.',
                ],
            },
            { type: 'p', text: 'Want a chatbot like this? Learn about our [AI solutions](/services) or [book a free consultation](/book).' },
        ],
        faq: [
            { q: 'Can the chatbot reply in Somali?', a: 'Modern AI models can understand and write Somali. We test the quality with you before launch and tune it for your customers.' },
            { q: 'Will the chatbot replace my staff?', a: 'No. It handles repeated questions so your team can focus on sales and difficult cases. It can hand a conversation to a person when needed.' },
            { q: 'Do I need a WhatsApp Business account?', a: 'Yes. The chatbot connects to a WhatsApp Business number. We help you set it up.' },
        ],
    },
    {
        slug: 'publish-app-google-play-app-store-somalia',
        lang: 'en',
        title: 'How to Publish an App on Google Play and the App Store from Somalia',
        metaTitle: 'Publish an App on Google Play from Somalia | Step by Step',
        description:
            'Step-by-step guide to publishing your mobile app on Google Play and the Apple App Store from Somalia: accounts, fees, testing rules and common reasons apps get rejected.',
        keywords: [
            'publish app Google Play Somalia',
            'App Store publishing Somalia',
            'Google Play developer account Somalia',
            'app publishing service',
        ],
        category: 'Mobile Apps',
        date: '2026-11-08',
        author: AUTHOR,
        cover: '/blog/publish-app-google-play-app-store-somalia.jpg',
        coverAlt: 'Smartphone home screen full of published apps',
        body: [
            { type: 'p', text: 'Want to **publish an app on Google Play** or the App Store from Somalia? Building the app is only half the job. To reach customers, it must be published on **Google Play** (Android) and the **Apple App Store** (iPhone). Many Somali businesses get stuck at this step. Here is what you need to know.' },
            { type: 'h2', text: 'Step 1: Create developer accounts in your business name' },
            {
                type: 'ul',
                items: [
                    '**Google Play Console**: a one-time registration fee (US$25 at the time of writing).',
                    '**Apple Developer Program**: a yearly membership (US$99 per year at the time of writing).',
                ],
            },
            { type: 'p', text: 'Fees and rules can change, so always check the official Google and Apple sites. Open the accounts in your company\'s name, so you, not your developer, own the app listing.' },
            { type: 'h2', text: 'Step 2: Verify your identity' },
            { type: 'p', text: 'Both stores verify developers. Prepare a valid ID and, for an organisation account, your business documents. Apple organisation accounts also need a D-U-N-S number. Verification can take days, so start early.' },
            { type: 'h2', text: 'Step 3: Test before launch' },
            { type: 'p', text: 'Google Play requires new personal developer accounts to run a closed test with a group of testers for a set period before the app can go to production. At the time of writing this is 12 testers for 14 days. Check the current rule in Play Console when you start.' },
            { type: 'h2', text: 'Step 4: Prepare the store listing' },
            {
                type: 'ul',
                items: [
                    'App name, short and full description, with keywords your customers search for.',
                    'Screenshots and an app icon that look professional.',
                    'A privacy policy hosted on a website.',
                    'Content rating and data safety forms.',
                ],
            },
            { type: 'h2', text: 'Common reasons apps get rejected' },
            {
                type: 'ul',
                items: [
                    'Missing or weak privacy policy.',
                    'The app crashes or has broken features during review.',
                    'Asking for permissions the app does not need.',
                    'Login required, but no test account given to the reviewer.',
                ],
            },
            { type: 'h2', text: 'Let us publish it for you' },
            { type: 'p', text: 'App publishing is one of our [services](/services). We prepare the listing, handle reviews and fix rejections, and the app stays in your own account. Our apps such as [Mehrad and IKEN](/portfolio) are live on Google Play. [Book a free consultation](/book).' },
        ],
        faq: [
            { q: 'Can I publish an app from Somalia?', a: 'Yes. You can register developer accounts and publish apps from Somalia, as long as you can complete identity verification and pay the store fees.' },
            { q: 'How long does app review take?', a: 'It varies. Reviews often take from a few hours to several days. New accounts and apps with sensitive features can take longer.' },
            { q: 'Who should own the developer account?', a: 'Your business. Ask your developer to publish under your own account, so you keep control of the app.' },
        ],
    },
    {
        slug: 'business-website-mogadishu',
        lang: 'en',
        title: 'Website Design in Mogadishu: Why Every Business Needs a Professional Website',
        metaTitle: 'Website Design in Mogadishu | Web Development Somalia',
        description:
            'Facebook and WhatsApp are not enough. Why businesses in Mogadishu and across Somalia need a professional website, and what a good business website must include.',
        keywords: [
            'website development Mogadishu',
            'web design Somalia',
            'business website Somalia',
            'web development company Somalia',
        ],
        category: 'Web Development',
        date: '2026-11-05',
        author: AUTHOR,
        cover: '/blog/business-website-mogadishu.jpg',
        coverAlt: 'Young African businesswoman smiling while working on her website',
        body: [
            { type: 'p', text: 'Professional **website design in Mogadishu** is one of the best investments a Somali business can make. Many Somali businesses run only on Facebook and WhatsApp. These are great for talking to customers, but they are not enough. When someone searches Google for your service, they find websites, not Facebook posts. A professional website is the place you fully own and control.' },
            { type: 'h2', text: '1. Customers search on Google first' },
            { type: 'p', text: 'Before people call, they search: "hotel in Mogadishu", "construction company Somalia", "app developer Somalia". If you have no website, your competitors get those customers.' },
            { type: 'h2', text: '2. Trust and professionalism' },
            { type: 'p', text: 'A clean website with your own domain and email shows you are a serious business, especially to international partners, NGOs and investors.' },
            { type: 'h2', text: '3. It works for you 24/7' },
            { type: 'p', text: 'Your website shows your services, prices, projects and contact details at any time. Add a [WhatsApp AI chatbot](/blog/whatsapp-ai-chatbot-somalia) and it can even answer questions at night.' },
            { type: 'h2', text: 'What a good business website must have' },
            {
                type: 'ul',
                items: [
                    '**Fast loading**, even on mobile data.',
                    '**Mobile-friendly** design, because most visitors use phones.',
                    'Clear services, prices or a quote form.',
                    'A WhatsApp button and phone number.',
                    'Your location on Google Maps.',
                    'Basic **SEO**, so Google understands each page.',
                    'Somali and English if your customers use both.',
                ],
            },
            { type: 'h2', text: 'Examples' },
            { type: 'p', text: 'We built the [Kabba Real Estate](/portfolio) website (listings, valuations and WhatsApp contact, in English and Spanish) and the [Bokhol](/portfolio) B2B seafood platform in four languages.' },
            { type: 'p', text: 'Ready for a website that brings you customers? [Book a free consultation](/book).' },
        ],
        faq: [
            { q: 'Is Facebook enough for my business?', a: 'Facebook is useful, but you do not own it and it does not rank well on Google for service searches. A website gives you a permanent home that customers can find.' },
            { q: 'How long does it take to build a business website?', a: 'A simple business website can be ready in a few weeks. Larger platforms with bookings, payments or many languages take longer.' },
            { q: 'Will my website show on Google?', a: 'A well-built website with good SEO can appear on Google. Ranking takes time and depends on content, competition and links from other sites.' },
        ],
    },
    {
        slug: 'ai-solutions-business-somalia',
        lang: 'en',
        title: 'AI Solutions in Somalia: 6 Practical Ways Businesses Use AI Models and Agents',
        metaTitle: 'AI Solutions in Somalia: AI Models & Agents for Business',
        description:
            'How Somali businesses can use AI today: smart assistants, AI agents that automate work, document processing, forecasting and AI inside your own app.',
        keywords: [
            'AI solutions Somalia',
            'AI company Somalia',
            'AI agents for business',
            'machine learning Somalia',
            'AI development Mogadishu',
        ],
        category: 'AI Solutions',
        date: '2026-11-16',
        author: AUTHOR,
        cover: '/blog/ai-solutions-business-somalia.jpg',
        coverAlt: 'Abstract visual of an artificial intelligence network',
        body: [
            { type: 'p', text: '**AI solutions in Somalia** are now practical for small and medium businesses. AI is no longer only for big tech companies. Today a shop, school, clinic or finance business in Somalia can use **AI models and AI agents** to save time, serve customers faster and make better decisions. Here are six practical ways to start.' },
            { type: 'h2', text: '1. AI assistants inside your own app' },
            { type: 'p', text: 'An assistant that knows your data can answer questions in plain language. For example, the [Mehrad app](/portfolio) includes **Mehrad.ai**, an AI chatbot that answers questions about the user\'s own loan and payment records.' },
            { type: 'h2', text: '2. AI agents that do the work, not just talk' },
            { type: 'p', text: 'An **AI agent** can take actions: create an order, update a record, send a reminder or prepare a report. It follows the rules you set and asks a person when something is unclear.' },
            { type: 'h2', text: '3. Customer service on WhatsApp and the web' },
            { type: 'p', text: 'Answer common questions 24/7 on WhatsApp or your website. Read the real example in our [WhatsApp AI chatbot guide](/blog/whatsapp-ai-chatbot-somalia).' },
            { type: 'h2', text: '4. Reading documents automatically' },
            { type: 'p', text: 'AI can pull information out of receipts, invoices, forms and ID documents, so your team stops typing the same data by hand.' },
            { type: 'h2', text: '5. Forecasting and smart reports' },
            { type: 'p', text: 'With your sales or stock history, a model can help predict demand, spot unusual transactions or show which customers may stop buying.' },
            { type: 'h2', text: '6. Content and translation' },
            { type: 'p', text: 'AI can help draft product descriptions, social media posts and translations between Somali, English and Arabic. Always have a person review the final text.' },
            { type: 'h2', text: 'How to start without wasting money' },
            {
                type: 'ol',
                items: [
                    'Pick **one** task that takes your team a lot of time.',
                    'Collect the data the AI will need, and make sure you are allowed to use it.',
                    'Build a small pilot and measure the result.',
                    'Expand only what works.',
                ],
            },
            { type: 'h2', text: 'Privacy and safety' },
            { type: 'p', text: 'Your business and customer data must be protected. A good AI partner keeps secret keys on the server, limits what the AI can access, and logs what it does.' },
            { type: 'p', text: 'Afraino builds [AI models, agents and chatbots](/services) for businesses in Somalia and beyond. [Book a free consultation](/book) to find the right first project.' },
        ],
        faq: [
            { q: 'What is the difference between a chatbot and an AI agent?', a: 'A chatbot mainly answers questions. An AI agent can also take actions in your systems, such as creating orders or sending reminders, within the limits you set.' },
            { q: 'Do I need a lot of data to use AI?', a: 'Not always. Many useful AI tools work with your existing documents, product lists or records. Some tasks, like forecasting, need more history.' },
            { q: 'Is my data safe with AI?', a: 'It can be, when the system is built carefully: limited access, secure servers, no secret keys in the app, and clear rules about what data the AI can use.' },
        ],
    },
    {
        slug: 'ui-ux-design-somalia',
        lang: 'en',
        title: 'UI/UX Design in Somalia: Why Good Design Makes People Use Your App',
        metaTitle: 'UI/UX Design in Somalia | App & Website Design',
        description:
            'What UI/UX design is, why it decides if customers keep using your app or website, and the design process we follow for businesses in Somalia.',
        keywords: [
            'UI UX design Somalia',
            'app design Mogadishu',
            'web design Somalia',
            'UX designer Somalia',
        ],
        category: 'Design',
        date: '2026-11-04',
        author: AUTHOR,
        cover: '/blog/ui-ux-design-somalia.jpg',
        coverAlt: 'Designer sketching mobile app wireframes on paper',
        body: [
            { type: 'p', text: 'Good **UI/UX design in Somalia** is what separates apps people love from apps they delete. People decide in seconds if an app feels easy or confusing. If it is confusing, they delete it. That is why **UI/UX design** is not decoration; it decides whether your product succeeds.' },
            { type: 'h2', text: 'UI and UX: what is the difference?' },
            {
                type: 'ul',
                items: [
                    '**UX (user experience)**: how easy it is to reach a goal, like ordering food or paying a bill.',
                    '**UI (user interface)**: what the user sees: colours, fonts, buttons, icons and layout.',
                ],
            },
            { type: 'p', text: 'Good UX with ugly UI feels cheap. Beautiful UI with bad UX is frustrating. You need both.' },
            { type: 'h2', text: 'Signs your app or website needs better design' },
            {
                type: 'ul',
                items: [
                    'Customers ask your staff how to use the app.',
                    'People start an order but do not finish it.',
                    'It looks different on every screen.',
                    'Text is small or hard to read on phones.',
                ],
            },
            { type: 'h2', text: 'Our design process' },
            {
                type: 'ol',
                items: [
                    '**Research**: who are your users and what do they need?',
                    '**User flows**: the shortest path to each goal.',
                    '**Wireframes**: simple layouts to agree the structure.',
                    '**Visual design**: your brand colours, fonts and style.',
                    '**Clickable prototype**: test it on a phone before any code.',
                    '**Design system**: reusable parts so the product stays consistent.',
                ],
            },
            { type: 'h2', text: 'Design for Somali users' },
            { type: 'p', text: 'Design for low-cost Android phones and slow internet, support Somali text, and use familiar patterns like WhatsApp-style chat. If you also need Arabic, the layout must work right-to-left.' },
            { type: 'p', text: 'See designs we made for [IKEN, Mehrad and more](/portfolio), or [book a free consultation](/book) to talk about your product.' },
        ],
        faq: [
            { q: 'Can you redesign my existing app or website?', a: 'Yes. We start by reviewing what works and what confuses users, then redesign step by step.' },
            { q: 'Do I get the design files?', a: 'Yes. You receive the design files and the design system, so any developer can continue the work.' },
            { q: 'Why test a prototype before coding?', a: 'Changing a design is fast and cheap. Changing finished code is slow and expensive. A prototype finds problems early.' },
        ],
    },
    {
        slug: 'branding-identity-somalia',
        lang: 'en',
        title: 'Branding and Logo Design in Somalia: How Businesses Can Stand Out',
        metaTitle: 'Branding & Logo Design in Somalia | Brand Identity',
        description:
            'A strong brand helps customers remember and trust you. What brand identity includes, and how to build one for your business in Somalia.',
        keywords: [
            'branding Somalia',
            'logo design Somalia',
            'brand identity Mogadishu',
            'graphic design Somalia',
        ],
        category: 'Branding',
        date: '2026-11-02',
        author: AUTHOR,
        cover: '/blog/branding-identity-somalia.jpg',
        coverAlt: 'Brand identity guide with logo, colours and packaging',
        body: [
            { type: 'p', text: 'Professional **branding and logo design in Somalia** helps customers remember and trust your business. In a busy market, customers choose the business they remember and trust. Your **brand identity** is how they recognise you: on a sign, a WhatsApp message, an app icon or a Facebook post.' },
            { type: 'h2', text: 'What a brand identity includes' },
            {
                type: 'ul',
                items: [
                    '**Logo**, with versions for light and dark backgrounds and a small icon.',
                    '**Colours** that are easy to recognise.',
                    '**Fonts** for headings and text.',
                    '**Tone of voice**: how you speak to customers, in Somali and English.',
                    '**Templates** for social media, business cards, invoices and signs.',
                    'A short **brand guide** so everyone uses it the same way.',
                ],
            },
            { type: 'h2', text: 'Why consistency matters' },
            { type: 'p', text: 'When your website, app, social media and shop all look the same, people recognise you faster and see you as professional. Mixed colours and many logo versions make a business look small.' },
            { type: 'h2', text: 'Branding and marketing together' },
            { type: 'p', text: 'A brand is the base for your marketing. For **TECO Construction** we worked on software and media marketing, and the TECO name and colours appear across the website and video content. See it in our [portfolio](/portfolio).' },
            { type: 'h2', text: 'Simple steps to start' },
            {
                type: 'ol',
                items: [
                    'Write down what makes your business different.',
                    'Describe your ideal customer.',
                    'Choose a few words your brand should feel like (for example: modern, trusted, local).',
                    'Work with a designer to turn this into a logo, colours and templates.',
                ],
            },
            { type: 'p', text: 'Need a brand that matches your ambition? [Book a free consultation](/book) with Afraino.' },
        ],
        faq: [
            { q: 'Is a logo the same as a brand?', a: 'No. A logo is one part. A brand also includes colours, fonts, tone of voice and how you present yourself everywhere.' },
            { q: 'Should my brand work in Somali and English?', a: 'If your customers use both, yes. Your name, slogan and messages should read well in both languages.' },
            { q: 'Can you refresh an existing brand?', a: 'Yes. A refresh keeps what customers already recognise and makes it cleaner and more consistent.' },
        ],
    },
    {
        slug: 'app-website-maintenance-support',
        lang: 'en',
        title: 'App and Website Maintenance in Somalia: Why Launch Is Only the Beginning',
        metaTitle: 'App & Website Maintenance and Support in Somalia',
        description:
            'What app and website maintenance includes, why skipping it costs more, and what a good support plan looks like for businesses in Somalia.',
        keywords: [
            'app maintenance Somalia',
            'website maintenance Somalia',
            'software support Mogadishu',
            'app support services',
        ],
        category: 'Support',
        date: '2026-11-01',
        author: AUTHOR,
        cover: '/blog/app-website-maintenance-support.jpg',
        coverAlt: 'Developer screens showing code during app maintenance',
        body: [
            { type: 'p', text: '**App and website maintenance** keeps your product fast, safe and working after launch. Many businesses think the work is finished when the app or website goes live. In reality, launch is the start. Phones, browsers, app stores and security threats change all the time, and your product must keep up.' },
            { type: 'h2', text: 'What maintenance includes' },
            {
                type: 'ul',
                items: [
                    '**Bug fixes** when something stops working.',
                    '**Updates** for new Android and iOS versions and store rules.',
                    '**Security updates** for libraries and servers.',
                    '**Backups**, so your data can be restored.',
                    '**Monitoring**, so problems are found before customers complain.',
                    '**Small improvements** based on real user feedback.',
                ],
            },
            { type: 'h2', text: 'What happens without maintenance' },
            {
                type: 'ul',
                items: [
                    'The app can be removed from the store if it does not meet new requirements.',
                    'Old software becomes easier to hack.',
                    'The site slows down or breaks on new phones.',
                    'Fixing many problems at once later costs more than small regular care.',
                ],
            },
            { type: 'h2', text: 'What a good support plan looks like' },
            {
                type: 'ol',
                items: [
                    'A clear list of what is included each month.',
                    'Agreed response times for urgent and normal issues.',
                    'One contact person you can reach, for example on WhatsApp.',
                    'Regular backups and a report of what was done.',
                ],
            },
            { type: 'p', text: 'Afraino offers [maintenance and support](/services) for apps and websites, including ones we did not build. [Book a free consultation](/book) and we will review your product.' },
        ],
        faq: [
            { q: 'Can you maintain an app another company built?', a: 'Usually yes. We first review the code and setup, then agree on a support plan.' },
            { q: 'How often should an app be updated?', a: 'It depends on the app, but security updates and checks for new Android and iOS versions should happen regularly, not only when something breaks.' },
            { q: 'Do I need maintenance for a simple website?', a: 'Yes. Even simple sites need security updates, backups and checks that forms and links still work.' },
        ],
    },
    {
        slug: 'sida-loo-dhiso-app-soomaaliya',
        lang: 'so',
        title: 'Sida Loo Sameeyo App Moobil ah: Hage Ganacsiyada Soomaaliyeed',
        metaTitle: 'Sida Loo Sameeyo App Moobil ah Soomaaliya | Afraino',
        description:
            'Ma rabtaa inaad app u sameysato ganacsigaaga? Hage fudud oo Soomaali ah: tallaabooyinka dhismaha app-ka, waxa qiimaha go\'aamiya, iyo sida loo doorto shirkad.',
        keywords: [
            'sida loo sameeyo app',
            'samee app Soomaaliya',
            'shirkad app Soomaaliya',
            'dhisida app Muqdisho',
            'shirkad software Soomaaliya',
        ],
        category: 'Mobile Apps',
        date: '2026-11-03',
        author: AUTHOR,
        cover: '/blog/sida-loo-dhiso-app-soomaaliya.jpg',
        coverAlt: 'Nin dhallinyaro ah oo haysta taleefan casri ah',
        body: [
            { type: 'p', text: '**Sida loo sameeyo app** moobil ah waa su\'aal ay ganacsiyo badan oo Soomaaliyeed is weydiiyaan. Ganacsiyo badan oo Soomaaliyeed ayaa hadda doonaya app u gaar ah: si ay dalabaad u qaataan, macaamiishooda ula socdaan, ama lacag EVC Plus ah ku qaataan. Hagahan fudud wuxuu kuu sharxayaa tallaabooyinka **dhismaha app moobil** ah.' },
            { type: 'h2', text: '1. Qeex fikradda' },
            { type: 'p', text: 'Qor yaa isticmaali doona app-ka, maxayse u baahan yihiin. Ku bilow waxyaabaha ugu muhiimsan, kadibna wax kale ku dar.' },
            { type: 'h2', text: '2. Naqshadda (Design)' },
            { type: 'p', text: 'Ka hor intaan code la qorin, waxaa la sameeyaa shaashadaha app-ka si aad u aragto una tijaabiso.' },
            { type: 'h2', text: '3. Dhismaha iyo tijaabinta' },
            { type: 'p', text: 'Kooxda ayaa dhisaysa app-ka, kuna tijaabinaysa taleefanno dhab ah, oo ay ku jiraan taleefannada Android ee qiimaha jaban.' },
            { type: 'h2', text: '4. Lacag bixinta maxalliga ah' },
            { type: 'p', text: 'App-kaagu wuxuu qaadan karaa **EVC Plus, Zaad, Sahal iyo eDahab**.' },
            { type: 'h2', text: '5. Daabacaadda (Publishing)' },
            { type: 'p', text: 'App-ka waxaa la geliyaa Google Play iyo App Store, adigoo isticmaalaya akoon ganacsigaaga u diiwaangashan.' },
            { type: 'h2', text: 'Waa maxay waxa qiimaha go\'aamiya?' },
            {
                type: 'ul',
                items: [
                    'Tirada adeegyada (features) ee app-ka.',
                    'Android, iPhone ama labadaba.',
                    'Tayada naqshadda.',
                    'Lacag bixinta iyo admin panel.',
                    'Luqadaha: Soomaali, Ingiriisi, Carabi.',
                ],
            },
            { type: 'h2', text: 'Sida loo doorto shirkad' },
            {
                type: 'ul',
                items: [
                    'Weydii app-yo ay hore u dhiseen oo ku jira Google Play.',
                    'Hubi in code-ka iyo akoonnada adiga laguu leeyahay.',
                    'Weydii taageerada kadib marka app-ka la daabaco.',
                ],
            },
            { type: 'p', text: 'Afraino waa shirkad software iyo app-yo moobil ah oo ku taal Muqdisho. Eeg [shaqooyinkayaga](/portfolio) ama [qabso la-tashi bilaash ah](/book).' },
        ],
        faq: [
            { q: 'Immisa wakhti ayuu qaataa dhismaha app?', a: 'Waxay ku xiran tahay adeegyada. App fudud wuxuu qaadan karaa dhowr toddobaad, app weyn oo leh lacag bixin iyo admin panel wuxuu qaadan karaa dhowr bilood.' },
            { q: 'App-ku ma qaadan karaa EVC Plus?', a: 'Haa. App-ka iyo website-ka waxay qaadan karaan EVC Plus iyo lacagaha kale ee moobilka iyadoo loo marayo payment gateway.' },
        ],
    },
];

// Newest first
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const readingMinutes = (post: Post) => {
    const words = post.body
        .map((b) => ('text' in b ? b.text : b.items.join(' ')))
        .join(' ')
        .split(/\s+/).length;
    return Math.max(2, Math.round(words / 200));
};

const escapeHtml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Converts **bold** and [text](url) to safe HTML. Input is our own static content.
export const inlineHtml = (text: string) =>
    escapeHtml(text)
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.+?)\]\((.+?)\)/g, (_m, label: string, href: string) =>
            /^https?:/.test(href)
                ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
                : `<a href="${href}">${label}</a>`
        );

// Full article body as HTML (used for the static prerendered page)
export const bodyHtml = (post: Post) =>
    post.body
        .map((b) => {
            switch (b.type) {
                case 'p': return `<p>${inlineHtml(b.text)}</p>`;
                case 'h2': return `<h2>${inlineHtml(b.text)}</h2>`;
                case 'h3': return `<h3>${inlineHtml(b.text)}</h3>`;
                case 'ul': return `<ul>${b.items.map((i) => `<li>${inlineHtml(i)}</li>`).join('')}</ul>`;
                case 'ol': return `<ol>${b.items.map((i) => `<li>${inlineHtml(i)}</li>`).join('')}</ol>`;
                case 'quote': return `<blockquote><p>${inlineHtml(b.text)}</p>${b.cite ? `<cite>${escapeHtml(b.cite)}</cite>` : ''}</blockquote>`;
            }
        })
        .join('\n');
