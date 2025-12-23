// Conversation stages for tracking user journey
export type ConversationStage =
    | 'greeting'
    | 'service_discovery'
    | 'service_details'
    | 'contact_collection'
    | 'handoff';

export interface ConversationContext {
    stage: ConversationStage;
    selectedService?: string;
    contactInfo?: {
        email?: string;
        phone?: string;
        name?: string;
    };
    messageHistory: string[];
}

// Service catalog with detailed information
const SERVICES = {
    'mobile_app': {
        name: 'Mobile App Development',
        keywords: ['app', 'mobile', 'ios', 'android', 'flutter', 'react native', 'application'],
        description: 'We build premium cross-platform mobile apps with cutting-edge features including AI integration, payment gateways (MPESA, Stripe, PayPal), real-time analytics, offline functionality, and push notifications.',
        pricing: 'Starting at $2,500',
        technologies: 'Flutter, React Native, Firebase, Supabase',
        timeline: '4-12 weeks depending on complexity'
    },
    'web_development': {
        name: 'Web Development',
        keywords: ['website', 'web', 'site', 'landing', 'seo', 'develop', 'next', 'react'],
        description: 'We create SEO-optimized, ultra-fast websites using Next.js and React. Our builds include custom animations, CMS integration, lead capture forms, and responsive design that works perfectly on all devices.',
        pricing: 'Starting at $800',
        technologies: 'Next.js, React, TypeScript, TailwindCSS',
        timeline: '2-6 weeks depending on complexity'
    },
    'ai_ml': {
        name: 'AI Models & Agents',
        keywords: ['ai', 'agent', 'chatbot', 'intelligence', 'automatic', 'automation', 'machine learning', 'ml', 'gpt', 'llama'],
        description: 'We build custom AI agents powered by GPT-4, Claude, or Llama-3 to automate customer service, business workflows, and decision-making. Our solutions reduce operational costs by up to 40% while improving response times.',
        pricing: 'Starting at $1,500',
        technologies: 'OpenAI GPT-4, Anthropic Claude, Llama-3, LangChain',
        timeline: '3-8 weeks depending on complexity'
    },
    'ui_ux': {
        name: 'UI/UX Design',
        keywords: ['ui', 'ux', 'design', 'interface', 'user experience', 'figma', 'prototype'],
        description: 'We design user-centric interfaces focused on intuitive navigation and exceptional user experiences. Our designs are modern, accessible, and optimized for conversion.',
        pricing: 'Starting at $600',
        technologies: 'Figma, Adobe XD, Sketch, Prototyping Tools',
        timeline: '1-4 weeks depending on scope'
    },
    'branding': {
        name: 'Branding & Identity',
        keywords: ['brand', 'branding', 'identity', 'logo', 'visual', 'corporate'],
        description: 'We craft unique brand identities that resonate with your target audience and stand out in the market. This includes logo design, color schemes, typography, and brand guidelines.',
        pricing: 'Starting at $500',
        technologies: 'Adobe Illustrator, Photoshop, Brand Strategy',
        timeline: '2-4 weeks'
    },
    'ecommerce': {
        name: 'E-Commerce Solutions',
        keywords: ['shop', 'store', 'business', 'e-commerce', 'ecommerce', 'sell', 'retail', 'online store'],
        description: 'Our E-commerce solutions include AI-powered inventory tracking, MPESA/Global payment integration, automated customer marketing, and analytics. Proven to boost sales by up to 30%.',
        pricing: 'Starting at $1,200',
        technologies: 'Shopify, WooCommerce, Custom Solutions',
        timeline: '4-8 weeks'
    }
};

// Detect which service the user is interested in
export const detectServiceIntent = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    let bestMatch: string | null = null;
    let maxMatches = 0;

    for (const [key, service] of Object.entries(SERVICES)) {
        const matches = service.keywords.filter(kw => lowerText.includes(kw)).length;
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = key;
        }
    }

    return maxMatches > 0 ? bestMatch : null;
};

