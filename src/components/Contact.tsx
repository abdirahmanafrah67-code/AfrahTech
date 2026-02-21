import { Send, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

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
        <section id="contact" className={`section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 ${isPage ? 'pt-32 min-h-screen' : ''}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{t('contact.title')}</h2>
                    <p className="text-lg text-slate-600">
                        {t('contact.description')}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">{t('contact.form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                        placeholder={t('contact.form.placeholders.name')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">{t('contact.form.email')}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                        placeholder={t('contact.form.placeholders.email')}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">{t('contact.form.subject')}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                    placeholder={t('contact.form.placeholders.subject')}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">{t('contact.form.message')}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none shadow-sm"
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

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary text-primary font-bold py-4 rounded-xl transition-all shadow-lg shadow-secondary/30 hover:shadow-secondary/50 flex justify-center items-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                        {t('contact.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 rtl:rotate-180" />
                                        {t('contact.form.send')}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
