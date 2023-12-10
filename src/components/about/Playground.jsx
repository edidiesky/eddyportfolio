import React from "react";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import { projectdata } from "../data/project";
import Card from "./Card";
import Arrow from "../../assets/svg/arrow";
import { Link } from "react-router-dom";

const toolsdata = [
  "React",
  "Tailwind",
  "Typescript",
  "Next.js",
  "Node.js",
  "Express.js",
  "Prisma",
  "Mongoose",
];
const Playground = () => {
  return (
    <WorkStyles>
      <div className="w-100 Playground flex item-center column justify-center">
        <div className="w-90 auto flex flex item-center justify-center column gap-2">
          <h2 className="w-100">
            Playground <br /> & Exploration
          </h2>
        </div>
        <div className="skills_wrapper item-start w-100">
          <div className="services_right w-90 auto">
            <div className="w-85 auto services_left_wrapper flex column gap-4 justify-center">
              <h3 className="text-white fs-30 text-extra-bold">
                Driven by a love of exploring new knowledge around design and
                more.
              </h3>
              <p className="fs-20 text-grey text-light">
                Collecting visual inspirations, learning new things and building
                projects are what filling my daily life.
              </p>
              <p className="fs-20 text-grey text-light">
                I tried to understand my learning process and want that there is
                something to learn from the start to the beginning. I’ve shared
                it further on Instagram or Codepen.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  /* transform: translateY(-30%); */
  @media (max-width: 980px) {
    transform: translateY(0%);
  }
  .Playground {
    margin: 120px 120px !important;
    @media (max-width: 1080px) {
      margin: 120px 50px !important;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 7rem;
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    }
  }
  .number {
    font-family: "Averta", sans-serif;
    color: #f3f2f4;
    font-size: 25px;
    background-color: #18033c;
    width: 80px;
    height: 80px;
    padding: 35px 20px 20px 20px;
    box-sizing: border-box;
    border-top-right-radius: 20px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  p {
    line-height: 1.8;
  }
  span {
    color: rgb(238, 161, 190);
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
    @media (min-width: 2080px) {
      width: 90%;
      max-width: 1496px;
      margin: 0 auto;
    }
    .services_left {
      @media (max-width: 780px) {
        display: none;
      }
    }
    @media (max-width: 980px) {
      width: 90%;
      grid-template-columns: 1fr;

      margin: 0 auto;
    }
    .services_right {
      padding: 0 4rem;
      padding-top: 4rem;
      width: 70% !important;
      margin-left: 140px;
      .services_left_wrapper {
        width: 50% !important;
        margin:0;
        @media (max-width: 980px) {
          width: 90%;
        }
      }
      @media (max-width: 980px) {
        width: 90%;
        margin: 0 auto;
        margin-left: 40px;
      }
      @media (max-width: 780px) {
        margin-left: 10px;
        padding: 4rem 0;
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

export default Playground;
