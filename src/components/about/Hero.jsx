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
  // useLayoutEffect(() => {
  //   // const text = new SplitType(".titleRef");

  //   const text1 = new SplitType(titleRef?.current);
  //   const text_1 = new SplitType(heroTextRef_1?.current);
  //   const description = new SplitType(descriptionRef?.current);
  //   const text2 = new SplitType(heroTextRef_2?.current);
  //   const text3 = new SplitType(heroTextRef_3?.current);
  //   const textrefelement_1 = text_1?.words;
  //   const description_1 = description?.words;
  //   const textrefelement_2 = text2?.chars;
  //   const textrefelement_3 = text3?.words;
  //   gsap
  //     .timeline()
  //     .to(".pre_loader", {
  //       duration: 3,
  //       ease: "power4.out",
  //     })
  //     .to(
  //       ".pre_loader",
  //       {
  //         top: "-160%",
  //         duration: 0.6,
  //         ease: "power3.out",
  //       },
  //       4.6
  //     )
  //     .fromTo(
  //       text1?.chars,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.12,
  //         duration: 0.6,
  //         ease: "power4.out",
  //       },
  //       5
  //     )
  //     // description
  //     .fromTo(
  //       textrefelement_3,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.05,
  //         duration: 1,
  //         ease: "power4.out",
  //       },
  //       7
  //     )
  //     .fromTo(
  //       description_1,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.05,
  //         duration: 2,
  //         delay: 1,
  //         ease: "power3.out",
  //       },
  //       7
  //     )
  //     .fromTo(
  //       imageRef?.current,
  //       { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
  //       {
  //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  //         opacity: 1,
  //         duration: 1.4,
  //       },
  //       7
  //     );

  //   gsap.fromTo(
  //     textrefelement_1,
  //     { y: 60, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.05,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: textrefelement_1,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     textrefelement_2,
  //     { y: 100, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.05,
  //       duration: 0.8,
  //       scrollTrigger: {
  //         trigger: textrefelement_2,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <>
      <div data-scroll className="pt-52 pb-20 ">
        <div className="w-full md:w-[800px] mx-auto px-4 md:px-8 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-16 gap-x-20 w-[90%]">
            <div className="flex w-full flex-col gap-16">
              <h1
                data-scroll
                data-scroll-speed="2"
                className="font-normal text-text_dark_1 uppercase text-4xl sm:text-8xl md:text-[8rem] w-full leading-[1] font-portfolio_bold1"
              >
                <span className="overflow-hidden">
                  <span className="titleRef block" ref={titleRef}>
                    Creative
                  </span>
                </span>
                <span className="overflow-hidden">
                  <span className="titleRef" ref={titleRef}>
                    Passionate
                  </span>
                </span>{" "}
                <span className="overflow-hidden">
                  <span className="titleRef block" ref={titleRef}>
                    Developer
                  </span>
                </span>
              </h1>
            </div>
            <div className="w-full">
              <div ref={imageRef} className="w-full h-[460px]">
                <img
                  src={"../../../public/favourite/profile_3.JPG"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1
              data-scroll
              data-scroll-speed="2"
              className="font-normal text-text_dark_1 uppercase text-4xl sm:text-8xl md:text-[8rem] w-full leading-[1] font-portfolio_bold1"
            >
              <span className="overflow-hidden">
                <span className="titleRef block" ref={titleRef}>
                 BASED IN
                </span>
              </span>{" "}
              <span className="overflow-hidden">
                <span className="titleRef block" ref={titleRef}>
                  NIGERIA
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
