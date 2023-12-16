import React, { useLayoutEffect, useRef, useCallback } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { slideup, opacity } from "../../anim";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import Arrow from "../../assets/svg/arrow";
import { Link } from "react-router-dom";

const Services = () => {
  const ref = useRef();

  const heroparagraphTextArray = [
    "Over the past couple of years I have several",
    "organizations in building and devloping their",
    "products. I have collaborated with several",
    "freelancing developers like me to build wide product range. Working with other Full Stack",

    "developers to envison amazing products",
  ];

  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
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
    <WorkStyles>
      <div className="w-90 auto Services flex item-center column justify-center">
        <div className="skills_wrapper item-start w-100">
          <div className="services_left w-100">
            <div
              ref={setRefs}
              className="w-85 auto services_left_wrapper flex column gap-4 justify-center"
            >
              <h3 className="text-dark fs-40 text-extra-bold">
                <span className="mask">
                  <motion.span
                    variants={slideup}
                    initial={"initial"}
                    animate={inView ? "open" : "closed"}
                  >
                    Services
                  </motion.span>
                </span>
              </h3>
              <p className="text-light fs-20">
                {/* Over the past couple of years I have several organizations in
                building and devloping their products. I have collaborated with
                several freelancing developers like me to build wide product
                range. Working with other Full Stack developers to developers to
                envison amazing products */}
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
              </p>
              <div className="services_left_wrapper_bottom w-100 flex column gap-4">
                <div className="lenght w-100"></div>
                <div className="w-100 flex about item-center gap-1 justify-end">
                  <h4 className="fs-16 text-extra-bold text-dark">
                    About & Services
                  </h4>
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
          <div className="services_right w-90 auto">
            <div className="w-85 auto services_left_wrapper flex column gap-4 justify-center"></div>
          </div>
        </div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  z-index: 40;
  margin-top: -200px;
  @media (max-width: 1080px) {
    margin-top: 0px;
  }
  p {
    color: rgb(82, 67, 108);
  }
  .btn_wrapper {
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    height: 9rem;
    width: 90%;
    cursor: pointer;
    .btn_right {
      width: 80%;
      height: 100%;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
    }
    .btn_left {
      width: 20%;
      height: 100%;
    }
  }
  p {
    line-height: 1.8;
    @media (max-width: 980px) {
      font-size: 15px;
      line-height: 1.8;
    }
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 0.7rem;
    }
  }

  span {
    /* color: rgb(238, 161, 190); */
    @media (max-width: 580px) {
      font-size: 14px;
    }
  }
  .span_highlight {
    transition: all 0.5s;

    color: #fff;
    &:hover {
      color: rgb(238, 161, 190);
    }
  }

  .skills_wrapper {
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 5rem;
    place-items: start;
    @media (min-width: 2080px) {
      width: 90%;
      max-width: 1496px;
      margin: 0 auto;
    }

    @media (max-width: 980px) {
      width: 90%;
      grid-template-columns: 1fr;

      margin: 0 auto;
    }
    .services_right {
      padding: 4rem 0;
      padding-top: 9rem;
    }
    .services_left {
      padding: 4rem 3rem;
      background-color: #eea1be;
      z-index: 56;
      @media (max-width: 780px) {
        padding: 4rem 2rem;
      }

      .services_left_wrapper {
        padding: 4rem 8rem;
        padding-bottom: 4rem;
        @media (max-width: 980px) {
          padding: 4rem 1rem;
        }
        .services_left_wrapper_bottom {
          padding-top: 2rem;
          .about {
            cursor: pointer;
            .arrow {
              transition: all 0.5s;
            }
            &:hover {
              .arrow {
                transform: translateX(20px);
              }
            }
          }
          .lenght {
            height: 1px;
            background: var(--dark-1);
          }
        }
      }
    }
  }
  h2 {
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
    @media (max-width: 580px) {
      font-size: 5.5rem;
    }
  }
`;

export default Services;