// Extract contact information from user message
export const extractContactInfo = (text: string): { email?: string; phone?: string } => {
    const contactInfo: { email?: string; phone?: string } = {};

    // Email regex
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const emailMatch = text.match(emailRegex);
    if (emailMatch) {
        contactInfo.email = emailMatch[0];
    }

    // Phone regex (supports various formats)
    const phoneRegex = /(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}/;
    const phoneMatch = text.match(phoneRegex);
    if (phoneMatch && phoneMatch[0].replace(/\D/g, '').length >= 9) {
        contactInfo.phone = phoneMatch[0];
    }

    return contactInfo;
};

// Generate contextual response based on conversation stage
export const generateContextualResponse = async (
    userInput: string,
    context: ConversationContext
): Promise<{ response: string; newContext: ConversationContext }> => {
    const apiKey = import.meta.env.VITE_LLM_API_KEY;

    // Extract contact info from current message
    const extractedContact = extractContactInfo(userInput);
    if (extractedContact.email || extractedContact.phone) {
        context.contactInfo = { ...context.contactInfo, ...extractedContact };
    }

    // Detect service intent
    const serviceIntent = detectServiceIntent(userInput);
    if (serviceIntent && !context.selectedService) {
        context.selectedService = serviceIntent;
    }

    // Determine next stage based on context
    let newStage = context.stage;
    let systemPrompt = '';

    switch (context.stage) {
        case 'greeting':
            newStage = 'service_discovery';
            systemPrompt = `You are a professional consultant for Afraino, a digital agency. You just greeted the client. Now ask them what service they're interested in. Be warm, professional, and human-like. Mention that Afraino offers: Mobile Apps, Web Development, AI Automation, UI/UX Design, Branding, and E-commerce solutions. Keep it conversational and friendly.`;
            break;

        case 'service_discovery':
            if (context.selectedService) {
                newStage = 'service_details';
                const service = SERVICES[context.selectedService as keyof typeof SERVICES];
                systemPrompt = `You are a professional consultant for Afraino. The client is interested in ${service.name}. Provide these details naturally in a conversational way:
                
Service: ${service.name}
Description: ${service.description}
Pricing: ${service.pricing}
Technologies: ${service.technologies}
Timeline: ${service.timeline}

After sharing this, ask if they'd like to discuss their specific project needs or if they have any questions. Be enthusiastic and helpful.`;
            } else {
                systemPrompt = `You are a professional consultant for Afraino. The client hasn't clearly indicated which service they need. Gently ask clarifying questions to understand their needs. Services available: Mobile Apps ($2,500+), Web Development ($800+), AI Automation ($1,500+), UI/UX Design ($600+), Branding ($500+), E-commerce ($1,200+). Be helpful and patient.`;
            }
            break;

        case 'service_details':
            if (context.contactInfo?.email || context.contactInfo?.phone) {
                newStage = 'handoff';
                systemPrompt = `You are a professional consultant for Afraino. You've received the client's contact information. Thank them warmly and assure them that:
1. Our best team will be assigned to their project
2. We'll transform their vision into reality
3. They'll receive a response within 2 hours during business hours
4. We're excited to work with them

Be genuine, professional, and enthusiastic. Make them feel valued.`;
            } else {
                newStage = 'contact_collection';
                systemPrompt = `You are a professional consultant for Afraino. You've discussed the service details. Now naturally ask for their contact information (email or phone number) so the team can reach out with a detailed proposal. Be polite and explain that this helps us provide a personalized quote and timeline. Don't be pushy.`;
            }
            break;

        case 'contact_collection':
            if (context.contactInfo?.email || context.contactInfo?.phone) {
                newStage = 'handoff';
                systemPrompt = `You are a professional consultant for Afraino. You've received the client's contact information. Thank them warmly and assure them that our best team will be assigned to transform their vision into reality. Mention they'll hear from us within 2 hours during business hours. Be enthusiastic and professional.`;
            } else {
                systemPrompt = `You are a professional consultant for Afraino. Gently remind the client that you need their email or phone number to connect them with the team. Explain that this ensures they get a personalized proposal. Be friendly and understanding.`;
            }
            break;

        case 'handoff':
            systemPrompt = `You are a professional consultant for Afraino. The handoff is complete. If the client has additional questions, answer them helpfully. Otherwise, reinforce that the team will be in touch soon and thank them for choosing Afraino. Be warm and professional.`;
            break;
    }

    // Add conversation history context
    const conversationHistory = context.messageHistory.slice(-4).join('\n');
    systemPrompt += `\n\nRecent conversation:\n${conversationHistory}\n\nIMPORTANT: Sound like a real person, not a bot. Be conversational, warm, and professional. Use natural language. Don't be overly formal.`;

    try {
        if (!apiKey) {
            // Fallback to local responses if no API key
            return {
                response: getLocalFallbackResponse(context),
                newContext: { ...context, stage: newStage, messageHistory: [...context.messageHistory, userInput] }
            };
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: userInput }
                ],
                temperature: 0.8,
                max_tokens: 250
            })
        });

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        return {
            response: aiResponse,
            newContext: {
                ...context,
                stage: newStage,
                messageHistory: [...context.messageHistory, userInput, aiResponse]
            }
        };
    } catch (error) {
        console.error("AI Response Error:", error);
        return {
            response: getLocalFallbackResponse(context),
            newContext: { ...context, stage: newStage, messageHistory: [...context.messageHistory, userInput] }
        };
    }
};

