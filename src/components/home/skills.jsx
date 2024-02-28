import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import picture1 from "../../../public/profile_2.jpg";
const skillslist = [
  "TYPESCRIPT",
  "NODEJS",
  "EXPRESSJS",
  "REACT",
  "TAILWIND.CSS",
  "SOLANA",
  "HTML",
  "NEXTJS",
  "GIT",
  "GSAP",
  "FRAMER-MOTION",
];
const Skills = () => {
  const refs = useRef([]);
  refs.current = [];

  const headerref = useRef([]);
  headerref.current = [];

  const descriptionrefs1 = useRef(null);
  const numberref = useRef(null);
  const descriptionrefs2 = useRef([]);
  descriptionrefs2.current = [];

  useLayoutEffect(() => {
    refs.current.forEach((ref, index) => {
      const text = new SplitType(ref);
      const textrefelement_1 = text?.words;
      const textrefelement_2 = text?.words;
      gsap.fromTo(
        index === 1 ? textrefelement_1 : textrefelement_2,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text?.words,
          },
        }
      );
    });

    descriptionrefs2.current.forEach((ref) => {
      const text = new SplitType(ref);
      const textrefelement_1 = text?.lines;
      gsap.fromTo(
        textrefelement_1,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 2,
          ease: "power3.out",

          scrollTrigger: {
            trigger: textrefelement_1,
            start: "top bottom-=100",
          },
        }
      );
    });

    const text2 = new SplitType(descriptionrefs1?.current);
    const textrefelement_2 = text2?.words;

    const numberref1 = new SplitType(numberref?.current);
    const numberrefelement = numberref1?.words;
    gsap.fromTo(
      numberrefelement,
      { opacity: 0, x: -100 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.13,
        // delay:1,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: numberrefelement,
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

  const addtoRefs = (ref) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref);
    }
  };

  const addtoDescriptionRefs = (ref) => {
    if (ref && !descriptionrefs2.current.includes(ref)) {
      descriptionrefs2.current.push(ref);
    }
  };

  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };

  return (
    <>
      <div data-scroll className="py-32 flex flex-col gap-20">
        {/* <div className="w-full px-8 m-auto max-w-custom">
          <h3 className="text-sm md:text-lg font-portfolio_bold text-white w-full gap-2 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
            <span ref={adHeaderdRefs}>03/</span>
            <span ref={adHeaderdRefs}>Skills?</span>
            <span ref={adHeaderdRefs}>TECHNOLOGIES</span>
          </h3>
        </div> */}
        <div className="w-full px-8 m-auto max-w-custom items-start grid grid-cols-1 lg:grid-cols-custom_ gap-16 ">
          <div className="w-full">
            <h3 className="text-sm md:text-lg font-portfolio_bold text-white w-full gap-2 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
              <span ref={adHeaderdRefs}>Skills</span>
            </h3>
          </div>
          <div className="w-full flex flex-col items-end justify-end gap-4">
            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-2xl md:text-end md:text-3xl lg:text-6xl border-b border-[rgba(255,255,255,.09)] pb-4 leading-[1.2] font-portfolio_bold1 text-white "
            >
              FRONTEND DEVELOPMENT
            </h4>

            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-2xl md:text-end md:text-3xl lg:text-6xl border-b border-[rgba(255,255,255,.09)] pb-4 leading-[1.2] font-portfolio_bold1 text-white "
            >
              BACKEND DEVELOPMENT
            </h4>
          </div>
        </div>
        {/* <div className="w-full px-8 m-auto max-w-custom grid grid-cols-1 lg:grid-cols-custom_2 gap-16 ">
          <div className="w-full">
            <h3 className="text-sm md:text-lg font-portfolio_bold text-white w-full gap-2 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
              <span ref={adHeaderdRefs}>TECHNOLOGIES</span>
            </h3>
          </div>
          <div className="w-full flex flex-col items-end justify-end gap-4">
            {skillslist?.map((x, index) => {
              return (
                <h4
                  // data-scroll
                  // data-scroll-speed="5"
                  key={index}
                  ref={addtoRefs}
                  className="about_text1 w-full md:w-[90%] text-xl md:text-2xl lg:text-2xl border-b border-[rgba(255,255,255,.09)] pb-4 leading-[1.2] font-portfolio_bold1 text-white "
                >
                  PROFICIENCY IN - {x}
                </h4>
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Skills;
