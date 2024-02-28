import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import picture1 from "../../../public/profile_2.jpg";


const Cta = () => {
  const refs = useRef([]);
  refs.current = [];

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
          duration:2,
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

  return (
    <>
      <div data-scroll className="py-32">
        <div className="w-full px-8 m-auto max-w-custom grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
          <div className="w-full">
            <h3
              ref={numberref}
              data-scroll
              data-scroll-speed="-0.08"
              className="text-3xl font-portfolio_bold1 text-white"
            >
              01 /
            </h3>
          </div>
          <div className="w-full flex flex-col gap-16">
            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-2xl md:text-3xl lg:text-4xl leading-[1.2] font-portfolio_bold1 text-white "
            >
              PASSIONATE ABOUT WEB TECHNOLOGIES AND ELECTRICAL ENGINEERING. I
              LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY
              INTERFACES . I CREATE MEMORABLE WEB EXPERIENCES.
            </h4>
            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-2xl md:text-3xl lg:text-4xl leading-[1.2] font-portfolio_bold1 text-white "
            >
              WHEN I AM NOT DEVELOPING WEB INTERFACES I AM WORKING AND
              RESEARCHING ON MY ENGINERRING THESIS
            </h4>
            <div className="w-full lg:w-[80%] grid-cols-1 grid py-5 gap-12 md:grid-cols-custom_2">
              <div className="w-full flex-col gap-12">
                <div
                  // ref={imageRef}
                  className="w-[100%] h-[350px] md:h-[360px]"
                >
                  <img
                    src={"/public/favourite/profile_4.jpg"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-12">
                <h5
                  // data-scroll
                  // data-scroll-speed="5"
                  ref={descriptionrefs1}
                  className="about_text1 w-full text-lg lg:text-2xl leading-[1.6] font-light text-white font-portfolio_semibold"
                >
                  A blend of Product Engineering and Electrical engineering.
                </h5>
                <h4
                  // data-scroll
                  // data-scroll-speed="5"
                  ref={addtoDescriptionRefs}
                  className="about_text1 text-lg lg:text-2xl leading-[1.6] font-light font-portfolio_semibold text-white "
                >
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals. I have years of experience working and
                  collaborating on product teams and leading engineering
                  efforts.
                </h4>

                <h4
                  // data-scroll
                  // data-scroll-speed="5"
                  ref={addtoDescriptionRefs}
                  className="about_text1 text-lg lg:text-2xl leading-[1.6] font-light font-portfolio_semibold text-white "
                >
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals. I have years of experience working and
                  collaborating on product teams and leading engineering
                  efforts.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