// Fallback responses when API is unavailable
const getLocalFallbackResponse = (context: ConversationContext): string => {
    const { stage, selectedService, contactInfo } = context;

    switch (stage) {
        case 'greeting':
            return "Thanks for reaching out! I'd love to help you with your project. What are you looking to build? We specialize in Mobile Apps, Web Development, AI Automation, UI/UX Design, Branding, and E-commerce solutions.";

        case 'service_discovery':
            if (selectedService) {
                const service = SERVICES[selectedService as keyof typeof SERVICES];
                return `Great choice! ${service.description}\n\n💰 ${service.pricing}\n⚡ ${service.technologies}\n📅 ${service.timeline}\n\nWould you like to discuss your specific project needs?`;
            }
            return "I'd love to help! Could you tell me a bit more about what you're looking for? Are you interested in a mobile app, website, AI solution, or something else?";

        case 'service_details':
            return "Awesome! To get you connected with our best team and provide a detailed proposal, could you share your email or phone number?";

        case 'contact_collection':
            if (contactInfo?.email || contactInfo?.phone) {
                return `Perfect! Thank you ${contactInfo.email || contactInfo.phone}! 🎉\n\nOur best team will be assigned to your project, and we'll transform your vision into reality. Expect a response within 2 hours during business hours. We're excited to work with you!`;
            }
            return "To connect you with our team, I'll need your email or phone number. This helps us provide you with a personalized quote and timeline!";

        case 'handoff':
            return "Thank you for choosing Afraino! Our team will be in touch very soon. If you have any other questions in the meantime, feel free to ask!";

        default:
            return "I'm here to help! What would you like to know about Afraino's services?";
    }
};

// Legacy function for backward compatibility
export const generateAIResponse = async (userInput: string) => {
    const apiKey = import.meta.env.VITE_LLM_API_KEY;
    if (!apiKey) {
        return "Please configure VITE_LLM_API_KEY in your .env file to enable smart responses.";
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "You are the Afraino AI Agent, a professional digital agency specializing in App Development, AI Automation, and Web Design. You are helpful, professional, and focus on ROI. You provide specific pricing: Websites from $800, Apps from $2500, AI from $1500."
                    },
                    { role: "user", content: userInput }
                ]
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error("AI Response Error:", error);
        return "I'm having trouble connecting to my brain. Please try again or contact us directly!";
    }
};

export const speakWithElevenLabs = async (text: string) => {
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
    const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID || 'pNInz6obpgnuMvscWqt5'; // Default professional voice

    if (!apiKey) {
        console.warn("ElevenLabs API Key missing. Speech disabled.");
        return null;
    }

    try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': apiKey
            },
            body: JSON.stringify({
                text: text,
                model_id: "eleven_monolingual_v1",
                voice_settings: {
                    stability: 0.5,
                    similarity_boost: 0.5
                }
            })
        });

        if (!response.ok) throw new Error("ElevenLabs API error");

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        return audio;
    } catch (error) {
        console.error("ElevenLabs Error:", error);
        return null;
    }
};
