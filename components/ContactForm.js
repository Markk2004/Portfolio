'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/validation';

export default function ContactForm({ locale, content }) {
  const formContent = content.contact.form;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or 'rate-limit'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    const validationErrors = validateContactForm(formData, locale);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      if (response.status === 201) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else if (response.status === 422) {
        const result = await response.json();
        if (result.errors) {
          const backendErrors = {};
          Object.keys(result.errors).forEach((key) => {
            backendErrors[key] = result.errors[key][0];
          });
          setErrors(backendErrors);
        }
        setSubmitStatus('error');
      } else if (response.status === 429) {
        setSubmitStatus('rate-limit');
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto" noValidate>
      {submitStatus && (
        <div 
          role="status" 
          className={`p-4 rounded-xl text-sm font-semibold border ${
            submitStatus === 'success'
              ? 'bg-green-950/30 border-green-800 text-green-400'
              : submitStatus === 'rate-limit'
              ? 'bg-amber-950/30 border-amber-800 text-amber-400'
              : 'bg-red-950/30 border-red-900 text-red-400'
          }`}
        >
          {submitStatus === 'success' && formContent.success}
          {submitStatus === 'rate-limit' && (locale === 'th' ? 'ส่งข้อความบ่อยเกินไป กรุณารอ 1 นาทีแล้วลองใหม่' : 'Too many requests. Please wait a minute and try again.')}
          {submitStatus === 'error' && !Object.keys(errors).length && formContent.error}
          {submitStatus === 'error' && Object.keys(errors).length > 0 && (locale === 'th' ? 'กรุณาแก้ไขข้อผิดพลาดในฟอร์ม' : 'Please correct the errors in the form.')}
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-300 mb-2">
          {formContent.name} <span className="text-[#06B6D4]">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none ${
            errors.name ? 'border-red-900 focus:border-red-700' : 'border-gray-800'
          }`}
          disabled={isSubmitting}
          required
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-400 mt-2 font-medium" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-300 mb-2">
          {formContent.email} <span className="text-[#06B6D4]">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none ${
            errors.email ? 'border-red-900 focus:border-red-700' : 'border-gray-800'
          }`}
          disabled={isSubmitting}
          required
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-400 mt-2 font-medium" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-300 mb-2">
          {formContent.message} <span className="text-[#06B6D4]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full bg-[#111827] border rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all outline-none resize-none ${
            errors.message ? 'border-red-900 focus:border-red-700' : 'border-gray-800'
          }`}
          disabled={isSubmitting}
          required
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400 mt-2 font-medium" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:shadow-lg hover:shadow-[#06B6D420] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {formContent.sending}
            </>
          ) : (
            formContent.submit
          )}
        </button>
      </div>
    </form>
  );
}
