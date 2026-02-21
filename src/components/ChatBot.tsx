import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Sparkles, ChevronDown, Minimize2, Globe, Rocket } from 'lucide-react';
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

        } catch (error) {
            console.error("Error handling message:", error);
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

    return (
        <div className={`fixed bottom-6 ${i18n.language === 'ar' ? 'left-6' : 'right-6'} z-50 flex flex-col items-end`}>
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 30, scale: 0.9, rotate: 2 }}
                        className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(10,77,77,0.3)] border border-slate-200 overflow-hidden flex flex-col mb-4"
                        dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                    >
                        {/* Header */}
                        <div className="bg-[#0A4D4D] p-6 text-white flex items-center justify-between relative overflow-hidden">
                            <motion.div
                                className={`absolute top-0 ${i18n.language === 'ar' ? 'left-0' : 'right-0'} w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 ${i18n.language === 'ar' ? '-translate-x-1/2' : 'translate-x-1/2'}`}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl shadow-lg border-2 border-[#FFD700]/20 overflow-hidden">
                                        <img src="/afraino-icon.jpg" alt="Afraino" className="w-full h-full object-cover" />
                                    </div>
                                    <span className={`absolute -bottom-1 ${i18n.language === 'ar' ? '-left-1' : '-right-1'} w-4 h-4 bg-green-500 border-2 border-[#0A4D4D] rounded-full`}></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg tracking-tight">Afraino AI</h3>
                                    <p className="text-[10px] text-[#FFD700] font-medium opacity-90">{getStageIndicator()}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 relative z-10">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <Minimize2 className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Quick Contact Bar */}
                        <div className="bg-slate-100/80 backdrop-blur-sm border-b border-slate-200 p-3 flex justify-center gap-4">
                            <a
                                href="mailto:afraino2025@gmail.com"
                                className="flex items-center gap-2 text-[10px] font-bold text-[#0A4D4D] bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#FFD700] transition-all"
                            >
                                <Globe className="h-3 w-3 text-[#FFD700]" />
                                {t('chatbot.email_us')}
                            </a>
                            <a
                                href="https://wa.me/252619849199"
                                className="flex items-center gap-2 text-[10px] font-bold text-[#0A4D4D] bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:border-[#FFD700] transition-all"
                            >
                                <Rocket className="h-3 w-3 text-[#FFD700]" />
                                {t('chatbot.whatsapp')}
                            </a>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden ${msg.sender === 'bot'
                                            ? ''
                                            : 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-[#0A4D4D]'
                                            }`}>
                                            {msg.sender === 'bot' ? (
                                                <img src="/afraino-icon.jpg" alt="AI Agent" className="w-full h-full object-cover" />
                                            ) : (
                                                <User className="h-5 w-5" />
                                            )}
                                        </div>
                                        <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${msg.sender === 'bot'
                                            ? `bg-white text-slate-700 border border-slate-100 ${i18n.language === 'ar' ? 'rounded-tr-none' : 'rounded-tl-none'}`
                                            : `bg-[#0A4D4D] text-white ${i18n.language === 'ar' ? 'rounded-tl-none' : 'rounded-tr-none'}`
                                            }`}>
                                            {msg.text}
                                            <p className={`text-[9px] mt-2 opacity-50 ${msg.sender === 'user' ? (i18n.language === 'ar' ? 'text-left' : 'text-right') : (i18n.language === 'ar' ? 'text-right' : 'text-left')}`}>
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-2xl overflow-hidden bg-slate-200 animate-pulse flex items-center justify-center">
                                            <img src="/afraino-icon.jpg" alt="AI thinking" className="w-full h-full object-cover opacity-50" />
                                        </div>
                                        <div className={`bg-white p-4 rounded-[1.5rem] ${i18n.language === 'ar' ? 'rounded-tr-none' : 'rounded-tl-none'} border border-slate-100 flex gap-1`}>
                                            <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 bg-[#0A4D4D] rounded-full"></motion.span>
                                            <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#0A4D4D] rounded-full"></motion.span>
                                            <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#0A4D4D] rounded-full"></motion.span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white border-t border-slate-100">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder={t('chatbot.input_placeholder')}
                                    className={`w-full ${i18n.language === 'ar' ? 'pr-5 pl-14' : 'pl-5 pr-14'} py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#0A4D4D]/20 transition-all text-sm group-hover:bg-slate-200/50`}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className={`absolute ${i18n.language === 'ar' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 p-3 bg-[#0A4D4D] text-[#FFD700] rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-[#0A4D4D]/20`}
                                >
                                    <Send className={`h-5 w-5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <div className="flex items-center gap-4">
                <AnimatePresence>
                    {isMinimized && isOpen && (
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onClick={() => setIsMinimized(false)}
                            className="bg-white px-6 py-3 rounded-2xl shadow-2xl border border-slate-200 text-sm font-bold flex items-center gap-3 text-[#0A4D4D] hover:border-[#FFD700] transition-all group"
                        >
                            <div className="bg-[#0A4D4D]/10 p-2 rounded-lg group-hover:bg-[#0A4D4D] group-hover:text-[#FFD700] transition-all">
                                <Sparkles className="h-4 w-4" />
                            </div>
                            {t('chatbot.restore')}
                        </motion.button>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        if (isMinimized) {
                            setIsMinimized(false);
                        } else {
                            setIsOpen(!isOpen);
                        }
                    }}
                    className={`p-5 rounded-[2rem] shadow-[0_10px_30px_rgba(10,77,77,0.4)] flex items-center justify-center transition-all relative overflow-hidden ${isOpen && !isMinimized ? 'bg-white text-[#0A4D4D]' : 'bg-[#0A4D4D] text-white'
                        }`}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {isOpen && !isMinimized ? (
                        <ChevronDown className="h-7 w-7" />
                    ) : (
                        <div className="relative">
                            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#FFD700]/30 shadow-sm">
                                <img src="/afraino-icon.jpg" alt="Afraino Chat" className="w-full h-full object-cover" />
                            </div>
                            <motion.div
                                className={`absolute -top-1 ${i18n.language === 'ar' ? '-left-1' : '-right-1'} w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0A4D4D]`}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    )}
                </motion.button>
            </div>
        </div>
    );
}
