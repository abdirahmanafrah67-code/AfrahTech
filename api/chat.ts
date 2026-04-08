import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || process.env.VITE_LLM_API_KEY || '').trim();
const MODEL = process.env.VITE_OPENROUTER_MODEL || 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `You are Afraino AI, the smart assistant for Afraino — the #1 Mobile & AI Development Agency in East Africa.

Your job: Answer customer questions simply, clearly, and concisely. Keep responses extremely short (1-3 sentences max). Be friendly and direct. DO NOT write long paragraphs.

About Afraino:
- We build high-performance Mobile Apps (React Native/Expo), Websites (Next.js/React), and AI Agents/Models.
- We also do UI/UX Design, Branding & Identity, App Store Publishing, and Maintenance & Support.
- Based in East Africa. 5+ apps published. 4.9/5 client rating. 100% success rate.
- Contact: afraino2025@gmail.com | WhatsApp: +252619849199

Rules:
- Give very simple, quick, and conversational answers.
- If someone asks about pricing or packages, say: "We offer custom packages based on your project. Please contact us on WhatsApp or Email for details."
- If someone wants to get started, direct them to WhatsApp or email.
- Never make up information. Stick to the services mentioned above.
- Respond in the same language the user writes in.`;

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
