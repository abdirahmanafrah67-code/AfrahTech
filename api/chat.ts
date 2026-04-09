import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || process.env.VITE_LLM_API_KEY || process.env.apk || '').trim();
const MODEL = process.env.VITE_OPENROUTER_MODEL || 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `You are SUGE, the professional AI assistant for Afraino — a Mobile & Web Development Agency in East Africa.

About Afraino:
- Mobile Apps: React Native, Expo
- Web Apps: React, Next.js, Node.js, TypeScript
- AI & ML: Python, TensorFlow, OpenAI, Custom Models
- Also: UI/UX Design, Branding, Backend (Firebase, AWS, MongoDB), App Store Publishing, Maintenance
- Based in East Africa. 5+ published apps. 4.9/5 rating. 100% success rate.
- Contact: afraino2025@gmail.com | WhatsApp: +252619849199

Rules:
- Keep every reply SHORT — max 2-3 sentences. Be direct and friendly. NO long paragraphs.
- Never repeat yourself or use filler phrases like "How can I assist you today?".
- If asked about a technology we don't use (e.g. PHP, WordPress), clearly say we use modern stacks (React, Next.js, React Native) and briefly state why it's better.
- For pricing, say we do custom packages and ask them to reach us on WhatsApp or email.
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
