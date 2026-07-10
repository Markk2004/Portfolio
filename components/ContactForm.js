'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';

export default function ContactForm({ locale, content }) {
  const formContent = content.contact.form;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    const validationErrors = validateContactForm(formData, locale);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (response.status === 201) {
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setStatus('success');
      } else if (response.status === 422) {
        const result = await response.json();
        setErrors(Object.fromEntries(Object.entries(result.errors || {}).map(([key, value]) => [key, value[0]])));
        setStatus('validation');
      } else if (response.status === 429) {
        setStatus('rate-limit');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusMessage = {
    success: formContent.success,
    error: formContent.error,
    validation: locale === 'th' ? 'กรุณาแก้ไขข้อมูลในฟอร์ม' : 'Please correct the form fields.',
    'rate-limit': locale === 'th' ? 'ส่งข้อความบ่อยเกินไป กรุณารอ 1 นาที' : 'Too many requests. Please wait one minute.',
  }[status];

  return (
    <form onSubmit={handleSubmit} className="glass-card mx-auto max-w-2xl space-y-5 rounded-lg p-6 md:p-8" noValidate>
      {status && <p role="status" className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-100">{statusMessage}</p>}
      {[
        ['name', formContent.name, 'text'],
        ['email', formContent.email, 'email'],
      ].map(([name, label, type]) => (
        <div key={name}>
          <label htmlFor={`contact-${name}`} className="mb-2 block text-sm font-semibold text-slate-300">{label}</label>
          <input id={`contact-${name}`} name={name} type={type} value={formData[name]} onChange={handleChange} disabled={isSubmitting} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} className="min-h-11 w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50" />
          {errors[name] && <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-red-300">{errors[name]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-300">{formContent.message}</label>
        <textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} disabled={isSubmitting} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50" />
        {errors.message && <p id="message-error" role="alert" className="mt-2 text-sm text-red-300">{errors.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="min-h-11 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white transition duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50">
        {isSubmitting ? formContent.sending : formContent.submit}
      </button>
    </form>
  );
}
