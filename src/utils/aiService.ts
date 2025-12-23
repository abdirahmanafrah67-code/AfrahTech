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

// Service catalog - focused on capabilities, not pricing
const SERVICES = {
    'mobile_app': {
        name: 'Mobile App Development',
        keywords: ['app', 'mobile', 'ios', 'android', 'flutter', 'react native', 'application'],
        description: 'We build premium cross-platform mobile apps for iOS and Android with AI integration, payment systems, real-time features, and push notifications. Perfect for startups and established businesses looking to reach mobile users.'
    },
    'web_development': {
        name: 'Web Development',
        keywords: ['website', 'web', 'site', 'landing', 'seo', 'develop', 'next', 'react'],
        description: 'We create fast, SEO-optimized websites with modern designs. From landing pages to full web applications, we build solutions that convert visitors into customers.'
    },
    'ai_ml': {
        name: 'AI & Automation',
        keywords: ['ai', 'agent', 'chatbot', 'intelligence', 'automatic', 'automation', 'machine learning', 'ml', 'gpt', 'llama'],
        description: 'We build custom AI solutions to automate your customer service, business processes, and workflows. Our AI agents work 24/7 to save you time and reduce costs.'
    },
    'ui_ux': {
        name: 'UI/UX Design',
        keywords: ['ui', 'ux', 'design', 'interface', 'user experience', 'figma', 'prototype'],
        description: 'We design beautiful, user-friendly interfaces that your customers will love. Our designs focus on creating smooth experiences that drive engagement and conversions.'
    },
    'branding': {
        name: 'Branding & Identity',
        keywords: ['brand', 'branding', 'identity', 'logo', 'visual', 'corporate'],
        description: 'We create unique brand identities that make you stand out. From logos to complete visual systems, we help you build a brand that resonates with your audience.'
    },
    'ecommerce': {
        name: 'E-Commerce Solutions',
        keywords: ['shop', 'store', 'business', 'e-commerce', 'ecommerce', 'sell', 'retail', 'online store'],
        description: 'We build complete online stores with payment integration, inventory management, and marketing automation. Get your products online and start selling globally.'
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
                newStage = 'contact_collection';
                const service = SERVICES[context.selectedService as keyof typeof SERVICES];
                systemPrompt = `You are a professional consultant for Afraino. The client is interested in ${service.name}. 
                
Share this brief description: "${service.description}"

Then IMMEDIATELY ask for their contact information (email or phone number) so our team can provide a detailed proposal and discuss their specific project. Be warm and enthusiastic. Don't mention pricing, timelines, or technical details - just focus on getting them connected with the team.`;
            } else {
                systemPrompt = `You are a professional consultant for Afraino. The client hasn't clearly indicated which service they need. Gently ask what they're looking to build. Services available: Mobile Apps, Web Development, AI Automation, UI/UX Design, Branding, E-commerce. Be helpful and patient. Don't mention pricing.`;
            }
            break;

        case 'service_details':
            // Skip service details stage, go straight to contact collection
            newStage = 'contact_collection';
            systemPrompt = `You are a professional consultant for Afraino. Ask for the client's contact information (email or phone number) so our team can provide a detailed proposal. Be polite and professional. Explain that this helps us give them a personalized solution.`;
            break;

        case 'contact_collection':
            if (context.contactInfo?.email || context.contactInfo?.phone) {
                newStage = 'handoff';
                systemPrompt = `You are a professional consultant for Afraino. You've received the client's contact information. Thank them warmly and confirm that our best team will reach out within 2 hours during business hours to discuss their project and provide a detailed proposal. Be enthusiastic and make them feel valued.`;
            } else {
                systemPrompt = `You are a professional consultant for Afraino. Politely ask for the client's email or phone number so we can connect them with our team for a detailed discussion. Explain that this ensures they get a personalized proposal. Be friendly.`;
            }
            break;

        case 'handoff':
            systemPrompt = `You are a professional consultant for Afraino. The handoff is complete. If the client has questions, answer them helpfully but remind them the team will provide detailed information within 2 hours. Thank them for choosing Afraino.`;
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
                return `Great choice! ${service.description}\n\nTo get you connected with our best team, could you share your email or phone number? They'll provide a detailed proposal tailored to your project!`;
            }
            return "I'd love to help! Could you tell me a bit more about what you're looking for? Are you interested in a mobile app, website, AI solution, or something else?";

        case 'service_details':
            return "Perfect! To get you connected with our best team and provide a detailed proposal, could you share your email or phone number?";

        case 'contact_collection':
            if (contactInfo?.email || contactInfo?.phone) {
                return `Perfect! Thank you ${contactInfo.email || contactInfo.phone}! 🎉\n\nOur best team will reach out within 2 hours during business hours to discuss your project and provide a detailed proposal. We're excited to work with you!`;
            }
            return "To connect you with our team, I'll need your email or phone number. This helps us provide you with a personalized proposal!";

        case 'handoff':
            return "Thank you for choosing Afraino! Our team will be in touch very soon with a detailed proposal. If you have any other questions in the meantime, feel free to ask!";

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
