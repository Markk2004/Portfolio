import Image from 'next/image';

export default function About({ content }) {
  return (
    <section id="about" className="border-t border-slate-900/80 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-12 text-center">
          {content.about.title}
          <span className="section-rule" aria-hidden="true" />
        </h2>
        
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5 flex justify-center">
            <div className="group relative h-64 w-64 overflow-hidden rounded-lg border border-slate-800 bg-[#111827] shadow-xl md:h-80 md:w-80">
              <Image
                src="/images/profile/profile-1.jfif"
                alt={content.hero.name}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/50 to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-6">
            {content.about.paragraphs.map((para, index) => (
              <p key={index} className="text-base leading-8 text-gray-300 md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
