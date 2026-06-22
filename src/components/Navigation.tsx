import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { id: 'hero', label: 'Главная' },
  { id: 'filmography', label: 'Фильмография' },
  { id: 'family', label: 'Семья' },
  { id: 'memory', label: 'Память' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-8 md:px-16">
        <button
          onClick={() => scrollTo('hero')}
          className="text-lg font-light uppercase tracking-[0.2em] text-white"
        >
          Сергей Бодров
        </button>

        <div className="hidden gap-10 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-light uppercase tracking-wider text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Меню"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mt-4 flex flex-col gap-1 bg-black/90 px-8 py-4 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="py-3 text-left text-sm font-light uppercase tracking-wider text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}