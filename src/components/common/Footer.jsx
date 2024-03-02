import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Footer = () => {
  let direction = -1;
  let xPercentValue = 0;
  const helloRef1 = useRef(null);
  const helloRef2 = useRef(null);
  const sliderRef = useRef(null);

  const aboutTextRef_1 = useRef(null);
  const headerref = useRef([]);
  headerref.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = new SplitType(aboutTextRef_1?.current);
    headerref.current?.forEach((el) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.words;
      gsap.fromTo(
        textrefelement_1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.06,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textrefelement_1,
          },
        }
      );
    });

    // gsap.to(sliderRef?.current, {
    //   x: "-=500px",
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     start: 0,
    //     end: window.innerHeight,
    //     scrub: 0.25,
    //     onUpdate: (e) => (direction = e.direction * -1),
    //   },
    // });

     gsap.to(sliderRef?.current, {
       x: "-=500px",
       scrollTrigger: {
         trigger: document.documentElement,
         start: 0,
         end: window.innerHeight,
         scrub: 0.2,
         onUpdate: (e) => (direction = e.direction * -1),
       },
     });

    requestAnimationFrame(handleAnimationScroll);
  }, []);
  const handleAnimationScroll = (e) => {
    if (xPercentValue <= -240) {
      xPercentValue = 0;
    }

    if (xPercentValue > 0) {
      xPercentValue = -240;
    }
    gsap.set(helloRef1?.current, { xPercent: xPercentValue });
    gsap.set(helloRef2?.current, { xPercent: xPercentValue });

    xPercentValue += 0.12 * direction;
    requestAnimationFrame(handleAnimationScroll);
  };

  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };

  return (
    <>
      <div data-scroll className="py-16 w-full">
        <div className="w-full px-4 md:px-8 m-auto max-w-custom flex flex-col gap-12 md:gap-20">
          <h3 className="text-sm md:text-lg font-portfolio_bold1 text-text_dark_1 w-full gap-2 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
            <span ref={adHeaderdRefs}>05/</span>
            <span ref={adHeaderdRefs}>WANT TO WORK TOGETHER?</span>
            <span ref={adHeaderdRefs}>SEND ME A MESSAGE</span>
          </h3>

          <Link
            to={"mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"}
            ref={sliderRef}
            className="slider relative text-[3rem] text-start sm:text-6xl lg:text-9xl flex w-full pb-16 md:pb-24 whitespace-nowrap font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
          >
            <span ref={helloRef1}>
              LET'S WORK - SAY HELLO- HELLO@VICTOR.COM 
            </span>
            <span ref={helloRef2} className="absolute left-[240%] ">
              LET'S WORK - SAY HELLO- HELLO@VICTOR.COM 
            </span>
          </Link>
        </div>

        <div className="w-full px-4 md:px-8 m-auto max-w-custom flex flex-col gap-12">
          <h3 className="text-xl md:text-2xl flex-col text-text_dark_1 lg:flex-row font-portfolio_bold1 w-full justify-between flex gap-4 md:items-center pt-16 font-normal">
            <span>
              Victor Essien
              <span className="block">Creative Developer</span>
            </span>
            <span className="flex items-center gap-8 ">
              <span>Twitter</span>
              <span>Linkedln</span>
              <span>Github</span>
            </span>

            <span className="flex items-center gap-8 ">
              Development Victor Essien
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
