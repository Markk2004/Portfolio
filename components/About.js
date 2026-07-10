import Image from 'next/image';

export default function About({ content }) {
  return (
    <section id="about" className="py-24 border-t border-gray-900 bg-[#0B0F14] px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-12 text-center">
          {content.about.title}
          <span className="block w-12 h-[3px] bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] mx-auto mt-4 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-800 bg-[#111827] shadow-xl">
              <Image
                src="/images/profile/profile-placeholder.svg"
                alt={content.hero.name}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/50 to-transparent pointer-events-none" />
            </div>
          </div>
          
          {/* Paragraphs Column */}
          <div className="md:col-span-7 space-y-6">
            {content.about.paragraphs.map((para, index) => (
              <p key={index} className="text-gray-300 text-base md:text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
