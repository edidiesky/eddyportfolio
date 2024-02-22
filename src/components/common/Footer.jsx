import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const aboutTextRef_1 = useRef(null);
  const headerref = useRef([]);
  headerref.current = [];

  useEffect(() => {
    const text = new SplitType(aboutTextRef_1?.current);
    const textrefelement_1 = text?.chars;
    gsap.fromTo(
      textrefelement_1,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.9,
        scrollTrigger: {
          trigger: textrefelement_1,
        },
      }
    );
     headerref.current?.forEach((el) => {
       const text = new SplitType(el);
       const textrefelement_1 = text?.chars;
       gsap.fromTo(
         textrefelement_1,
         { y: -100, opacity: 0 },
         {
           y: 0,
           opacity: 1,
           stagger: 0.08,
           // delay:1,
           duration: 0.6,
           scrollTrigger: {
             trigger: textrefelement_1,
           },
         }
       );
     });
  }, []);
    const adHeaderdRefs = (el) => {
      if (el && !headerref?.current?.includes(el)) {
        headerref.current.push(el);
      }
    };
  return (
    <>
      <div data-scroll className="py-16 w-full">
        <div className="w-full px-8 m-auto max-w-custom flex flex-col gap-20">
          <h3 className="text-lg md:text-2xl font-portfolio_bold w-full gap-3 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-extrabold uppercase">
            <span ref={adHeaderdRefs}>03/</span>
            <span ref={adHeaderdRefs}>WANT TO WORK TOGETHER?</span>
            <span ref={adHeaderdRefs}>SEND ME A MESSAGE</span>
          </h3>

          <h2
            ref={aboutTextRef_1}
            className="text-5xl md:text-5xl lg:text-[7rem] w-full pb-24 font-extrabold font-portfolio_bold uppercase"
          >
            HELLO@ VICTORESSIEN.COM
          </h2>
        </div>

        <div className="w-full px-8 m-auto max-w-custom flex flex-col gap-12">
          <h3 className="text-xl flex-col lg:flex-row font-portfolio_bold w-full justify-between flex gap-4 md:items-center pt-16 font-normal">
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
