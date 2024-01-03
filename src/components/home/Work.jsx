import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectdata } from "../../data/projectdata";
import Card from "./Card";
import { slideup } from "../../anim";

const Work = () => {
  const phrases = ["Case", "Study", "&", "Projects"];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // console.log(inView);
  return (
    <WorkStyles>
      <div className="w-100 flex item-center justify-center">
        <div className="w-90 auto flex flex item-center justify-center column gap-2">
          <h3 className="text-dark text-extra-bold">
            {phrases.map((word,index) => {
              return (
                <span ref={ref} className="mask">
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
          </h3>
          <div className="w-100 project_container flex item-start column">
            <div className="project_wrapper w-100">
              <div className="w-100"></div>
              <Card index={0} />
            </div>

            <div className="skills_wrapper w-100">
              <Card index={3} />
              <Card index={2} />
            </div>

            <div className="skills_wrapper w-100">
              <Card index={1} />
              {/* <div className="w-100"></div> */}
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
  .subtext {
    width: 50%;
    font-size: 4.5rem !important;
    top: -20%;
    left: -10%;
    z-index: 30;
    @media (max-width: 780px) {
      top: -20%;
      left: 5%;
      font-size: 4rem !important;
    }
  }
  .image_background {
    background: rgba(41, 59, 81, 0.225);

    z-index: 10;
  }
  h3 {
    line-height: 1.1;
    padding-right: 5rem !important;
    width: 100%;
    font-size: 4rem;
    .mask {
      display: inline-flex;
      overflow: hidden;
      margin-right: 1.5rem;
    }
  }
  .span_length {
    width: 50px;
    height: 1px;
    background: rgba(0, 0, 0, 0.419);
    @media (max-width: 780px) {
      width: 70px;
    }
  }
  .card_btn1 {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.7s ease;
    position: relative;
    @media (max-width: 780px) {
      width: 6rem;
      height: 6rem;
      .text1 {
        font-size: 13px;
      }
    }

    border: 1px solid rgba(0, 0, 0, 0.3);
    .text1 {
      z-index: 10;
      color: #fff;
    }
    &:is(:hover, :focus-visible)::before {
      bottom: 20%;
      transform: translateX(-50%) scale(1.4);
      color: #fff;
      .text1 {
        color: #fff !important;
      }
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -200%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 70%;
      border-radius: 100%;

      background-color: #ededefc5;
      /* Add more styles for the card here */
      transition: all 1s ease;
      z-index: 1;
      padding: 2rem;
    }
  }
  .card {
    background-color: #f7f7f7;
    transition: all 0.5s;
    &.active {
      margin-top: 16rem;
      @media (max-width: 780px) {
        margin-top: 0;
      }
    }
    &:hover {
      transform: translateY(-50px);
      .card_bottom {
        background: #8c85f345;
      }
    }
    .card_bottom {
      padding: 6rem 1rem;
      border-top: none;
      transition: all 0.5s;
      @media (max-width: 780px) {
        padding-left: 1rem;
      }
    }
    .tab {
      padding: 8px 10px;
      background: var(--grey-1);
      border-radius: 45px;
    }
    h3 {
      font-size: 3rem;
    }
    p {
      line-height: 1.8;
      @media (max-width: 780px) {
        font-size: 1.4rem;
      }
    }
    .image_wrapper {
      img {
        object-fit: cover;
        /* width:300px !important; */
      }
    }
  }
  .skills_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  .project_wrapper {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Work;
