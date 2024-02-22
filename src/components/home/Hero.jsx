import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import Arrow from "../../assets/svg/arrow";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const heroTextRef_1 = useRef(null);
  const heroTextRef_2 = useRef(null);
  const imageRef = useRef(null);
  useLayoutEffect(() => {
    // const text = new SplitType(".titleRef");

    const text1 = new SplitType(titleRef?.current);
    const text_1 = new SplitType(heroTextRef_1?.current);
    const text2 = new SplitType(heroTextRef_2?.current);
    const textrefelement_1 = text_1?.words;
    const textrefelement_2 = text2?.chars;
    gsap
      .timeline()
      .to(".pre_loader", {
        duration: 3,
        ease: "power4.out",
      })
      .to(
        ".pre_loader",
        {
          top: "-100%",
          duration: 2,
          ease: "power4.out",
        },
        6
      )
      .fromTo(
        text1?.chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 2,
          ease: "power4.out",
        },
        6.5
      )
      .fromTo(
        imageRef?.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1.4,
        },
        7
      );

    gsap.fromTo(
      textrefelement_1,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: textrefelement_1,
        },
      }
    );
    gsap.fromTo(
      textrefelement_2,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
          trigger: textrefelement_2,
        },
      }
    );
  }, []);

  return (
    <>
      <div data-scroll className="py-20 pb-32 bg-[#E1DFDD]">
        <div className="w-full px-8 m-auto max-w-custom_1">
          <div className="flex flex-col gap-y-16 w-[90%] lg:w-[1000px]">
            <h1
              data-scroll
              data-scroll-speed="2"
              className="font-bold uppercase text-[6rem] lg:text-[8rem] leading-[1] font-portfolio_bold"
            >
              <span className="">
                <span className="titleRef" ref={titleRef}>
                  Creative Developer
                </span>
              </span>
              <span
                data-scroll
                data-scroll-speed="1.5"
                className="flex items-center gap-6 text-lg"
              >
                ( Full-Stack React-typescript Developer )
                {/* <span><Arrow /></span> */}
              </span>
            </h1>
            <div
              ref={imageRef}
              style={{
                background: "url(profile_1.jpeg)",
                backgroundPosition: "top center",
                backgrounRepeat: "none",
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="w-[90%] lg:w-[600px] h-[360px]"
            >
              {/* <img src="profile_1.jpeg" alt="" className="w-full h-full object-cover" /> */}
            </div>
          </div>
          <div className="w-full py-24 flex items-center gap-12 flex-col justify-between md:flex-row">
            <span>
              <Arrow />
            </span>
            <h4
              // data-scroll
              // data-scroll-speed="3"
              ref={heroTextRef_1}
              style={{ fontKerning: "none" }}
              className="text-xl lg:text-2xl w-[90%] lg:w-[600px] leading-[1.5] font-normal font-portfolio_semibold"
            >
              I collaborate with brands globally to design impactful,
              mission-focused websites that drive results and achieve business
              goals
            </h4>
            <h1
              data-scroll
              ref={heroTextRef_2}
              style={{ fontKerning: "none" }}
              data-scroll-speed="4"
              className="font-normal uppercase text-[4rem] text-start lg:text-end lg:text-[7rem] leading-[1] font-portfolio_bold"
            >
              VICTOR ESSIEN
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
