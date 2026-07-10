import ContactForm from './ContactForm';

export default function Contact({ locale, content }) {
  const contact = content.contact;
  
  return (
    <section id="contact" className="border-t border-slate-900/80 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title mb-12 text-center">
          {contact.title}
          <span className="section-rule" aria-hidden="true" />
        </h2>
        
        <div className="mx-auto mb-12 max-w-md text-center leading-7 text-gray-300">
          <p>{contact.subtitle}</p>
        </div>

        <div className="mx-auto mb-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          <a 
            href="tel:082-6610469"
            className="glass-card flex min-h-44 flex-col items-center rounded-lg p-8 text-center transition duration-200 hover:-translate-y-1 hover:border-[#06B6D4]/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B0F14] text-[#06B6D4]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {contact.phone}
            </h3>
            <p className="text-lg font-bold text-white">082-6610469</p>
          </a>

          <a 
            href="mailto:jiggtkk@gmail.com"
            className="glass-card flex min-h-44 flex-col items-center rounded-lg p-8 text-center transition duration-200 hover:-translate-y-1 hover:border-[#06B6D4]/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B0F14] text-[#06B6D4]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-400">
              {contact.email}
            </h3>
            <p className="text-lg font-bold text-white break-all">jiggtkk@gmail.com</p>
          </a>
        </div>
        <ContactForm locale={locale} content={content} />
      </div>
    </section>
  );
}
