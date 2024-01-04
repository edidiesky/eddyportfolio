import React, { useRef, useCallback } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import { slideup } from "../../anim";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Arrow from "../../assets/svg/arrow";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Services = () => {
  const ref = useRef();
  const phrases = ["Services", "&", "Contact"];
  const experience = [
    "I",
    "building ",
    "digital",
    "product",
    "and",
    "experience",
  ];

  const experienceDetails = [
    "Focused",
    "on",
    "full",
    "software",
    "development",
    "of",
    "web",
    "applications",
    "over",
    "the",
    "years",
    "I",
    "helped",
    "companies ",
    "and",
    "growing",
    "startups",
    "build",
    "websites",
    "of",
    "all",
    " sorts",
  ];

  const { ref: inViewRef, inView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: 0.7,
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

  // useLayoutEffect(() => {
  //   new SplitType(".paragraphtext");

  // }, []);
  return (
    <WorkStyles>
      <div className="w-100 Services flex item-start column gap-4">
        <div className="skills_wrapper item-start w-100">
          <div ref={setRefs} className="services_left w-100">
            <div className="w-85 auto services_left_wrapper flex column gap-4 justify-center">
              <h3 className="text-dark fs-35 text-extra-bold">
                I building digital product and experience
              </h3>
              <p className="text-light paragraphtext text-dark fs-20">
                {/* {experienceDetails.map((word, index) => {
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
                })} */}
                Focused on full software development of web applications over
                the years I helped companies and growing startups build websites
                of all sorts
              </p>
              <div className="services_left_wrapper_bottom w-100 flex column gap-4">
                <div className="lenght w-100"></div>
                <Link
                  to={"/about"}
                  className="w-100 flex about item-center gap-1 justify-end"
                >
                  <h4 className="fs-16 text-extra-bold text-dark">
                    About & Services
                  </h4>
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
          <div className="services_right w-90 auto">
            <div className="w-85 auto services_left_wrapper flex column gap-1 justify-center">
              <span className="block fs-16 text-extra-bold">Contact</span>
              <h3 className="fs-50 text-extra-bold">
                <span className="mask">
                  {/* <motion.span
                    variants={slideup}
                    initial={"initial"}
                    animate={inView ? "open" : "closed"}
                  >
                    Interested ?
                  </motion.span> */}
                  Interested ?
                </span>{" "}
                <br />
                <span className="mask">
                  Lets Get In Touch !
                  {/* <motion.span
                    variants={slideup}
                    initial={"initial"}
                    animate={inView ? "open" : "closed"}
                  >
                    Lets Get In Touch !
                  </motion.span> */}
                </span>
              </h3>
              <h5 className="text-light w-85 text-dark fs-18">
                {/* {experienceDetails.map((word, index) => {
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
                })} */}
                Focused on full software development of web applications over
                the years I helped companies and growing startups build websites
                of all sorts
              </h5>
              <div className="w-100">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  padding: 4rem 0;
  padding-bottom: 7rem;
  .project_container {
    margin-top: 14rem;
    gap: 12rem;
  }
  /* p {
    line-height: 1.4;
    @media (max-width: 780px) {
      font-size: 1.6rem;
    }
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 0.7rem;
    }
  } */

  h3 {
    @media (max-width: 780px) {
      font-size: 3.5rem;
    }
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 0.7rem;
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
    grid-template-columns: 0.6fr 1fr;
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
      @media (max-width: 780px) {
        width: 100%;
      }
    }
    .services_left {
      padding: 4rem 3rem;
      background-color: #eea1be;
      @media (max-width: 780px) {
        width: 100%;
        padding: 4rem 2rem;
      }
      .services_left_wrapper {
        padding-top: 4rem;
        padding-bottom: 4rem;
        @media (max-width: 780px) {
          width: 100% !important;
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
`;

export default Services;
