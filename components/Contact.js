import ContactForm from './ContactForm';

export default function Contact({ locale, content }) {
  return (
    <section id="contact" className="py-24 border-t border-gray-900 bg-[#0B0F14] px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
          {content.ui.nav.contact}
          <span className="block w-12 h-[3px] bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] mx-auto mt-4 rounded-full" />
        </h2>
        <div className="text-center text-gray-400 mb-12 max-w-md mx-auto">
          <p>{content.contact.subtitle}</p>
        </div>
        <ContactForm locale={locale} content={content} />
      </div>
    </section>
  );
}
