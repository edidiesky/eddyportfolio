import React from "react";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import { projectdata } from "../data/project";

const toolsdata = [
  "Javascript",
  "Css",
  "Git",
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
            <div className="w-90 auto services_left_wrapper flex column gap-4 justify-center">
              <div className="flex column gap-3 w-100">
                <h3 className="text-white fs-30 text-extra-bold">
                  Using the right tools with a well structured process leads to
                  the collaboration’s success
                </h3>
                <p className="text-light text-grey fs-18 block py-1">
                  Development and design can feed and learn one from each other
                  in any project. Hybrid professionals that understand and can
                  communicate with both ends have the key to a better work flow
                  in every environment.
                </p>

                <p className="text-light text-white fs-18 block py-1">
                  I believe more can be achieved when both ends meet, and I have
                  a passion for being right where they do so.
                </p>
              </div>
              <div className="w-100 flex column gap-3">
                <h3 className="text-white fs-16 text-extra-bold">
                  FULL STACK DEVELOPMENT
                </h3>
                <div className="w-100 list flex item-start gap-1">
                  {toolsdata?.map((x, index) => {
                    return (
                      <span className="fs-14 tab text-light text-white">
                        {x}
                      </span>
                    );
                  })}
                </div>
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
  /* transform: translateY(-30%); */
  @media (max-width: 980px) {
    transform: translateY(0%);
  }
  .Tools {
    margin: 120px 120px !important;
    @media (max-width: 1080px) {
      margin: 120px 50px !important;
    }
  }
  .services_left_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: flex-start;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  p {
    line-height: 1.8;
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
      width: 80%;

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
  .tab {
    padding: 8px 10px;
    background: var(--grey-1);
    border-radius: 45px;
    color: #fff !important;
  }
`;

export default Tools;
