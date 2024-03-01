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
      { y: 190, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: .8,
        scrollTrigger: {
          trigger: textrefelement_1,
        },
      }
    );
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
  }, []);
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

          <h2
            ref={aboutTextRef_1}
            className="text-[3rem] text-start sm:text-center sm:text-6xl lg:text-9xl w-full pb-16 md:pb-24 font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
          >
            <span> HELLO@VICTOR</span>
            <span> ESSIEN.COM</span>
          </h2>
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
