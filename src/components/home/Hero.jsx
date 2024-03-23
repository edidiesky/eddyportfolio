import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

import gsap from "gsap";
import Arrow from "../../assets/svg/arrow";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const heroTextRef_1 = useRef(null);
  const heroTextRef_2 = useRef(null);
  const heroTextRef_3 = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    const text1 = new SplitType(".titleRef");
    const textrefelement_1 = new SplitType(".hero_text_2");
    const textrefelement = new SplitType(".hero_text_3");
    gsap
      .timeline({ defaults: { ease: "SlowMo.easeOut" } })
      .to(".pre_loader", {
        duration: 3,
        ease: "power4.out",
      })
      .to(
        ".loader_text",
        {
          y: -140,
          duration: 1.3,
          ease: "power3.out",
        },
        4
      )
      .to(
        ".loader_text",
        {
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        4.2
      )
      .to(
        ".revealer_2",
        {
          height: 0,
          ease: "power3.inOut",
          duration: 1.5,
        },
        4.6
      )
      .to(
        ".revealer_1",
        {
          height: 0,
          ease: "power3.inOut",
          duration: 1,
        },
        5
      )

      .to(
        ".pre_loader",
        {
          scale: 1.5,
          opacity: 0,
          display: "none",
          duration: 2,
          ease: "power3.out",
        },
        6.6
      )
      .fromTo(
        text1?.chars,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          duration: 1.3,
          ease: "power4.inOut",
        },
        7.2
      )
      .fromTo(
        imageRef?.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 2,
        },
        8
      );

    gsap.fromTo(
      textrefelement_1?.words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textrefelement_1?.words,
        },
      }
    );

    gsap.fromTo(
      textrefelement?.chars,
      { y: 110, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: textrefelement?.chars,
        },
      }
    );
  }, []);

  return (
    <>
      <div
        data-scroll
        className="min-h-[100vh] z-50 py-20 relative flex items-center justify-center"
      >
        <div className="w-full  mx-auto px-2 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-8 gap-x-20">
            <div className="flex w-full flex-col gap-16">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal z-50  text-text_dark_1 text-center uppercase text-base lg:text-xl w-full leading-[1] font-portfolio_bold"
              >
                {/* SPEEDING YOUR BUSINESS EXPERIENCE */}
                {"</>"} SOFTWARE DEVELOPER {"</>"}
              </span>
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef z-50 text-text_dark_1 text-start lg:text-center uppercase text-4xl sm:text-5xl md:text-6xl xl:text-8xl w-full leading-[1] font-portfolio_bold"
              >
                {/* SPEEDING YOUR BUSINESS EXPERIENCE */}
                CREATING PLEASANT EXPERIENCE FOR YOUR BUSINESS
                {/* Creative
                <br />
                FULLSTACK
                <br />
                Developer */}
              </span>
            </div>
            <div className="md:w-[850px] mx-auto flex flex-col gap-8 ">
              <div className="w-full">
                <div className="w-[60%] mx-auto relative z-50 flex items-center justify-center">
                  <img
                    ref={imageRef}
                    src={"./profile_6.JPG"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h4 className="text-lg lg:text-xl hero_text_2 text-start lg:text-center text-text_dark_1 w-[90%] leading-[1.5] font-normal uppercase font-portfolio_bold">
                I AM purposeful, proactive, predetermined and a driven CATALYST
                FOR CREATIVE DEVELOPMENT FOR AGENCIES AND INDUSTRIES
              </h4>
              <h1
                data-scroll
                data-scroll-speed="2"
                className="hero_text_3 font-normal text-text_dark_1 uppercase text-start lg:text-center text-4xl sm:text-5xl md:text-6xl xl:text-8xl w-full leading-[1] font-portfolio_bold1"
              >
                BASED IN
                <br />
                NIGERIA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
