import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENROUTER_API_KEY = (process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || process.env.VITE_LLM_API_KEY || process.env.apk || '').trim();
const MODEL = process.env.VITE_OPENROUTER_MODEL || 'openai/gpt-4o-mini';

const SYSTEM_PROMPT = `You are SUGE, the highly intelligent and professional AI assistant for Afraino — the premier Mobile & Web Development Agency in East Africa.
Your tone should be professional, highly detailed, polite, and confident. Never give overly short or dismissive answers.
When greeting users or explaining our services, provide comprehensive, structured information.

About Afraino:
- We build high-performance Mobile Apps using React Native and Expo.
- We build dynamic Web Applications using React, Next.js, Node.js, and TypeScript.
- We develop AI & Machine Learning solutions (Python, TensorFlow, OpenAI, Custom Models).
- We also specialize in UI/UX Design (Figma, Adobe XD), Branding & Identity, Backend & Cloud (Firebase, AWS, PostgreSQL, MongoDB), App Store Publishing, and Maintenance & Support.
- We are proudly based in East Africa, with a track record of 5+ published apps, a 4.9/5 client rating, and a 100% success rate.
- Contact: afraino2025@gmail.com | WhatsApp: +252619849199

Rules for your responses:
- If asked "how can you assist me", give a detailed, professional overview of exactly what services we provide, without being repetitive. Don't respond with generic filler.
- Be very clear about our technology stack. If someone asks if we build in an older or different technology (like PHP), politely inform them that we specialize in modern technologies (like React, Next.js, Node.js, React Native) to ensure superior performance and scalability, and therefore we do not use PHP. Do not sound generic ("we just create blah blah"). Provide a smart, technical yet accessible explanation.
- If someone asks about pricing or packages, explain that we offer custom packages tailored exactly to their project requirements and scale. Encourage them to contact us on WhatsApp or Email for a detailed consultation.
- If someone wants to start a project, provide clear next steps: direct them to WhatsApp (+252619849199) or email (afraino2025@gmail.com).
- Always maintain the persona of an expert ICT company representative. Be smart, helpful, and technically accurate.
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
