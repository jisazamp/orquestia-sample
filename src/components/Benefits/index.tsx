import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Arrow from "@/assets/svg/arrow";
import ClipPath from "@/assets/svg/clipPath";
import { benefits } from "@/constants/benefits";
import { GradientLight } from "@/design/benefits";
import Heading from "../Heading";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  useLayoutEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="features"
      className="flex items-center justify-center pr-4 pl-4"
      ref={sectionRef}
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-4xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => setCardRef(el, index)}
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] border border-gray-100 rounded-md"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explora más
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
