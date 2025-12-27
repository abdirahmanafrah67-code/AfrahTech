import { findBestMatch } from './nlpEngine';
console.log("🧠 Local Brain Loaded: v2.0");

// Simplified Context mostly for UI compatibility
export interface ConversationContext {
    stage: 'active' | 'handoff'; // Simplified stages
    messageHistory: string[];
}

export const generateContextualResponse = async (
    userInput: string,
    context: ConversationContext
): Promise<{ response: string; newContext: ConversationContext }> => {

    // Simulate a small "thinking" delay to feel more natural
    await new Promise(resolve => setTimeout(resolve, 600));

    const match = findBestMatch(userInput);

    // Check if the engine detected a 'handoff' scenario (contact info provided)
    // In nlpEngine we return a specific response for contact, but we can check the response text or intent 
    // Ideally nlpEngine should return a flag, but for now we look at the response text or if intent is null but score is high

    // Simple state update logic
    let newStage: ConversationContext['stage'] = 'active';

    // If the response indicates we received contact info (score 100 on contact check), we can consider it a handoff
    // The nlpEngine returns score: 100 for contact info
    if (match.score === 100 && match.intent === null) {
        newStage = 'handoff';
    }

    return {
        response: match.response,
        newContext: {
            stage: newStage,
            messageHistory: [...context.messageHistory, userInput, match.response]
        }
    };
};

// Keep the Speak function but make it browser-native for "zero cost" smartness
export const speakWithElevenLabs = async (text: string) => {
    // Fallback to browser speach for fully local experience
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        // Try to find a nice voice
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.name.includes('Google') || v.name.includes('Female')) || voices[0];
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        // Return a mock Audio-like object to satisfy the UI interface
        window.speechSynthesis.speak(utterance);

        return {
            play: () => window.speechSynthesis.resume(),
            pause: () => window.speechSynthesis.pause(),
            // Custom cleanup if needed
        } as any;
    }
    return null;
};
