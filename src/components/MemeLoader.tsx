import React, { useEffect, useRef } from 'react';

const Marquee: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const images = [
    '/mm1.jpeg',
    '/mm2.jpeg',
    '/mm3.jpeg',
    '/mm4.jpeg',
    '/mm5.jpeg',
  ];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const scrollerInner = scroller.querySelector('.scroller__inner');
      if (!scrollerInner) return;

      const items = Array.from(scrollerInner.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        clone.setAttribute('aria-hidden', 'true');
        scrollerInner.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="w-full bg-transparent py-10">
      <div
        ref={scrollerRef}
        className="scroller overflow-hidden w-full mask-gradient"
      >
        <div className="scroller__inner flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {images.map((src, index) => (
            <div
              key={index}
              className="p-2 rounded-xl bg-pink-100 shadow-glow transition-transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-[140px] h-[110px] sm:w-[220px] sm:h-[160px] md:w-[260px] md:h-[190px] lg:w-[300px] lg:h-[220px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .mask-gradient {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            white 10%,
            white 90%,
            transparent
          );
        }
      `}</style>
    </div>
  );
};

export default Marquee;
