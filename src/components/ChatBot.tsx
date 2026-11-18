import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUp, Minus, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { generateContextualResponse, ConversationContext } from '../utils/aiService';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    timestamp: Date;
}

export default function ChatBot() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [input, setInput] = useState('');
    const [conversationContext, setConversationContext] = useState<ConversationContext>({
        stage: 'active',
        messageHistory: []
    });

    // Initial message needs to be translated on mount or language change
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: '1',
                text: t('chatbot.welcome'),
                sender: 'bot',
                timestamp: new Date(),
            }]);
        }
    }, [t, messages.length]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsTyping(true);

        try {
            const { response: botResponse, newContext } = await generateContextualResponse(
                currentInput,
                conversationContext
            );

            setConversationContext(newContext);

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);

        } catch (error: any) {
            console.error("Error handling message:", error);

            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm having trouble connecting right now. Please reach us at afraino2025@gmail.com or WhatsApp +252619849199. 🙏",
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, errorMessage]);
            setIsTyping(false);
        }
    };

    const getStageIndicator = () => {
        switch (conversationContext.stage) {
            case 'active':
                return t('chatbot.status_active');
            case 'handoff':
                return t('chatbot.status_handoff');
            default:
                return t('chatbot.status_online');
        }
    };

    const showPanel = isOpen && !isMinimized;

    return (
        <div className={`fixed bottom-5 ${isRtl ? 'left-5' : 'right-5'} z-50 flex flex-col ${isRtl ? 'items-start' : 'items-end'}`}>
            <AnimatePresence>
                {showPanel && (
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ transformOrigin: isRtl ? 'bottom left' : 'bottom right' }}
                        className="bg-white w-[calc(100vw-2.5rem)] max-w-[380px] h-[min(560px,calc(100vh-8rem))] rounded-[24px] shadow-[0_12px_48px_rgba(0,0,0,0.16)] ring-1 ring-black/[0.06] overflow-hidden flex flex-col mb-3"
                        dir={isRtl ? 'rtl' : 'ltr'}
                    >
                        {/* Header — frosted, minimal */}
                        <div className="px-5 pt-4 pb-3 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img src="/afraino-icon.jpg" alt="SUGE" className="w-9 h-9 rounded-full object-cover" />
                                        <span className={`absolute bottom-0 ${isRtl ? 'left-0' : 'right-0'} w-2.5 h-2.5 bg-[#34c759] ring-2 ring-white rounded-full`} />
                                    </div>
                                    <div className="leading-tight">
                                        <h3 className="text-[15px] font-semibold text-[#0A2E28]">SUGE</h3>
                                        <p className="text-[12px] text-[#0A2E28]/50">{getStageIndicator()}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setIsMinimized(true)}
                                        aria-label="Minimize chat"
                                        className="w-7 h-7 rounded-full bg-black/[0.05] hover:bg-black/[0.09] flex items-center justify-center text-[#0A2E28]/60 transition-colors"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        aria-label="Close chat"
                                        className="w-7 h-7 rounded-full bg-black/[0.05] hover:bg-black/[0.09] flex items-center justify-center text-[#0A2E28]/60 transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Quick contact links */}
                            <div className="mt-3 flex gap-2">
                                <a
                                    href="mailto:afraino2025@gmail.com"
                                    className="flex items-center gap-1.5 text-[12px] font-medium text-[#0A2E28]/80 bg-black/[0.04] hover:bg-black/[0.07] px-3 py-1.5 rounded-full transition-colors"
                                >
                                    <Mail className="h-3.5 w-3.5 text-[#1a7a1a]" />
                                    {t('chatbot.email_us')}
                                </a>
                                <a
                                    href="https://wa.me/252619849199"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[12px] font-medium text-[#0A2E28]/80 bg-black/[0.04] hover:bg-black/[0.07] px-3 py-1.5 rounded-full transition-colors"
                                >
                                    <MessageCircle className="h-3.5 w-3.5 text-[#1a7a1a]" />
                                    {t('chatbot.whatsapp')}
                                </a>
                            </div>
                        </div>

                        {/* Messages — iMessage-style bubbles */}
                        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2.5">
                            {messages.map((msg) => {
                                const mine = msg.sender === 'user';
                                return (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex flex-col ${mine ? 'items-end' : 'items-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] px-4 py-2.5 text-[15px] leading-[1.4] whitespace-pre-wrap break-words rounded-[20px] ${
                                                mine
                                                    ? 'bg-[#1a7a1a] text-white'
                                                    : 'bg-[#f0f1f2] text-[#0A2E28]'
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <span className="mt-1 px-2 text-[11px] text-[#0A2E28]/40">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </motion.div>
                                );
                            })}

                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-[#f0f1f2] px-4 py-3.5 rounded-[20px] flex gap-1">
                                        {[0, 0.15, 0.3].map((d) => (
                                            <motion.span
                                                key={d}
                                                animate={{ opacity: [0.3, 1, 0.3] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: d }}
                                                className="w-2 h-2 bg-[#0A2E28]/50 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input — pill field with round send button */}
                        <div className="px-3 pb-3 pt-2 border-t border-black/[0.06]">
                            <div className="flex items-center gap-2 rounded-full ring-1 ring-black/[0.1] focus-within:ring-[#1a7a1a]/50 bg-white ps-4 pe-1 py-1 transition-shadow">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t('chatbot.input_placeholder')}
                                    className="flex-1 min-w-0 bg-transparent outline-none text-[15px] text-[#0A2E28] placeholder:text-[#0A2E28]/40 py-1.5"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    aria-label="Send message"
                                    className="w-8 h-8 flex-shrink-0 rounded-full bg-[#1a7a1a] text-white flex items-center justify-center transition-opacity disabled:opacity-30"
                                >
                                    <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher */}
            <div className={`flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <AnimatePresence>
                    {isMinimized && isOpen && (
                        <motion.button
                            initial={{ opacity: 0, x: isRtl ? -12 : 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isRtl ? -12 : 12 }}
                            onClick={() => setIsMinimized(false)}
                            className="bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.06] text-[13px] font-medium text-[#0A2E28] hover:bg-white transition-colors"
                        >
                            {t('chatbot.restore')}
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* WhatsApp quick contact */}
                <AnimatePresence>
                    {!showPanel && (
                        <motion.a
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/252619849199?text=Hello%20Afraino%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with Afraino on WhatsApp"
                            title="Chat on WhatsApp"
                            className="w-12 h-12 rounded-full bg-[#25D366] shadow-[0_6px_24px_rgba(0,0,0,0.18)] flex items-center justify-center"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
                            </svg>
                        </motion.a>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                        if (isMinimized) {
                            setIsMinimized(false);
                        } else {
                            setIsOpen(!isOpen);
                        }
                    }}
                    aria-label={showPanel ? 'Close chat' : 'Open chat'}
                    className="relative w-14 h-14 rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.18)] flex items-center justify-center bg-white ring-1 ring-black/[0.06]"
                >
                    {showPanel ? (
                        <X className="h-6 w-6 text-[#0A2E28]/70" />
                    ) : (
                        <>
                            <img src="/afraino-icon.jpg" alt="SUGE" className="w-14 h-14 rounded-full object-cover" />
                            <span className={`absolute top-0.5 ${isRtl ? 'left-0.5' : 'right-0.5'} w-3 h-3 bg-[#34c759] ring-2 ring-white rounded-full`} />
                        </>
                    )}
                </motion.button>
            </div>
        </div>
    );
}
