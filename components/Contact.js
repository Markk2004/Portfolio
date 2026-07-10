export default function Contact({ locale, content }) {
  const contact = content.contact;
  
  return (
    <section id="contact" className="py-24 border-t border-gray-900 bg-[#0B0F14] px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
          {contact.title}
          <span className="block w-12 h-[3px] bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] mx-auto mt-4 rounded-full" />
        </h2>
        
        <div className="text-center text-gray-400 mb-12 max-w-md mx-auto">
          <p>{contact.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Phone Card */}
          <a 
            href="tel:082-6610469"
            className="flex flex-col items-center p-8 bg-[#111827] border border-gray-850 rounded-2xl hover:border-[#06B6D4]/50 hover:bg-[#111827]/80 hover:translate-y-[-2px] transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0F14] text-[#06B6D4] mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {contact.phone}
            </h3>
            <p className="text-lg font-bold text-white">082-6610469</p>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:jiggtkk@gmail.com"
            className="flex flex-col items-center p-8 bg-[#111827] border border-gray-850 rounded-2xl hover:border-[#06B6D4]/50 hover:bg-[#111827]/80 hover:translate-y-[-2px] transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0F14] text-[#06B6D4] mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {contact.email}
            </h3>
            <p className="text-lg font-bold text-white break-all">jiggtkk@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
