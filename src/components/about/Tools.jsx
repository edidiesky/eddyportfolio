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
const Tools = () => {
  return (
    <WorkStyles>
      <div className="w-100 Tools flex item-center column justify-center">
        <div className="w-90 auto flex flex item-center justify-center column gap-2">
          <h2 className="w-100">
            Tech <br /> Tools
          </h2>
        </div>
        <div className="skills_wrapper item-start w-100">
          <div className="services_right w-90 auto">
            <div className="w-85 auto services_left_wrapper flex column gap-4 justify-center">
              <h3 className="text-white fs-30 text-extra-bold">
                Using the right tools with a well structured process leads to
                the collaboration’s success
              </h3>
              <ul
                className="w-100 flex item-start gap-4"
              >
                {toolsdata?.map((x, index) => {
                  return (
                    <li className="flex fs-20 text-extra-bold text-white column gap-3">
                      <div className="number fs-16 text-extra-bold text-white flex item-center">
                        {index + 1}
                      </div>
                      {x}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  padding-bottom: 7rem;
  .Tools {
    margin: 120px 0 40px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 7rem;
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

    @media (max-width: 980px) {
      width: 90%;
      grid-template-columns: 1fr;

      margin: 0 auto;
    }
    .services_right {
      padding: 0 4rem;
      padding-top: 4rem;
      width: 70%;
      margin-left: 140px;

      @media (max-width: 980px) {
        width: 90%;
        margin: 0 auto;
        margin-left: 40px;
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

export default Tools;
