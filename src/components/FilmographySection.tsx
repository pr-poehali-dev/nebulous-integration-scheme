const films = [
  {
    year: '1997',
    title: 'Брат',
    role: 'Данила Багров',
    note: 'Роль, которая сделала его символом поколения 90-х.',
  },
  {
    year: '1998',
    title: 'Кавказский пленник',
    role: 'Иван Жилин',
    note: 'Дебют в кино, номинация на «Нику» и приз «Кинотавра».',
  },
  {
    year: '2000',
    title: 'Брат 2',
    role: 'Данила Багров',
    note: 'Культовое продолжение, разошедшееся на цитаты.',
  },
  {
    year: '2001',
    title: 'Сёстры',
    role: 'Режиссёр',
    note: 'Дебют в режиссуре, приз за лучший дебют.',
  },
  {
    year: '2002',
    title: 'Война',
    role: 'Иван Ермаков',
    note: 'Одна из последних значимых актёрских работ.',
  },
  {
    year: '2002',
    title: 'Связной',
    role: 'Режиссёр',
    note: 'Незавершённый фильм, съёмки которого оборвались в Кармадоне.',
  },
];

export default function FilmographySection() {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container mx-auto px-8 md:px-16">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Фильмография
          </p>
          <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
            Ключевые роли
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/60">
            Актёр и режиссёр, чьи работы стали частью культурного кода России.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {films.map((film) => (
            <div
              key={film.title + film.year}
              className="group flex flex-col gap-2 py-8 transition-colors hover:bg-white/[0.02] md:flex-row md:items-baseline md:gap-10"
            >
              <span className="text-2xl font-light text-white/30 transition-colors group-hover:text-white/60 md:w-24">
                {film.year}
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-light text-white md:text-3xl">
                  {film.title}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-white/40">
                  {film.role}
                </p>
              </div>
              <p className="max-w-md text-base font-light leading-relaxed text-white/50 md:text-right">
                {film.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
