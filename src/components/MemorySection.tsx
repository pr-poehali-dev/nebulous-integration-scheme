import { cn } from '@/lib/utils';

const monuments = [
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/4d069b27-f042-48eb-95b1-e9e4e41fee0c.png',
    title: 'Мемориал в Кармадонском ущелье',
    text: 'Место памяти съёмочной группы фильма «Связной». «Мы узнали, в чём сила, брат. Сила — в единстве».',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/f8a0d078-71d0-4956-921e-fd96d29f202c.png',
    title: 'Памятник Сергею Бодрову',
    text: 'Образ Данилы Багрова, ставший символом эпохи.',
    span: '',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/b5b0c601-e4f7-43ba-ab38-0349c4d4d446.png',
    title: 'Памятник в образе Данилы',
    text: 'С кинокамерой — режиссёр и герой в одном кадре.',
    span: '',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/d8c4ce70-4cb2-433c-ace8-de2242e78ccb.png',
    title: 'Скорбящая мать',
    text: 'Памятный комплекс жертвам схода ледника Колка, 20 сентября 2002 года.',
    span: 'md:col-span-2',
  },
];

export default function MemorySection() {
  return (
    <section className="relative bg-neutral-950 py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Память
          </p>
          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Его помнят сердцем
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/60">
            20 сентября 2002 года в Кармадонском ущелье под сходом ледника Колка
            оборвалась жизнь Сергея Бодрова и его съёмочной группы. Память о нём
            живёт в памятниках, фильмах и сердцах миллионов.
          </p>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {monuments.map((m) => (
            <figure
              key={m.url}
              className={cn(
                'group relative overflow-hidden rounded-lg',
                m.span
              )}
            >
              <img
                src={m.url}
                alt={m.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-6">
                <p className="text-lg font-light text-white">{m.title}</p>
                <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-white/60">
                  {m.text}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-12 text-center">
          <p className="text-2xl font-light italic text-white/80 md:text-3xl">
            «В чём сила, брат? Сила — в правде»
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/30">
            Сергей Бодров · 1971 — 2002
          </p>
        </div>
      </div>
    </section>
  );
}
