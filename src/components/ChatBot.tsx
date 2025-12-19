import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ChevronDown, Minimize2 } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

const KNOWLEDGE_BASE = {
    greetings: ["hello", "hi", "hey", "greetings"],
    about: ["who are you", "what is afraino", "tell me about afraino", "about"],
    services: ["services", "what do you do", "offer", "apps", "mobile", "ai", "machine learning"],
    contact: ["contact", "email", "phone", "reach", "hire"],
    location: ["location", "where", "east africa", "somalia", "kenya"],
    ai: ["ai", "agent", "chatbot", "intelligence", "automation"],
};

const RESPONSES = {
    greetings: "Hello! I'm the Afraino AI agent. How can I help you today?",
    about: "Afraino is a leading Mobile & AI Development Agency in East Africa. We specialize in transforming ideas into digital reality through high-performance apps and AI solutions.",
    services: "We offer Mobile App Development, AI & Machine Learning solutions, UI/UX Design, Branding, and App Store Publishing. Check out our Services section for more details!",
    contact: "You can reach us at afraino2025@gmail.com or call us at +252 619 849 199. We're also available for a consultation through the contact form on this page.",
    location: "We are based in East Africa, serving clients across the region and globally with top-tier digital products.",
    ai: "Yes! We are an AI-first company. We develop custom AI agents, automated workflows, and machine learning models to help businesses scale and innovate.",
    default: "That's interesting! Could you tell me more? You can also ask about our services, location, or how to contact us.",
};

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm Fraino, your AI assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Simulate Bot thinking
        setTimeout(() => {
            const botResponse = getBotResponse(input);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 1000);
    };

    const getBotResponse = (text: string) => {
        const lowerText = text.toLowerCase();

        if (KNOWLEDGE_BASE.greetings.some(word => lowerText.includes(word))) return RESPONSES.greetings;
        if (KNOWLEDGE_BASE.about.some(word => lowerText.includes(word))) return RESPONSES.about;
        if (KNOWLEDGE_BASE.services.some(word => lowerText.includes(word))) return RESPONSES.services;
        if (KNOWLEDGE_BASE.contact.some(word => lowerText.includes(word))) return RESPONSES.contact;
        if (KNOWLEDGE_BASE.location.some(word => lowerText.includes(word))) return RESPONSES.location;
        if (KNOWLEDGE_BASE.ai.some(word => lowerText.includes(word))) return RESPONSES.ai;

        return RESPONSES.default;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col mb-4"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-primary-light p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                                    <Bot className="h-5 w-5 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Fraino AI</h3>
                                    <p className="text-[10px] text-secondary flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                        Online & Ready to Help
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <Minimize2 className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'bot' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
                                            }`}>
                                            {msg.sender === 'bot' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'bot'
                                            ? 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                                            : 'bg-primary text-white shadow-md rounded-tr-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about Afraino..."
                                    className="w-full pl-4 pr-12 py-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-secondary rounded-lg hover:scale-105 transition-transform"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <div className="flex items-center gap-3">
                {isMinimized && isOpen && (
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setIsMinimized(false)}
                        className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-200 text-sm font-semibold flex items-center gap-2 text-primary hover:border-secondary transition-all"
                    >
                        <Bot className="h-4 w-4 text-secondary" />
                        Restore Chat
                    </motion.button>
                )}

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        if (isMinimized) {
                            setIsMinimized(false);
                        } else {
                            setIsOpen(!isOpen);
                        }
                    }}
                    className={`p-4 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen && !isMinimized ? 'bg-white text-primary' : 'bg-primary text-white'
                        }`}
                >
                    {isOpen && !isMinimized ? (
                        <ChevronDown className="h-6 w-6" />
                    ) : (
                        <div className="relative">
                            <MessageSquare className="h-6 w-6" />
                            <motion.div
                                className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-primary"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    )}
                </motion.button>
            </div>
        </div>
    );
}
