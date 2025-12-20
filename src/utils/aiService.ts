export const generateAIResponse = async (userInput: string) => {
    const apiKey = import.meta.env.VITE_LLM_API_KEY;
    if (!apiKey) {
        return "Please configure VITE_LLM_API_KEY in your .env file to enable smart responses.";
    }

    try {
        // Example with OpenAI-compatible API
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
