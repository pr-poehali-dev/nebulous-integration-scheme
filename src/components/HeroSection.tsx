import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/e2a2134e-f3c7-4398-b2f1-398a6d5cc66c.png',
  'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/db9d1c88-0d28-40a1-b8dd-7c3822e92f77.png',
  'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/d3bb2326-c360-4e43-aead-30fc267fe4c8.png',
  'https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/d50f45b5-4c11-499b-9cbb-6454d8f7915e.png',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/a8d2d5c2-c907-4885-ab13-4755fa8161f5/bucket/cb8bb414-e28c-4f1b-ab22-2dd203b8043a.png"
                  alt="Сергей Бодров"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-4">
                <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                  Сергей Бодров
                </p>
                <p className="text-xl font-light text-white/80 md:text-2xl">
                  Актёр | Режиссёр | Журналист
                </p>
                <p className="max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                  Артист, которого помнят сердцем. Роли, ставшие частью эпохи,
                  и образы, в которых живёт целое поколение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}