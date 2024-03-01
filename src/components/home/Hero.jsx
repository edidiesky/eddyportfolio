import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";

import gsap from "gsap";
import Arrow from "../../assets/svg/arrow";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import picture1 from "../../../public/favourite/profile_6.JPG";

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
      .timeline()
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
      // .to(
      //   ".revealer_1",
      //   {
      //     top: "100%",
      //     height: "100%",
      //     ease: "power3.inOut",
      //     duration: 1.2,
      //   },
      //   6
      // )
      // .to(
      //   ".revealer_2",
      //   {
      //     height: "100%",
      //     top: "100%",
      //     duration: 0.6,
      //     ease: "power3.out",
      //   },
      //   6.09
      // )
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
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
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
        7.6
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
       { y: 140, opacity: 0 },
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
        className="min-h-[100vh] py-20 flex items-center justify-center"
      >
        <div className="w-full md:w-[850px] mx-auto px-2 max-w-custom_1">
          <div className="flex flex-col mx-auto justify-between gap-y-16 gap-x-20 w-[90%]">
            <div className="flex w-full flex-col gap-16">
              <span
                data-scroll
                data-scroll-speed="2"
                className="font-normal titleRef text-text_dark_1 uppercase text-[3rem] sm:text-[7rem] md:text-[8rem] w-full leading-[1] font-portfolio_bold1"
              >
                Creative
                <br />
                FULLSTACK
                <br />
                Developer
              </span>
            </div>
            <div className="w-full">
              <div className="w-full h-[300px] md:h-[580px]">
                <img
                  // ref={imageRef}
                  src={"../../../public/favourite/profile_3.JPG"}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h4 className="text-xl hero_text_2 lg:text-4xl text-text_dark_1 w-[90%] leading-[1.5] font-normal font-portfolio_semibold">
              I AM A CATALYST FOR CREATIVE DEVELOPMENT FOR AGENCIES AND
              INDUSTRIES
            </h4>
            <h1
              data-scroll
              data-scroll-speed="2"
              className="hero_text_3 font-normal text-text_dark_1 uppercase text-4xl sm:text-8xl md:text-[8rem] w-full leading-[1] font-portfolio_bold1"
            >
              BASED IN
              <br />
              NIGERIA
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

// <div className="w-full m-auto px-4 md:px-8 max-w-custom_1">
//   <div className="grid grid-cols-1 md:grid-cols-1 justify-between gap-y-16 gap-x-20 w-[90%] lg:w-[1000px]">
//     <div className="flex w-full flex-col gap-16">
//       <h1
//         data-scroll
//         data-scroll-speed="2"
//         className="font-extrabold text-text_dark_1 uppercase text-4xl sm:text-6xl  md:text-[8rem] leading-[1] font-portfolio_bold1"
//       >
//         <span className="overflow-hidden">
//           <span className="titleRef" ref={titleRef}>
//             Creative Developer
//           </span>
//         </span>
//         <span
//           data-scroll
//           ref={heroTextRef_3}
//           data-scroll-speed="1.5"
//           className="flex items-center gap-6 text-sm font-normal font-portfolio_semibold md:text-lg mt-4"
//         >
//           ( Full-Stack React-typescript Developer )
//           {/* <span><Arrow /></span> */}
//         </span>
//       </h1>

//       <h4
//         ref={descriptionRef}
//         style={{ fontKerning: "none" }}
//         className="text-xl md:text-2xl text-text_dark_1 w-[600px] leading-[1.5] uppercase font-normal font-portfolio_semibold"
//       >
//         I collaborate with brands globally to design impactful, mission-focused
//         websites that drive results and achieve business goals
//       </h4>
//     </div>
//     <div className="w-full">
//       {/* ref={imageRef} */}
//       <div className="w-[680px] h-[400px]">
//         <img
//           src={"../../../public/favourite/profile_4.JPG"}
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="w-full py-24 grid grid-cols-1 md:grid-cols-custom_2 items-start lg:items-center gap-12 flex-col justify-between md:flex-row">
//     <div className="flex items-center gap-6 lg:gap-20">
//       <span>
//         <Arrow />
//       </span>

// <h4
//   ref={heroTextRef_2}
//   style={{ fontKerning: "none" }}
//   className="text-lg lg:text-xl text-text_dark_1 w-[90%] leading-[1.5] font-normal font-portfolio_semibold"
// >
//   I AM A CATALYST FOR CREATIVE DEVELOPMENT FOR AGENCIES AND INDUSTRIES
// </h4>
//     </div>
//     <h1
//       data-scroll
//       ref={heroTextRef_2}
//       style={{ fontKerning: "none" }}
//       data-scroll-speed="4"
//       className="font-normal heroTitle text-text_dark_1 uppercase text-6xl text-end w-full lg:text-8xl leading-[1.4] lg:leading-[1] font-portfolio_bold"
//     >
//       VICTOR ESSIEN
//     </h1>
//   </div>
// </div>;
