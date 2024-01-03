import React, { useLayoutEffect, useRef, useCallback } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { opacity, slideup, imageSlideDown } from "../../anim";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Header from "../common/Header";
const Hero = () => {
  const ref = useRef();

  const herotextArray = [
    "I’m",
    "Victor Essien",
    "a",
    "freelance", 
    " Software",
    "developer",
    "currently",
    " residing",
    "in Lagos",
    "Nigeria",
  ];

  const heroparagraphTextArray = [
    " My experience comes from working with companies to",
    "solve problems on their product and help them ship",
    "redesign, alpha products or new features. One of",
    " my goals during a project is to make sure we are",
    " always on the same page by documenting and",
    "communicating about the journey",
  ];

  // useLayoutEffect(() => {
  //   new SplitType(".about_hero_text");
  //   gsap
  //     .timeline()
  //     .fromTo(
  //       ".about_span",
  //       { opacity: 0 }, // Initial skewY value
  //       {
  //         opacity: 1,
  //         duration: 1,
  //         delay: 0.4,
  //         ease: "power4.Out",
  //         stagger: {
  //           amount: 0.3,
  //         },
  //       }
  //     )
  //     .fromTo(
  //       ".line .word",
  //       { skewY: 65, y: 870 }, // Initial skewY value
  //       {
  //         skewY: 0,
  //         y: 0,
  //         duration: 3,
  //         delay: 0.3,
  //         ease: "power4.Out",
  //         stagger: {
  //           amount: 0.3,
  //         },
  //       }
  //     );
  // }, []);
  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: .6,
    delay: 4,
  });
  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <HeroStyles className="flex column w-100 item-center justify-center">
      {/* top section */}
      <Header text={'Home'} path={'/'} />
      {/* center section */}
      <div className="w-100 hero_center">
        <div className="about_hero_wrapper auto flex item-start column gap-2">
          <div className="flex item-center gap-2">
            <div className="hidden">
              <span className="block about_span fs-18 text-extra-bold">
                About & Services
              </span>
            </div>
          </div>
          <h1 className="about_hero_text">Hello ! I'm Victor</h1>
          <h2 className="fs-60 about_hero_text w-100 text-bold">
            I’m Building Digital Experience & Interface
          </h2>
          <div className="hero_c_Bottom flex item-start gap-4">
            <div
              ref={setRefs}
              className="flex-1 hero_c_Bottom_left flex column gap-2"
            >
              <h4 className="fs-30 text-extra-bold">
                {herotextArray.map((word, index) => {
                  return (
                    <span className="mask">
                      <motion.span
                        key={index}
                        custom={index}
                        variants={opacity}
                        initial={"initial"}
                        animate={inView ? "open" : "closed"}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </h4>
              {/* // */}
              <p className="fs-20 text-light text-grey">
                {/* My experience comes from working with companies to solve
                problems on their product and help them ship redesign, alpha
                products or new features. One of my goals during a project is to
                make sure we are always on the same page by documenting and
                communicating about the journey. */}

                {heroparagraphTextArray.map((word, index) => {
                  return (
                    <span className="mask">
                      <motion.span
                        key={index}
                        custom={index}
                        variants={slideup}
                        initial={"initial"}
                        animate={inView ? "open" : "closed"}
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </p>{" "}
            </div>

            <div className="flex-1 picture_background relative">
              {/* <div className="image_background w-100"></div> */}
              <div className="w-100 hidden">
                <motion.img
                  variants={imageSlideDown}
                  initial={"initial"}
                  animate={inView ? "open" : "closed"}
                  src="/eddy.jpeg"
                  alt=""
                  className="w-100"
                ></motion.img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

const HeroStyles = styled.div`
  width: 100%;
  z-index: 45;
  position: relative;
  .line {
    overflow: hidden !important;
  }
  .about_hero_wrapper {
    width: 90%;
    max-width: 1496px;
    padding: 0 6rem;
    @media (max-width: 980px) {
      padding: 0;
    }

    @media (max-width: 680px) {
      padding: 0;
    }
  }
  .hero_top {
    padding: 2rem 0;
    .hero_top_wrapper {
      padding: 2rem 0;

      justify-content: space-between;
      .hero_top_wrapper_left {
        justify-content: flex-end;
      }
    }
  }
  .picture_background {
    .image_background {
      background: rgba(41, 59, 81, 0.225);

      z-index: 45;
    }
  }
  img {
    height: 100%;
    object-fit: cover;
    z-index: 45;
  }
  h4 {
    line-height: 1.8;
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 0.7rem;
    }
  }

  h1 {
    font-size: 13rem;
    line-height: 9.4vw;
    text-rendering: optimizeLegibility;
    width: 100%;
    font-family: "CustomFont_", sans-serif;
    font-weight: light;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: 1px #fff;
    -webkit-text-stroke: 1px #cecae3;
    color: rgba(0, 0, 0, 0) !important;
    line-height: 1.1;

    @media (max-width: 980px) {
      font-size: 7.5rem;
    }
  }
  .hero_center {
    padding: 8rem 4rem;
    @media (max-width: 1080px) {
      padding: 4rem 2rem;
    }
    @media (max-width: 580px) {
      padding: 2rem;
    }

    .span_length {
      width: 100px;
      height: 1px;
      background: rgba(255, 255, 255, 0.6);
      @media (max-width: 580px) {
        width: 70px;
      }
    }
    .hero_c_Bottom {
      /* width: 55%; */
      margin-top: 10rem;
      gap: 6rem;
      align-items: flex-start;
      @media (max-width: 980px) {
        width: 95%;
        gap: 3rem;
        margin-top: 4rem;
      }

      @media (max-width: 780px) {
        width: 95%;
        gap: 3rem;
        flex-direction: column;
      }
      .hero_c_Bottom_left {
        width: 55%;
        @media (max-width: 780px) {
          width: 90%;
          flex-direction: column;
        }
      }

      .hero_c_Bottom {
        width: 55%;
        @media (max-width: 780px) {
          width: 90%;
          flex-direction: column;
        }
      }
      p {
        line-height: 1.8;
        @media (max-width: 980px) {
          font-size: 16px;
          line-height: 1.8;
        }
        .mask {
          display: inline-flex;
          overflow: hidden;
          margin-right: 0.7rem;
          @media (max-width: 980px) {
            margin-right: 0.2rem;
          }
        }
      }
    }
    .about_span {
      color: rgb(238, 161, 190);
      @media (max-width: 580px) {
        font-size: 14px;
      }
    }
    h2 {
      font-size: 8.6rem;
      @media (max-width: 1080px) {
        font-size: 6rem;
      }
      @media (max-width: 780px) {
        font-size: 4rem;
      }
    }
  }
`;

export default Hero;
