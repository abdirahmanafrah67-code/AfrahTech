// Blog posts. Used by the React pages AND by scripts/prerender.mjs, which
// writes a static HTML file per post so Google sees the full text without JS.
// Keep this file free of React/browser imports.
//
// Inline formatting inside `text`: **bold** and [link text](/path or https://...)
// Style: long-form paragraphs with descriptive H2s. Avoid bullet lists.

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
const UPDATED = '2026-11-19';

const p = (text: string): Block => ({ type: 'p', text });
const h = (text: string): Block => ({ type: 'h2', text });
const quote = (text: string, cite?: string): Block => ({ type: 'quote', text, cite });

export const posts: Post[] = [
    {
        slug: 'mobile-app-development-company-somalia',
        lang: 'en',
        title: 'Mobile App Development Company in Somalia: How to Choose the Right One',
        metaTitle: 'Mobile App Development Company in Somalia | How to Choose',
        description:
            'Looking for a mobile app development company in Somalia? How to compare app developers in Mogadishu: portfolio, process, local market knowledge, ownership and support.',
        keywords: [
            'mobile app development company Somalia',
            'app developers Mogadishu',
            'software company Somalia',
            'Android app development Somalia',
            'iOS app development Somalia',
        ],
        category: 'Mobile Apps',
        date: '2026-11-17',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/mobile-app-development-company-somalia.jpg',
        coverAlt: 'Team of young professionals working together in front of a computer',
        body: [
            p(`More businesses in Somalia want their own mobile app than ever before. Shops want to take orders on the phone, finance businesses want to replace paper records, and service companies want customers to book without calling. Choosing the right **mobile app development company in Somalia** is one of the most important decisions in that journey, because the wrong partner costs months of time and a budget you cannot get back.`),
            p(`This guide explains what to look for when you compare app developers in Mogadishu and across the country. It is written from our experience building and publishing apps for Somali and international clients, and it is meant to help you ask the right questions before you sign anything.`),
            h('Start with apps they have actually launched'),
            p(`A serious development company can show you live products, not only attractive designs. Ask for links to apps on Google Play or the App Store, then install them on your own phone. Pay attention to how quickly they open, whether they work well on an ordinary Android phone, and whether they have been updated recently. An app that was published once and never touched again tells you something about how the company handles its clients after launch.`),
            p(`Our own [portfolio](/portfolio) links directly to live apps. Mehrad, a loan and debt tracking app for small businesses, and IKEN, a food delivery app, are both available on Google Play, and you can read the full [Mehrad case study](/portfolio/mehrad) to see how the project went from idea to launch.`),
            h('Listen to how they describe their process'),
            p(`A good company works in clear stages and can explain them in simple language. The project should begin with discovery, where the team learns about your business, your customers and what success looks like. Design comes next, so you can click through the screens and approve the experience before any code is written. Development then happens in short cycles with regular demos, followed by testing on real devices, including low-cost Android phones that many Somali customers use.`),
            p(`Launch is not the end of that process. The company should publish the app to Google Play and the App Store for you and then stay involved, fixing problems and adding features as your users give feedback. If a developer cannot describe these steps clearly, it is unlikely they will manage your project clearly either.`),
            h('Make sure they understand the Somali market'),
            p(`An app built for customers in Mogadishu, Hargeisa or Kismayo has different needs from one built for Europe. Mobile money is part of daily life here, so ask whether the team has experience with local payment options such as EVC Plus, Zaad, Sahal and eDahab. Language matters too: your app may need Somali as the main language, with English or Arabic alongside it, and Arabic requires a right-to-left layout.`),
            p(`Internet access can be slow or expensive, so the app should be light and careful with data. And because most Somali customers already live on WhatsApp, a good partner will think about how the app and WhatsApp work together instead of treating them as competitors.`),
            h('Be clear about who owns the code and the accounts'),
            p(`You are paying for the app, so your business should own it. Your agreement should state that the source code, design files and store listings belong to you. Ask for the app to be published under your own Google Play and Apple developer accounts rather than the developer's. This protects you if you ever change partners, and it means you always control your product and your customer data.`),
            h('Compare quotes on what they include, not only on price'),
            p(`The cheapest quote often becomes the most expensive project. Two quotes can look very different because one includes design, both Android and iOS, an admin dashboard, hosting, publishing and support, while the other only covers part of the work. Ask every company to break their price into parts so you can compare like with like. Our guide on [app development cost in Somalia](/blog/mobile-app-cost-somalia) explains the factors that change the price.`),
            h('Check what happens after launch'),
            p(`Phones, operating systems and app store rules change every year, so every app needs care after it goes live. Ask who fixes bugs, how quickly they respond, and what happens when a new version of Android or iOS is released. A local team that you can reach on WhatsApp, by phone or in person is a real advantage when something urgent happens.`),
            h('Choosing with confidence'),
            p(`The right partner will show you real work, explain a clear process, understand your market, give you ownership of what you pay for, and stay with you after launch. If a company meets those standards, you can focus on growing your business while they focus on the technology.`),
            p(`Afraino is a software and [mobile app development company in Somalia](/mobile-app-development), based in Mogadishu. If you have an app idea, [book a free consultation](/book) and we will help you plan the first version.`),
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
            'What does it cost to build a mobile app in Somalia? The main factors that change the price of app development in Mogadishu, and how to get an accurate quote.',
        keywords: [
            'app development cost Somalia',
            'how much does an app cost Somalia',
            'mobile app price Mogadishu',
            'build an app Somalia',
        ],
        category: 'Mobile Apps',
        date: '2026-11-15',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/mobile-app-cost-somalia.jpg',
        coverAlt: 'Business owner planning an app budget at a laptop',
        body: [
            p(`"How much does an app cost?" is the first question almost every client asks us. The honest answer is that it depends on what the app needs to do. Two apps that look similar on the surface can require very different amounts of work behind the scenes. Understanding the real drivers of **app development cost in Somalia** helps you plan a realistic budget and compare quotes fairly.`),
            h('Features are the biggest factor'),
            p(`Every feature is a piece of work that must be designed, built and tested. Login, user profiles, search, chat, notifications, maps and bookings each add time to the project. The best way to control cost is to start with a focused first version, often called an MVP, that contains only what your business truly needs on day one. Once real customers are using it, you can invest in the features they actually ask for instead of guessing.`),
            h('Android, iOS or both'),
            p(`Building for a single platform costs less than building for two. However, modern cross-platform tools allow one codebase to run on both Android and iPhone, which usually saves a significant amount of time compared with building two separate apps. In Somalia, many businesses begin with Android because most of their customers use Android phones, then release on iOS when they are ready.`),
            h('Design quality and branding'),
            p(`A simple template is cheaper than a custom design that reflects your brand, with carefully planned flows, illustrations and animations. Good design is not decoration, though. Customers trust and keep using an app that feels clear and professional, and that directly affects how much value you get from your investment. Our article on [UI/UX design in Somalia](/blog/ui-ux-design-somalia) explains why.`),
            h('Payments, backend and admin tools'),
            p(`Accepting mobile money or card payments requires a payment gateway, careful testing and extra security work. Most business apps also need a backend that stores data securely and a web dashboard where your team manages orders, users and content. The dashboard is a project in its own right, so make sure it appears clearly in any quote you receive.`),
            h('AI features and languages'),
            p(`AI can add real value, from chat assistants to photo recognition, but it also adds work. The Mehrad app, for example, includes Mehrad.ai, an AI assistant that answers questions about a user's own loan and payment records. Languages have a cost too: supporting Somali, English and Arabic means translating every screen, and Arabic requires a right-to-left layout.`),
            h('Running costs after launch'),
            p(`The build is not the only cost. Plan for hosting, the Google Play registration and Apple developer membership, and ongoing maintenance to keep the app compatible with new phones and store rules. Our guide to [publishing your app](/blog/publish-app-google-play-app-store-somalia) explains the store requirements in more detail.`),
            h('How to get an accurate quote'),
            p(`The more clearly you describe your project, the more accurate your quote will be. Write down who will use the app and what they need to achieve, then separate your must-have features from the ones that can wait. Share a few apps you like so the team understands your expectations, and ask for a quote that is broken into design, app development, admin panel, publishing and support. This makes it easy to compare companies and to decide what to build first.`),
            p(`If you want a clear price for your idea, [book a free consultation](/book) with Afraino. We will review your requirements and give you a detailed quote for your [mobile app](/mobile-app-development).`),
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
            'WhatsApp AI chatbot Somalia',
            'AI chatbot Somalia',
            'WhatsApp business automation',
            'AI for business Mogadishu',
        ],
        category: 'AI Solutions',
        date: '2026-11-10',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/whatsapp-ai-chatbot-somalia.jpg',
        coverAlt: 'Woman smiling while chatting with a business on her smartphone',
        body: [
            p(`In Somalia, customers do not fill in contact forms. They open WhatsApp and send a message. They write at night, on weekends and during the busiest hours of the day, and they often ask the same questions: is this item available, what does it cost, where are you located, can you deliver today? Every unanswered message is a customer who may buy somewhere else. A **WhatsApp AI chatbot** solves this by replying instantly, at any time, with accurate information about your business.`),
            h('What a WhatsApp AI chatbot really is'),
            p(`A WhatsApp AI chatbot is an assistant connected to your WhatsApp Business number. Older bots forced customers to choose from fixed menus and press numbers. An AI chatbot is different: it understands normal messages written in the customer's own words and replies in natural language, much like a well-trained member of staff.`),
            p(`The most important part is the knowledge behind it. A useful chatbot is **trained on your own business data**, including your products, services, prices, opening hours and policies. That means it gives your answers, not generic text from the internet, and it stays consistent no matter how many customers are writing at once.`),
            h('A real example: ANFA COLLECTION'),
            p(`We built a WhatsApp AI chatbot for ANFA COLLECTION, a fashion store whose customers contact it on WhatsApp. The chatbot was trained on the store's own information, so it understands what customers are asking and responds with correct details about the store's products and services at any time of day. You can read how we approached the project in the [ANFA COLLECTION case study](/portfolio/anfa-collection).`),
            quote('Afraino built us a WhatsApp chatbot that knows our products and gives our customers the right answers.', 'Founder, ANFA COLLECTION'),
            h('What changes for your business'),
            p(`The first change is speed. Customers receive an answer in seconds instead of waiting until someone on your team is free, which keeps them engaged at the moment they are ready to buy. The second change is availability: the chatbot keeps working at night, on public holidays and during peak hours when your staff are busy with walk-in customers.`),
            p(`The chatbot can also collect order or booking details and pass them to your team, and when a conversation needs a human, it hands it over. Your staff stop typing the same replies all day and can focus on closing sales and handling the questions that genuinely need a person.`),
            h('Which businesses benefit most'),
            p(`Any business that receives many similar questions on WhatsApp is a good fit. Retail shops and fashion stores, restaurants and cafés, clinics and pharmacies, real estate agencies, schools and travel agencies all spend hours answering the same messages. For these businesses, a chatbot quickly pays for itself in saved time and in customers who no longer slip away.`),
            h('How we build and launch a chatbot'),
            p(`Every project begins by gathering the information the chatbot needs, such as your product catalogue, prices, frequently asked questions and opening hours. We then train the AI on that knowledge and agree on its tone of voice, so it sounds like your brand. Once it is connected to your WhatsApp Business number, we test it with real questions together with you before it goes live.`),
            p(`After launch, we review conversations and keep improving the answers as your products and prices change. A chatbot is not a one-time setup; it grows with your business.`),
            p(`If you would like a chatbot like this for your business, see our [WhatsApp AI chatbot service](/whatsapp-ai-chatbot) or [book a free consultation](/book).`),
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
            'How to publish your mobile app on Google Play and the Apple App Store from Somalia: developer accounts, fees, verification, testing rules and common reasons apps get rejected.',
        keywords: [
            'publish app Google Play Somalia',
            'App Store publishing Somalia',
            'Google Play developer account Somalia',
            'app publishing service',
        ],
        category: 'Mobile Apps',
        date: '2026-11-08',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/publish-app-google-play-app-store-somalia.jpg',
        coverAlt: 'Smartphone home screen full of published apps',
        body: [
            p(`Building an app is only half of the journey. To reach customers, it must be published on **Google Play** for Android users and on the **Apple App Store** for iPhone users. Many Somali businesses get stuck at this stage because the process involves accounts, verification, testing rules and reviews that are not obvious the first time. This guide walks through what to expect so you can plan ahead.`),
            h('Create developer accounts in your business name'),
            p(`Both stores require a developer account. Google Play Console charges a one-time registration fee, which was US$25 at the time of writing, while the Apple Developer Program is a yearly membership, which was US$99 per year at the time of writing. Fees and rules can change, so always confirm the current details on the official Google and Apple websites.`),
            p(`Open these accounts in your company's name. When your app is published under your own account, you, not your developer, own the listing, the reviews and the download history. This is one of the most important decisions in the whole process.`),
            h('Prepare for identity verification'),
            p(`Google and Apple both verify developers before they can publish. You will need a valid ID and, for an organisation account, official business documents. Apple organisation accounts also require a D-U-N-S number. Verification can take several days, so it is wise to start this step early, while the app is still being built.`),
            h('Plan for testing before launch'),
            p(`Google Play requires new personal developer accounts to run a closed test with a group of testers for a set period before the app can be released to the public. At the time of writing, this means 12 testers for 14 days. The rule can change, so check the current requirement in Play Console when you begin. Organisation accounts may have different requirements, which is another reason to register as a business.`),
            h('Create a store listing that converts'),
            p(`Your store listing is your app's shop window. It needs a clear name, a short and a full description that include the words your customers search for, professional screenshots and a recognisable icon. You will also need a privacy policy hosted on a website, and you must complete the content rating and data safety forms honestly. A strong listing helps the app pass review and persuades people to install it.`),
            h('Why apps get rejected, and how to avoid it'),
            p(`Most rejections come from a few predictable problems. A missing or weak privacy policy is one of the most common. Reviewers also reject apps that crash or have broken features during testing, and apps that request permissions they do not clearly need. If your app requires a login, you must provide the reviewer with a working test account; without it, they cannot review the app and will reject it. Checking these points before submission saves days of back-and-forth.`),
            h('Let a team handle publishing for you'),
            p(`Publishing is part of our [mobile app development service](/mobile-app-development). We prepare the listing, submit the app, respond to reviewer feedback and fix any rejection issues, while the app stays in your own developer account. Apps we built, such as [Mehrad](/portfolio/mehrad) and IKEN, are live on Google Play today. [Book a free consultation](/book) if you need help getting your app into the stores.`),
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
            'website development Somalia',
            'web design Somalia',
            'business website Somalia',
            'web development company Somalia',
        ],
        category: 'Web Development',
        date: '2026-11-05',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/business-website-mogadishu.jpg',
        coverAlt: 'Young businesswoman smiling while working on her website',
        body: [
            p(`Many businesses in Somalia run entirely on Facebook and WhatsApp. Both are excellent for talking to customers, but they are not enough on their own. When someone searches Google for a service, Google shows websites, not Facebook posts. A professional website is the one place online that your business fully owns and controls, and it is often the first impression a new customer, partner or investor has of you.`),
            h('Customers search before they call'),
            p(`Before people pick up the phone, they search. They type phrases like "hotel in Mogadishu", "construction company Somalia" or "app developer Somalia" and choose from what they find. If your business has no website, those searches lead to your competitors. A well-built website with clear pages for each of your services gives Google something to show and gives customers a reason to choose you.`),
            h('Trust and professionalism'),
            p(`A clean website on your own domain, with a matching business email address, tells visitors that you are an established and serious company. This matters even more when you work with international partners, NGOs and investors, who usually check a company's website before they reply to a proposal or sign a contract.`),
            h('A salesperson that works around the clock'),
            p(`Your website presents your services, projects and contact details at any hour of the day. Visitors can learn about you, see your work and reach you without waiting for office hours. Combined with a [WhatsApp AI chatbot](/blog/whatsapp-ai-chatbot-somalia), it can even answer questions at night and turn visitors into enquiries while your team is offline.`),
            h('What separates a good business website from an average one'),
            p(`Speed comes first. A good website loads quickly even on mobile data, because slow pages lose visitors within seconds. It must also be designed for phones first, since most people in Somalia browse on a smartphone. The content should explain your services clearly and make it obvious how to get a price or a quote.`),
            p(`Contact should take one tap, with a WhatsApp button, a phone number and your location on Google Maps. Behind the scenes, the site needs solid technical SEO, including clear page titles, descriptions and a sitemap, so that Google understands each page. If your customers use both Somali and English, the website should speak both languages.`),
            h('Examples from our work'),
            p(`We built the [Kabba Real Estate](https://www.kabbarealestate.com) website, which presents property listings, free valuation requests and instant WhatsApp contact in English and Spanish. We also built [Bokhol](https://www.bokhol.nl), a B2B seafood platform that connects suppliers and buyers across Europe in four languages, and a responsive company website for TECO Construction in Somalia.`),
            p(`If you are ready for a website that brings you customers, explore our [website development service in Mogadishu](/web-development) or [book a free consultation](/book).`),
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
        title: 'AI Solutions in Somalia: Practical Ways Businesses Use AI Models and Agents',
        metaTitle: 'AI Solutions in Somalia: AI Models & Agents for Business',
        description:
            'How Somali businesses can use AI today: assistants inside apps, AI agents that automate work, customer service, document processing, forecasting and translation.',
        keywords: [
            'AI solutions Somalia',
            'AI company Somalia',
            'AI automation for businesses',
            'AI agents for business',
            'AI development Mogadishu',
        ],
        category: 'AI Solutions',
        date: '2026-11-16',
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/ai-solutions-business-somalia.jpg',
        coverAlt: 'Abstract visual of an artificial intelligence network',
        body: [
            p(`Artificial intelligence is no longer reserved for large technology companies. Today, a shop, school, clinic or finance business in Somalia can use **AI models and AI agents** to save time, serve customers faster and make better decisions. The key is to start with practical problems rather than with the technology itself. This article looks at the most useful ways Somali businesses can apply AI right now.`),
            h('AI assistants inside your own app'),
            p(`An assistant that understands your data can answer questions in plain language, so users no longer have to dig through menus and reports. The [Mehrad app](/portfolio/mehrad) is a good example. It includes Mehrad.ai, an AI assistant that answers questions about a user's own loan and payment records, turning raw data into quick, useful answers.`),
            h('AI agents that complete tasks'),
            p(`A chatbot talks; an **AI agent** acts. An agent can create an order, update a record, send a reminder or prepare a report by working with the systems you already use. It follows the rules you define and asks a person for help when a situation is unclear. For many businesses, this is where AI automation starts to save real hours each week.`),
            h('Customer service on WhatsApp and the web'),
            p(`For most Somali businesses, the fastest return on AI comes from customer service. A chatbot trained on your products and policies can answer common questions on WhatsApp or your website at any time of day. Our [WhatsApp AI chatbot guide](/blog/whatsapp-ai-chatbot-somalia) explains how this works using a real project.`),
            h('Reading documents automatically'),
            p(`Teams spend a surprising amount of time copying information from receipts, invoices, forms and ID documents into systems. AI can read these documents and extract the important details automatically, reducing typing errors and freeing staff for more valuable work.`),
            h('Forecasting and smarter reports'),
            p(`If you have a history of sales or stock data, AI models can help predict demand, highlight unusual transactions and show which customers may be about to stop buying. These insights help you plan purchases, manage cash flow and act before small problems become big ones.`),
            h('Content and translation support'),
            p(`AI can help draft product descriptions, social media posts and translations between Somali, English and Arabic. It speeds up content work considerably, but a person should always review the final text to make sure it is accurate and sounds right for your audience.`),
            h('How to start without wasting money'),
            p(`The most successful AI projects start small. Choose one task that takes your team a lot of time, and make sure you have the data the AI will need and the right to use it. Build a small pilot, measure the result against how the work was done before, and expand only what clearly works. This approach keeps costs under control and builds confidence across your team.`),
            h('Privacy and safety come first'),
            p(`Business and customer data must be protected. A responsible AI partner keeps secret keys on secure servers rather than inside apps, limits what the AI is allowed to access, and keeps records of what it does. These safeguards should be part of the design from the first day, not added later.`),
            p(`Afraino is an [AI company in Somalia](/ai-solutions) that builds AI assistants, agents and chatbots for businesses in Somalia and beyond. [Book a free consultation](/book) to find the right first AI project for your business.`),
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
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/ui-ux-design-somalia.jpg',
        coverAlt: 'Designer sketching app wireframes on paper',
        body: [
            p(`People decide within seconds whether an app feels easy or confusing. If it is confusing, they close it, and many never open it again. That is why **UI/UX design** is not decoration. It is the part of your product that decides whether customers complete an order, return next week and recommend you to others.`),
            h('Understanding UI and UX'),
            p(`UX, or user experience, is about how easy it is for someone to reach their goal, whether that is ordering food, booking a room or paying a bill. It covers the flow of screens, the number of steps and how clearly each step is explained. UI, or user interface, is what people see: the colours, typography, buttons, icons and layout.`),
            p(`The two depend on each other. A product with good UX but a poor interface feels cheap and untrustworthy. A beautiful interface with poor UX is frustrating to use. Successful apps and websites invest in both.`),
            h('Signs your product needs better design'),
            p(`Design problems usually show up in everyday business. Customers may call or message your staff to ask how the app works. People may start an order and abandon it halfway through. Screens may look inconsistent from one page to the next, or text may be too small to read comfortably on a phone. Each of these is a signal that customers are struggling, and each one costs you sales.`),
            h('How we design a product'),
            p(`Our process begins with research into who your users are and what they need to achieve. From there we map the shortest, clearest path to each goal and turn it into simple wireframes, so we can agree on the structure before thinking about colours. Visual design then brings in your brand's colours, typography and style.`),
            p(`Before any code is written, we create a clickable prototype that you can test on your own phone. Changing a design at this stage is fast and inexpensive; changing finished code is slow and costly. Finally, we organise everything into a design system of reusable components, so your product stays consistent as it grows.`),
            h('Designing for Somali users'),
            p(`Good design reflects the people who use it. In Somalia, that means designing for affordable Android phones and slower internet connections, supporting Somali text properly, and using familiar patterns such as WhatsApp-style conversations. If your product also serves Arabic speakers, every screen must work in a right-to-left layout.`),
            p(`You can see products we designed and built, including IKEN and [Mehrad](/portfolio/mehrad), in our [portfolio](/portfolio). To talk about your own product, explore our [UI/UX design service](/ui-ux-design) or [book a free consultation](/book).`),
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
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/branding-identity-somalia.jpg',
        coverAlt: 'Branded product packaging with a clear logo and colours',
        body: [
            p(`In a busy market, customers choose the business they remember and trust. Your **brand identity** is how they recognise you, whether they see your sign on the street, a message on WhatsApp, your app icon on their phone or a post on social media. Strong branding helps a business look established, charge fair prices and build loyalty over time.`),
            h('What a brand identity is made of'),
            p(`A logo is the most visible part of a brand, but it is only the beginning. A complete identity includes versions of the logo for light and dark backgrounds and a small icon for apps and social profiles. It defines a set of colours that people quickly associate with you and typefaces for headings and body text.`),
            p(`It also covers your tone of voice, which is how you speak to customers in Somali and English, and practical templates for social media, business cards, invoices and signage. All of this is captured in a short brand guide, so everyone who creates material for your business uses the brand in the same way.`),
            h('Why consistency builds trust'),
            p(`When your website, app, social media and physical shop all look and sound the same, customers recognise you faster and see you as a professional organisation. When colours change from post to post and several versions of a logo are in use, a business looks smaller and less reliable than it really is. Consistency is one of the simplest ways to raise how customers perceive you.`),
            h('Branding as the foundation for marketing'),
            p(`Marketing works better when it is built on a clear brand. For TECO Construction, we built software and ran media marketing, with the TECO name and colours carried through the website and video content. When every advertisement, video and page reinforces the same identity, each piece of marketing makes the next one more effective.`),
            h('Where to begin'),
            p(`Start by writing down what makes your business different from its competitors and describing the customer you most want to serve. Choose a few words that describe how your brand should feel, such as modern, trusted or local. A designer can then turn these ideas into a logo, a colour palette, typography and templates that work across everything you produce.`),
            p(`If you need a brand that matches your ambition, [book a free consultation](/book) with Afraino. We can also carry your brand into a [website](/web-development) or [mobile app](/mobile-app-development).`),
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
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/app-website-maintenance-support.jpg',
        coverAlt: 'Developer workspace showing code on a monitor and laptop',
        body: [
            p(`Many businesses believe the work is finished when their app or website goes live. In reality, launch is the beginning. Phones, browsers, app store rules and security threats change constantly, and a digital product must keep up with them. **App and website maintenance** is what keeps your product fast, secure and working for your customers month after month.`),
            h('What maintenance covers'),
            p(`At its core, maintenance means fixing problems quickly when something stops working. It also means keeping your app compatible with new versions of Android and iOS and with changing store requirements, and updating the libraries and servers your product relies on so known security weaknesses are closed.`),
            p(`Good maintenance includes regular backups, so your data can be restored if something goes wrong, and monitoring that detects issues before customers notice them. Over time, it also includes small improvements based on how real people use your product, which keeps it relevant as your business grows.`),
            h('The cost of skipping it'),
            p(`Without maintenance, problems build up quietly. An app that falls behind store requirements can be removed from Google Play or the App Store. Outdated software becomes easier to attack. A website that worked perfectly at launch can become slow or break on new phones and browsers. When all of these issues are finally addressed at once, the repair is usually far more expensive than regular care would have been.`),
            h('What a good support plan looks like'),
            p(`A reliable support plan states clearly what is included each month, so there are no surprises. It sets agreed response times for urgent and routine issues and gives you one contact person you can reach easily, for example on WhatsApp. It also includes regular backups and a simple report of the work that was done, so you always know the state of your product.`),
            p(`Afraino provides maintenance and support for apps and websites, including products that were built by other teams. Learn more about our [software development services](/software-development-somalia), or [book a free consultation](/book) and we will review your product.`),
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
        updated: UPDATED,
        author: AUTHOR,
        cover: '/blog/sida-loo-dhiso-app-soomaaliya.jpg',
        coverAlt: 'Nin haysta taleefan casri ah',
        body: [
            p(`Ganacsiyo badan oo Soomaaliyeed ayaa hadda doonaya app u gaar ah. Qaar waxay rabaan inay dalabaad ku qaataan taleefanka, qaar kalena inay diiwaanka macaamiishooda iyo deymaha ka saaraan buugaagta warqadda ah. Hagahan wuxuu si fudud kuugu sharxayaa **sida loo sameeyo app moobil ah**, laga bilaabo fikradda ilaa inta app-ku ka soo baxayo Google Play.`),
            h('Ku bilow fikrad cad'),
            p(`Tallaabada ugu horreysa waa inaad qeexdo cidda isticmaali doonta app-ka iyo waxa ay u baahan yihiin. Ha isku dayin inaad hal mar wax walba ku darto. Ku bilow adeegyada ugu muhiimsan ee ganacsigaagu maanta u baahan yahay, kadibna wax kale ku dar marka macaamiishu bilaabaan isticmaalka oo ay ku siiyaan fikradahooda.`),
            h('Naqshadda ka hor code-ka'),
            p(`Ka hor inta aan hal xariiq oo code ah la qorin, waxaa la naqshadeeyaa shaashadaha app-ka. Taasi waxay kuu oggolaanaysaa inaad aragto, taleefankaaga ku tijaabiso, oo aad isbeddel sameyso iyadoo weli fudud oo qiimo jaban. Naqshad wanaagsan waxay macaamiisha u sahlaysaa inay app-ka fahmaan oo ay sii isticmaalaan.`),
            h('Dhismaha iyo tijaabinta'),
            p(`Marka naqshadda la ansixiyo, kooxda horumarinta ayaa dhisaysa app-ka iyo nidaamka gadaashiisa ku jira. Waa muhiim in app-ka lagu tijaabiyo taleefanno dhab ah, oo ay ku jiraan taleefannada Android ee qiimahoodu jaban yahay, maadaama macaamiil badan oo Soomaaliyeed ay isticmaalaan. Sidoo kale app-ku waa inuu khafiif yahay si uu ugu shaqeeyo internet gaabis ah.`),
            h('Lacag bixinta iyo luqadda'),
            p(`App-ka loogu talagalay suuqa Soomaaliyeed wuxuu inta badan u baahan yahay inuu taageero lacagaha moobilka sida EVC Plus, Zaad, Sahal iyo eDahab, iyadoo loo marayo payment gateway. Luqadduna waa muhiim: app-kaagu wuxuu noqon karaa Soomaali, Ingiriisi, Carabi ama dhammaantood.`),
            h('Daabacaadda Google Play iyo App Store'),
            p(`Marka app-ku diyaar noqdo, waxaa la geliyaa Google Play iyo App Store. Waxaa fiican in app-ka lagu daabaco akoon ganacsigaaga u diiwaangashan, si adiga aad u lahaato app-ka, faallooyinka iyo macaamiisha, halkii uu ka noqon lahaa shirkadda dhistay.`),
            h('Waa maxay waxa qiimaha go\'aamiya?'),
            p(`Qiimaha app-ku wuxuu ku xiran yahay inta adeeg ee ku jirta, haddii uu yahay Android, iPhone ama labadaba, iyo tayada naqshadda. Lacag bixinta, admin panel-ka lagu maamulo dalabaadka, iyo tirada luqadaha ayaa sidoo kale qiimaha kordhiya. Sida ugu fiican ee lagu xakameeyo kharashka waa in lagu bilaabo nooc yar oo muhiim ah, kadibna la ballaariyo.`),
            h('Sida loo doorto shirkad'),
            p(`Shirkadda aad dooranayso, weydii app-yo ay hore u dhiseen oo hadda ku jira Google Play, kuna tijaabi taleefankaaga. Hubi in heshiiska uu cadeynayo in code-ka iyo akoonnada adiga laguu leeyahay. Ugu dambeyn, weydii sida ay kuu taageeri doonaan kadib marka app-ka la daabaco, maxaa yeelay app kasta wuxuu u baahan yahay daryeel joogto ah.`),
            p(`Afraino waa shirkad software iyo [app-yo moobil ah](/mobile-app-development) oo ku taal Muqdisho. Eeg [shaqooyinkayaga](/portfolio) ama [qabso la-tashi bilaash ah](/book).`),
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
