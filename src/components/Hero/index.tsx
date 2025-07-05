import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import curve from "@/assets/curve.png";
import heroBackground from "@/assets/hero-background.jpg";
import robot from "@/assets/heroImage.avif";
import { heroIcons } from "@/constants/hero";
import { BackgroundCircles, BottomLine, Gradient } from "@/design/hero";
import Button from "../Button";
import CompanyLogos from "../CompanyLogos";
import Generating from "../Generating";
import Notification from "../Notification";
import Section from "../Section";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const parallaxRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const robotRef = useRef(null);
  const iconsRef = useRef(null);
  const notificationRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(robotRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.6,
        ease: "power2.out",
      });

      gsap.from(iconsRef.current, {
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(notificationRef.current, {
        scrollTrigger: {
          trigger: notificationRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          scrub: true,
        },
        scale: 0.98,
        y: 20,
        ease: "power1.out",
      });
    }, [parallaxRef]);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] flex items-center justify-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] pl-4 pr-4"
          ref={containerRef}
        >
          <h1 className="h1 mb-6" ref={headlineRef}>
            Explora las posibilidades que tiene{" "}
            <span className="inline-block relative">
              OrquestIA{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            ref={paragraphRef}
          >
            Desata la productividad de tu empresa con nuestras soluciones
          </p>
          <Button href="/pricing" white ref={buttonRef}>
            Charlemos
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 p-4">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  ref={robotRef}
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul
                    ref={iconsRef}
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex"
                  >
                    {heroIcons.map((icon) => (
                      <li className="p-5" key={icon.toString()}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <div
                    ref={notificationRef}
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  >
                    <Notification title="Generación de código" />
                  </div>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
