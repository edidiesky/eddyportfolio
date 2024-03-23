import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

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
        text?.words,
        { y: 38, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1,
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
      // gsap.set(textrefelement_1, { y: 40 });
      gsap.fromTo(
        textrefelement_1,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 2.3,
          ease: "power4.out",

          scrollTrigger: {
            trigger: textrefelement_1,
            start: "top bottom-=200",
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

  // purposeful, proacitve predetermined and driven

  return (
    <>
      <div data-scroll className="py-20 z-50">
        <div className="w-full md:w-[800px] mx-auto px-8 m-auto max-w-custom grid grid-cols-1 lg:grid-cols-custom_3 gap-16 ">
          <div className="w-full">
            <h3
              ref={numberref}
              data-scroll
              data-scroll-speed="-0.08"
              className="text-3xl font-portfolio_bold1 text-text_dark_1"
            >
              01 /
            </h3>
          </div>
          <div className="w-full flex flex-col gap-16">
            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-xl md:text-2xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 "
            >
              PASSIONATE ABOUT WEB TECHNOLOGIES AND ELECTRICAL ENGINEERING. I
              LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY
              INTERFACES . I CREATE MEMORABLE WEB EXPERIENCES.
            </h4>
            <h4
              // data-scroll
              // data-scroll-speed="5"
              ref={addtoRefs}
              className="about_text1 w-full md:w-[90%] text-xl md:text-2xl leading-[1.2] font-portfolio_bold1 text-text_dark_1 "
            >
              WHEN I AM NOT DEVELOPING WEB INTERFACES I AM WORKING AND
              RESEARCHING ON MY ENGINERRING THESIS
            </h4>
            <div className="w-full lg:w-[100%] grid-cols-1 grid py-5 gap-12 md:grid-cols-custom_2">
              <div className="w-full flex-col gap-12">
                <div
                  // ref={imageRef}
                  className="w-[100%] h-[320px] md:h-[250px]"
                >
                  <img
                    src={"./profile_6.JPG"}
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
                  className="about_text1 w-full text-xl leading-[1.6] font-light text-text_dark_1 font-portfolio_semibold"
                >
                  A blend of Product Engineering and Electrical engineering.
                </h5>
                <h4
                  // data-scroll
                  // data-scroll-speed="5"
                  ref={addtoDescriptionRefs}
                  className="about_text1 w-full text-xl leading-[1.6] font-light font-portfolio_semibold text-text_dark_1 "
                >
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals. I have years of experience working and
                  collaborating on product teams and leading engineering
                  efforts.
                </h4>

                {/* <h4
                  // data-scroll
                  // data-scroll-speed="5"
                  ref={addtoDescriptionRefs}
                  className="about_text1 w-full text-xl leading-[1.6] font-light font-portfolio_bold1 text-text_dark_1 "
                >
                  With a background in design, I work closely with design
                  focused teams to build websites and microsites for companies
                  and individuals. I have years of experience working and
                  collaborating on product teams and leading engineering
                  efforts.
                </h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
