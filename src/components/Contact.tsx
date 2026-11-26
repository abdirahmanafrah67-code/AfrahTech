import { Send, CheckCircle2, MapPin, Phone, Clock, Star } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { BUSINESS, fullAddress } from '../data/business';

export default function Contact() {
    const { t } = useTranslation();
    const location = useLocation();
    const isPage = location.pathname === '/contact';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Using FormSubmit.co - a free form backend service
            const response = await fetch('https://formsubmit.co/ajax/afraino2025@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _captcha: 'false'
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className={`bg-white px-4 sm:px-6 ${isPage ? 'pt-28 md:pt-32 pb-24 min-h-screen' : 'py-20 md:py-28'}`}>
            <div className="max-w-[1024px] mx-auto">
                <div className="text-center max-w-[720px] mx-auto mb-14">
                    <h2 className="headline">{t('contact.title')}</h2>
                    <p className="subhead mt-4 text-[#0A2E28]/65">
                        {t('contact.description')}
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="p-2">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700 tracking-wide ">{t('contact.form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        placeholder={t('contact.form.placeholders.name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-slate-700 tracking-wide ">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        placeholder={t('contact.form.placeholders.email')}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-slate-700 tracking-wide ">{t('contact.form.subject')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                    placeholder={t('contact.form.placeholders.subject')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700 tracking-wide ">{t('contact.form.message')}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-slate-200 focus:border-secondary focus:ring-0 outline-none transition-all resize-none placeholder:text-slate-400 text-slate-900"
                                    placeholder={t('contact.form.placeholders.message')}
                                ></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
                                    <CheckCircle2 className="h-5 w-5" />
                                    <span className="font-medium">{t('contact.form.success')}</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
                                    <span className="font-medium">{t('contact.form.error')}</span>
                                </div>
                            )}

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary px-8 flex mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                            {t('contact.form.sending')}
                                        </>
                                    ) : (
                                        <>
                                            {t('contact.form.send')}
                                            <Send className="h-4 w-4 rtl:rotate-180" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Office details: same name, address and phone as the Google Business Profile */}
                    <div className="mt-14 grid sm:grid-cols-2 gap-4 text-[15px] text-[#0A2E28]/75">
                        <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-2xl bg-[#f5f5f7] p-5 hover:bg-[#ececef] transition-colors">
                            <MapPin className="w-5 h-5 shrink-0 text-[#1a7a1a]" />
                            <span><strong className="block text-[#0A2E28]">Our office</strong>{fullAddress}</span>
                        </a>
                        <a href={BUSINESS.phoneHref} className="flex gap-3 rounded-2xl bg-[#f5f5f7] p-5 hover:bg-[#ececef] transition-colors">
                            <Phone className="w-5 h-5 shrink-0 text-[#1a7a1a]" />
                            <span><strong className="block text-[#0A2E28]">Phone &amp; WhatsApp</strong>{BUSINESS.phone}</span>
                        </a>
                        <div className="flex gap-3 rounded-2xl bg-[#f5f5f7] p-5">
                            <Clock className="w-5 h-5 shrink-0 text-[#1a7a1a]" />
                            <span><strong className="block text-[#0A2E28]">Opening hours</strong>{BUSINESS.hours.map((h) => <span key={h} className="block">{h}</span>)}</span>
                        </div>
                        <a href={BUSINESS.reviewUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-2xl bg-[#f5f5f7] p-5 hover:bg-[#ececef] transition-colors">
                            <Star className="w-5 h-5 shrink-0 text-[#1a7a1a]" />
                            <span><strong className="block text-[#0A2E28]">Worked with us?</strong>Leave us a review on Google</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
