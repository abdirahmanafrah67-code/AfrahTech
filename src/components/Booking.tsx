import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Smartphone, Globe, Brain, UploadCloud, Palette, Settings, Sparkles,
    Calendar, Clock, User, Mail, Phone, MessageSquare, Check, 
    ChevronRight, ChevronLeft, CheckCircle2, AlertCircle
} from 'lucide-react';

interface BookingData {
    service: string;
    date: string;
    timeSlot: string;
    name: string;
    email: string;
    phone: string;
    notes: string;
}

export default function Booking() {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState<BookingData>({
        service: '',
        date: '',
        timeSlot: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const services = [
        { id: 'mobile', icon: Smartphone, label: t('services.items.mobile.title'), desc: t('services.items.mobile.description') },
        { id: 'web', icon: Globe, label: t('services.items.web.title'), desc: t('services.items.web.description') },
        { id: 'ai', icon: Brain, label: t('services.items.ai.title'), desc: t('services.items.ai.description') },
        { id: 'publishing', icon: UploadCloud, label: t('services.items.publishing.title'), desc: t('services.items.publishing.description') },
        { id: 'design', icon: Palette, label: t('services.items.design.title'), desc: t('services.items.design.description') },
        { id: 'maintenance', icon: Settings, label: t('services.items.maintenance.title'), desc: t('services.items.maintenance.description') }
    ];

    // Generate dates for the next 7 days (including weekends)
    const getNextDays = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + 1 + i);
            dates.push(date);
        }
        return dates;
    };

    const dates = getNextDays();

    const getAvailableSlots = () => {
        if (!formData.date) return [];
        // Find corresponding date object
        const selectedD = dates.find(d => formatDateString(d) === formData.date);
        if (selectedD && selectedD.getDay() === 5) { // 5 is Friday
            // Jimco: 4:00pm - 11:00pm
            return ['04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'];
        }
        // Others: 9:30am - 11:00pm
        return ['09:30 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM'];
    };

    const handleNext = () => {
        if (step === 1 && !formData.service) return;
        if (step === 2 && (!formData.date || !formData.timeSlot)) return;
        setStep(prev => prev + 1);
    };

    const handlePrev = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) return;
        
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Send booking data using FormSubmit.co
            const response = await fetch('https://formsubmit.co/ajax/afraino2025@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    subject: `New Consultation Booking: ${formData.service}`,
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDateString = (dateObj: Date) => {
        return dateObj.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">{t('booking.title')}</h1>
                    <p className="text-lg text-slate-600 max-w-xl mx-auto">{t('booking.description')}</p>
                </div>

                {/* Progress Tracker - Simplified & Elegant */}
                <div className="mb-12 flex justify-between items-center max-w-md mx-auto">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center flex-1 last:flex-none">
                            <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                                    step >= s 
                                        ? 'bg-secondary text-primary shadow-sm' 
                                        : 'bg-slate-200 text-slate-500'
                                }`}
                            >
                                {step > s ? <Check className="w-4 h-4" /> : s}
                            </div>
                            {s < 3 && (
                                <div 
                                    className={`h-0.5 flex-1 mx-2 rounded-full transition-all duration-300 ${
                                        step > s ? 'bg-secondary' : 'bg-slate-200'
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Content Area - Open & Clean Layout */}
                <div className="min-h-[400px] flex flex-col justify-between">
                    {submitStatus === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center justify-center text-center py-12"
                        >
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500 ring-4 ring-green-500/10">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-3">{t('booking.success')}</h2>
                            <p className="text-slate-600 mb-8 max-w-md">{t('booking.success_desc')}</p>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-left w-full max-w-md space-y-3">
                                <p className="text-xs text-slate-400 font-bold tracking-wider">Booking Summary</p>
                                <div><span className="font-semibold text-slate-700">Service:</span> {formData.service}</div>
                                <div><span className="font-semibold text-slate-700">Date:</span> {formData.date}</div>
                                <div><span className="font-semibold text-slate-700">Time:</span> {formData.timeSlot}</div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col h-full">
                            <div className="flex-1">
                                <AnimatePresence mode="wait">
                                    {/* STEP 1: SERVICE SELECTION */}
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 text-center mb-6">{t('booking.step_service')}</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {services.map((serv) => {
                                                    const Icon = serv.icon;
                                                    const isSelected = formData.service === serv.label;
                                                    return (
                                                        <button
                                                            key={serv.id}
                                                            onClick={() => setFormData({ ...formData, service: serv.label })}
                                                            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                                                                isSelected 
                                                                    ? 'border-secondary bg-white ring-2 ring-secondary text-slate-950 shadow-md shadow-secondary/5' 
                                                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                                                            }`}
                                                        >
                                                            <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-secondary text-primary' : 'bg-slate-100 text-slate-600'}`}>
                                                                <Icon className="w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-slate-900">{serv.label}</div>
                                                                <div className="text-xs text-slate-500 mt-1 line-clamp-2">{serv.desc}</div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2: SCHEDULE CONSULTATION */}
                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 text-center mb-6">{t('booking.step_schedule')}</h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Date Selector */}
                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" /> Select Date
                                                    </label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {dates.map((d) => {
                                                            const dateStr = formatDateString(d);
                                                            const isSelected = formData.date === dateStr;
                                                            return (
                                                                <button
                                                                    key={dateStr}
                                                                    onClick={() => setFormData({ ...formData, date: dateStr, timeSlot: '' })}
                                                                    className={`p-3.5 rounded-xl border text-sm font-semibold transition-all bg-white ${
                                                                        isSelected 
                                                                            ? 'border-secondary ring-2 ring-secondary text-slate-950 shadow-sm' 
                                                                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                                                    }`}
                                                                >
                                                                    {dateStr}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Time Slot Selector */}
                                                <div className="space-y-3">
                                                    <label className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <Clock className="w-4 h-4" /> {t('booking.select_slot')}
                                                    </label>
                                                    <div className="space-y-2">
                                                        {getAvailableSlots().map((ts) => {
                                                            const isSelected = formData.timeSlot === ts;
                                                            return (
                                                                <button
                                                                    key={ts}
                                                                    onClick={() => setFormData({ ...formData, timeSlot: ts })}
                                                                    className={`w-full p-3.5 rounded-xl border text-sm font-semibold text-left transition-all bg-white flex justify-between items-center ${
                                                                        isSelected 
                                                                            ? 'border-secondary ring-2 ring-secondary text-slate-950' 
                                                                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                                                    }`}
                                                                >
                                                                    <span>{ts}</span>
                                                                    {isSelected && <Check className="w-4 h-4 text-secondary" />}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3: CONTACT INFORMATION */}
                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-xl font-bold text-slate-900 text-center mb-6">{t('booking.step_contact')}</h3>
                                            <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <User className="w-4 h-4" /> {t('booking.name')}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <Mail className="w-4 h-4" /> {t('booking.email')}
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <Phone className="w-4 h-4" /> {t('booking.phone')}
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all shadow-sm"
                                                        placeholder="+1 (555) 000-0000"
                                                    />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label htmlFor="notes" className="text-xs font-bold text-slate-500 tracking-wider flex items-center gap-2">
                                                        <MessageSquare className="w-4 h-4" /> {t('booking.notes')}
                                                    </label>
                                                    <textarea
                                                        id="notes"
                                                        rows={3}
                                                        value={formData.notes}
                                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none shadow-sm"
                                                        placeholder={t('contact.form.placeholders.message')}
                                                    />
                                                </div>

                                                {submitStatus === 'error' && (
                                                    <div className="md:col-span-2 flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200 text-sm">
                                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                                        <span>{t('contact.form.error')}</span>
                                                    </div>
                                                )}
                                            </form>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Stepper Footer buttons */}
                            <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-200">
                                <button
                                    onClick={handlePrev}
                                    disabled={step === 1}
                                    className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-semibold flex items-center gap-2 transition-all hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
                                    {t('booking.prev')}
                                </button>

                                {step < 3 ? (
                                    <button
                                        onClick={handleNext}
                                        disabled={
                                            (step === 1 && !formData.service) ||
                                            (step === 2 && (!formData.date || !formData.timeSlot))
                                        }
                                        className="px-6 py-2.5 bg-[#0A2E28] text-white font-bold rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg hover:bg-[#0d3d34] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {t('booking.next')}
                                        <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                                        className="px-6 py-2.5 bg-[#0A2E28] text-white font-bold rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg hover:bg-[#0d3d34] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                                {t('contact.form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="w-4 h-4" />
                                                {t('booking.submit')}
                                            </>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
