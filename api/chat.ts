import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || process.env.VITE_LLM_API_KEY || process.env.apk || '').trim();
const MODEL = process.env.VITE_OPENROUTER_MODEL || 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `You are Afraino AI, the official AI assistant of Afraino.

ROLE:
- You are Afraino AI, the proactive and friendly digital assistant for Afraino.
- Your goal is to be a bridge between the customer and our expert team.
- Speak in a warm, professional, and helpful tone—act like a real person greeting a client.
- Keep responses short: 1–3 sentences maximum.

CONVERSATIONAL RULES:
1. NEVER just list services. Always follow up with an engaging question (e.g., "Would you like to see how we can help with your specific app idea?" or "Which of these services are you looking to explore today?").
2. Use enthusiastic, natural language when a user shows interest (e.g., "That sounds like a great project! We can definitely help you with that.").
3. Always keep the conversation "open" until the user is ready to move to WhatsApp.
4. You MUST rely primarily on the provided CONTEXT FROM AFRINO KNOWLEDGE BASE below.

STRICT BEHAVIOR RULES:
1. If the answer is not found in the context, be helpful: "I'm not sure about those specific details yet, but our team can definitely clarify that for you! Would you like to message us on WhatsApp +252619849199?"
2. Never invent services, prices, or claims.
3. If the user shows buying intent or shares a project idea, be encouraging and immediately prioritize the WhatsApp handoff.

HANDOFF LOGIC:
- When a user picks a service or shares an idea → Say: "That's fantastic! To give you the best advice and a custom plan, let's move this to WhatsApp so our experts can chat with you directly."
- Provide this link: [https://wa.me/252619849199](https://wa.me/252619849199) or the number +252619849199.

[CONTEXT FROM AFRINO KNOWLEDGE BASE]
- ABOUT: #1 Mobile & AI Development Agency in East Africa. Based in Mogadishu & Nairobi. Silicon Valley standards. 5+ apps, 4.9/5 rating, 100% success.
- SERVICES: Custom Mobile Apps (iOS & Android), High-end Websites & Digital Platforms, AI Automation & Intelligent Agents, Professional App Store Management, UI/UX Design, Branding, Maintenance & Support.
- PROJECTS: Nasasho Booking (Hotels), Guri App (Real Estate), Gaar App (Car Rental), MeherBooks (Accounting).
- PROCESS: Discovery (Strategy), Design (User-centric), Development (High-end engineering), Delivery (Optimization).
- PRICING: Custom packages based on project scope. Free consultation available.
- CONTACT: WhatsApp: +252619849199 | Email: afraino2025@gmail.com`;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { userInput, context } = request.body;

  if (!userInput) {
    return response.status(400).json({ error: 'Missing userInput' });
  }

  if (!OPENROUTER_API_KEY) {
    console.error('Missing OPENROUTER_API_KEY environment variable');
    return response.status(500).json({ error: 'AI Service is not configured. Please add OPENROUTER_API_KEY to your environment variables.' });
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...context.messageHistory,
    { role: 'user', content: userInput }
  ];

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://afraino.com',
        'X-Title': 'Afraino AI Chatbot',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!res.ok) {
        const errorData = await res.json();
        console.error('OpenRouter Error:', errorData);
        throw new Error(`OpenRouter error: ${res.status}`);
    }

    const data = await res.json();
    const botReply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't get a response. Please try again or contact us directly.";

    return response.status(200).json({
      response: botReply,
      newContext: {
        stage: 'active',
        messageHistory: [
          ...context.messageHistory,
          { role: 'user', content: userInput },
          { role: 'assistant', content: botReply }
        ]
      }
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return response.status(500).json({ 
        error: `AI Error: ${error.message || "Unknown error"}`,
        details: error.toString()
    });
  }
}
