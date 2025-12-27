
export interface BrainIntent {
    id: string;
    keywords: string[];
    responses: string[];
    priority: number; // Higher number = checks first
}

// Fallback if no keywords match
export const FALLBACK_RESPONSES = [
    "That sounds interesting! We'd love to help you build a comprehensive solution. Please contact us directly at +252619849199 or drop your email here.",
    "We specialize in turning ideas like this into complete, polished products. Reach out to us at +252619849199 to get started."
];

export const BRAIN: BrainIntent[] = [
    {
        id: 'greeting',
        keywords: ['hello', 'hi', 'hey', 'start', 'morning', 'afternoon', 'evening'],
        priority: 1,
        responses: [
            "Hello! I'm here to help you build a comprehensive digital product. You can contact us at +252619849199 to discuss your vision.",
            "Hi there! Ready to transform your ideas into reality? Contact our team directly at +252619849199."
        ]
    },
    {
        id: 'capabilities',
        keywords: ['can you', 'do you', 'make', 'build', 'create', 'develop', 'app', 'website', 'system', 'software', 'platform'],
        priority: 10,
        responses: [
            "Yes, we can build that! We focus on creating comprehensive, high-quality products. Contact us at +252619849199 to start your project.",
            "Absolutely. We specialize in building complete digital products. You can reach our team directly at +252619849199."
        ]
    },
    {
        id: 'pricing',
        keywords: ['price', 'cost', 'much', 'money', 'budget', 'quote', 'expensive', 'cheap'],
        priority: 3,
        responses: [
            "Every project is unique! We focus on delivering a comprehensive product that adds real value. Contact us at +252619849199 for a quote tailored to you.",
            "We don't have fixed prices because we build custom, comprehensive solutions. Please reach out to us at +252619849199 to discuss your requirements."
        ]
    },
    {
        id: 'tech_stack',
        keywords: ['tech', 'stack', 'react', 'flutter', 'node', 'database', 'language', 'framework', 'code'],
        priority: 3,
        responses: [
            "We use the best tools for the job to ensure your product is comprehensive, scalable, and robust. Contact us at +252619849199 to discuss the technical details.",
            "Our focus is on the final product quality. We assume full responsibility for the tech stack to give you the best result. Reach us at +252619849199."
        ]
    },
    {
        id: 'contact',
        keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'call'],
        priority: 4,
        responses: [
            "You can reach us directly via the buttons above, or call us at +252619849199.",
            "We'd love to hear from you! Contact us at +252619849199 or leave your details below."
        ]
    },
    {
        id: 'location',
        keywords: ['address', 'where', 'location', 'located', 'office', 'based'],
        priority: 2,
        responses: [
            "We operate globally with a focus on East Africa. We're ready to build your comprehensive product wherever you are! Contact us at +252619849199."
        ]
    }
];
