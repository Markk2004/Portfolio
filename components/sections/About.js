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
          <div className="md:col-span-6 flex justify-center">
            <div className="group relative h-80 w-80 overflow-hidden rounded-lg border border-slate-800 bg-[#111827] shadow-xl md:h-[400px] md:w-[400px]">
              <Image
                src="/images/profile/profile-1.jfif"
                alt={content.hero.name}
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-top scale-[1.08] transition-transform duration-300 group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/50 to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="md:col-span-6 space-y-6">
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
