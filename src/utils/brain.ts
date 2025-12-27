
export interface BrainIntent {
    id: string;
    keywords: string[];
    responses: string[];
    priority: number; // Higher number = checks first
}

export const BRAIN: BrainIntent[] = [
    {
        id: 'greeting',
        keywords: ['hello', 'hi', 'hey', 'start', 'morning', 'afternoon', 'evening'],
        priority: 1,
        responses: [
            "Hello! I'm here to help you build a comprehensive digital product. What are you looking to create today?",
            "Hi there! ready to transform your ideas into reality? Let us know what you're imagining."
        ]
    },
    {
        id: 'capabilities',
        keywords: ['can you', 'do you', 'make', 'build', 'create', 'develop', 'app', 'website', 'system', 'software', 'platform'],
        priority: 2,
        responses: [
            "Yes, we can build that! We focus on creating comprehensive, high-quality products that handle everything you need. Let's discuss your vision—please share your email or phone number so our team can connect with you.",
            "Absolutely. We specialize in building complete, end-to-end digital products tailored to your goals. To get started, could you leave your contact details?"
        ]
    },
    {
        id: 'pricing',
        keywords: ['price', 'cost', 'much', 'money', 'budget', 'quote', 'expensive', 'cheap'],
        priority: 3,
        responses: [
            "Every project is unique! We focus on delivering a comprehensive product that adds real value. Please share your contact info so we can understand your specific needs and give you an accurate proposal.",
            "We don't have fixed prices because we build custom, comprehensive solutions. Let's connect to discuss your requirements—what's the best email or phone number to reach you?"
        ]
    },
    {
        id: 'tech_stack',
        keywords: ['tech', 'stack', 'react', 'flutter', 'node', 'database', 'language', 'framework', 'code'],
        priority: 3,
        responses: [
            "We use the best tools for the job to ensure your product is comprehensive, scalable, and robust. We'd love to discuss the details with you—could you please share your contact information?",
            "Our focus is on the final product quality rather than just the tools. We assume full responsibility for the tech stack to give you the best result. Please leave your contact details to discuss further."
        ]
    },
    {
        id: 'contact',
        keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'call'],
        priority: 4,
        responses: [
            "You can reach us directly via the buttons above, or simply leave your email/phone here and our team will contact you ASAP.",
            "We'd love to hear from you! Please type your email or phone number below, and a specialist will reach out to you."
        ]
    },
    {
        id: 'location',
        keywords: ['address', 'where', 'location', 'located', 'office', 'based'],
        priority: 2,
        responses: [
            "We operate globally with a focus on East Africa. We're ready to build your comprehensive product wherever you are! Please share your contact details to start the conversation."
        ]
    }
];

// Fallback if no keywords match
export const FALLBACK_RESPONSES = [
    "That sounds interesting! We'd love to help you build a comprehensive solution for that. Could you share your email or phone number so we can discuss it properly?",
    "I understand. We specialize in turning ideas like this into complete, polished products. Please leave your contact details so our team can reach out."
];
