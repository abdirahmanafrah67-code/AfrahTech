import { BRAIN, BrainIntent, FALLBACK_RESPONSES } from './brain';

interface MatchResult {
    intent: BrainIntent | null;
    score: number;
    response: string;
}

// Simple tokenizer: removes punctuation, lowercases, splits by space
export const tokenize = (text: string): string[] => {
    return text.toLowerCase()
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
        .split(/\s+/)
        .filter(w => w.length > 0);
};

// Calculate how well the input matches an intent
const calculateScore = (tokens: string[], intent: BrainIntent): number => {
    let matches = 0;

    // Check for exact keyword matches
    intent.keywords.forEach(keyword => {
        // Handle multi-word keywords
        if (keyword.includes(' ')) {
            if (tokens.join(' ').includes(keyword)) {
                matches += 2; // Higher weight for phrase matches
            }
        } else {
            if (tokens.includes(keyword)) {
                matches += 1;
            }
        }
    });

    return matches;
};

export const findBestMatch = (userInput: string): MatchResult => {
    const tokens = tokenize(userInput);
    let bestMatch: BrainIntent | null = null;
    let highestScore = 0;

    // specialized handling for contact info
    const hasContactInfo =
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(userInput) || // Email
        /(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}/.test(userInput.replace(/\D/g, '')); // Phone (loose)

    if (hasContactInfo) {
        return {
            intent: null, // Special "handoff" state
            score: 100,
            response: "Thank you! I've received your contact information. A specialist from our team will reach out to you shortly to discuss your comprehensive product."
        };
    }

    // Standard Intent Matching
    BRAIN.forEach(intent => {
        const score = calculateScore(tokens, intent);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = intent;
        } else if (score === highestScore && score > 0 && bestMatch) {
            // Tie-breaker: Priority
            if (intent.priority > bestMatch.priority) {
                bestMatch = intent;
            }
        }
    });

    // Threshold for a "good" match
    if (highestScore > 0 && bestMatch) {
        const intent = bestMatch as BrainIntent; // Type assertion since we checked it's not null
        const randomResponse = intent.responses[Math.floor(Math.random() * intent.responses.length)];
        return {
            intent: bestMatch,
            score: highestScore,
            response: randomResponse
        };
    }

    // Fallback
    return {
        intent: null,
        score: 0,
        response: FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
    };
};
