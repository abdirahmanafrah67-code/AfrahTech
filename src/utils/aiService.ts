
export interface ConversationContext {
    stage: 'active' | 'handoff';
    messageHistory: { role: 'user' | 'assistant'; content: string }[];
}

export const generateContextualResponse = async (
    userInput: string,
    context: ConversationContext
): Promise<{ response: string; newContext: ConversationContext }> => {

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userInput,
                context
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || `Server error: ${res.status}`);
        }

        const data = await res.json();
        return {
            response: data.response,
            newContext: data.newContext
        };

    } catch (err: any) {
        console.error('Afraino AI error:', err);
        return {
            response: err.message || "I'm having trouble connecting right now. Please reach us at afraino2025@gmail.com or WhatsApp +252619849199. 🙏",
            newContext: {
                stage: 'active',
                messageHistory: [
                    ...context.messageHistory,
                    { role: 'user', content: userInput }
                ]
            }
        };
    }
};
