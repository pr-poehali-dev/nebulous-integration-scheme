import { cn } from '@/lib/utils';

const photos = [
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/dda16889-0917-4651-a155-2804f9c8efe3.png',
    caption: 'Семья Сергея Бодрова',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/8877716a-de51-41a5-a482-965617fb9791.png',
    caption: 'С супругой Светланой',
    span: '',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/1ffaaf08-f9a6-4ba6-9029-2a93e5ce2ddb.png',
    caption: 'С детьми',
    span: '',
  },
  {
    url: 'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/bdb5f463-796e-46fe-a060-7e6cfa4ed76c.png',
    caption: 'Близкие люди',
    span: 'md:col-span-2',
  },
];

export default function FamilySection() {
  return (
    <section id="family" className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Семья
          </p>
          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Самые близкие
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/60">
            Жена Светлана и двое детей — Ольга и Александр. Семья, которая
            бережно хранит память и продолжает его историю.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {photos.map((photo) => (
            <figure
              key={photo.url}
              className={cn(
                'group relative overflow-hidden rounded-lg',
                photo.span
              )}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-light text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}