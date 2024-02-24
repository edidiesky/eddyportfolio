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
  const heroTextRef_3 = useRef(null);
  const imageRef = useRef(null);
  useLayoutEffect(() => {
    // const text = new SplitType(".titleRef");

    const text1 = new SplitType(titleRef?.current);
    const text_1 = new SplitType(heroTextRef_1?.current);
    const text2 = new SplitType(heroTextRef_2?.current);
    const text3 = new SplitType(heroTextRef_3?.current);
    const textrefelement_1 = text_1?.words;
    const textrefelement_2 = text2?.chars;
    const textrefelement_3 = text3?.words;
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
          duration: 1,
          ease: "power3.out",
        },
        4.6
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
          duration: 1,
          ease: "power4.out",
        },
        5
      )
      .fromTo(
        textrefelement_3,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration:1,
          ease: "power4.out",
        },
        7
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
        <div className="w-full px-4 md:px-8 m-auto max-w-custom_1">
          <div className="flex flex-col gap-y-16 w-[90%] lg:w-[1000px]">
            <h1
              data-scroll
              data-scroll-speed="2"
              className="font-extrabold uppercase text-4xl sm:text-6xl md:text-8xl leading-[1] font-portfolio_bold"
            >
              <span className="">
                <span className="titleRef" ref={titleRef}>
                  Creative Developer
                </span>
              </span>
              <span
                data-scroll
                ref={heroTextRef_3}
                data-scroll-speed="1.5"
                className="flex items-center gap-6 text-sm font-normal font-portfolio_semibold md:text-lg mt-4"
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
              className="w-[90%] md:w-[60%] lg:w-[600px] h-[300px] md:h-[360px]"
            >
              {/* <img src="profile_1.jpeg" alt="" className="w-full h-full object-cover" /> */}
            </div>
          </div>
          <div className="w-full py-24 grid grid-cols-1 md:grid-cols-custom_2 items-start lg:items-center gap-12 flex-col justify-between md:flex-row">
            <div className="flex items-center gap-6 lg:gap-20">
              <span>
                <Arrow />
              </span>

              <h4
                // data-scroll
                // data-scroll-speed="3"
                ref={heroTextRef_1}
                style={{ fontKerning: "none" }}
                className="text-lg lg:text-2xl w-[90%] leading-[1.5] font-normal font-portfolio_semibold"
              >
                I collaborate with brands globally to design impactful,
                mission-focused websites that drive results and achieve business
                goals
              </h4>
            </div>
            <h1
              data-scroll
              ref={heroTextRef_2}
              style={{ fontKerning: "none" }}
              data-scroll-speed="4"
              className="font-extrabold heroTitle uppercase text-6xl text-end w-full lg:text-8xl leading-[1.4] lg:leading-[1] font-portfolio_bold"
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
