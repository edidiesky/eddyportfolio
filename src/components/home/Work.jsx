import React from "react";
import styled from "styled-components";
import { projectdata } from "../data/project";
import Card from "./Card";

const Work = () => {
  return (
    <WorkStyles>
      <div className="w-100 flex item-center justify-center">
        <div className="w-90 auto flex flex item-center justify-center column gap-2">
          <h2 className="">
            Case Studies <br /> & Projects
          </h2>
          <div className="w-100 project_container flex item-start column">
            <div className="project_wrapper w-100">
              <div className="w-100"></div>
              <Card index={0} />
            </div>

            <div className="skills_wrapper w-100">
              <Card index={1} />
              <Card index={2} />
            </div>

            <div className="skills_wrapper w-100">
              <Card index={4} />
              <Card index={3} />
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
    top: -30%;
    left: -10%;
    z-index: 30;
  }
  .image_background {
    background: rgba(9, 5, 59, 0.221);
    z-index: 10;
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
  .span_length {
    width: 50px;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    @media (max-width: 580px) {
      width: 70px;
    }
  }
  .card {
    &.active {
      margin-top: 16rem;
      @media (max-width: 780px) {
        margin-top: 0;
      }
    }
    .card_bottom {
      padding: 6rem 4rem;
      padding-left: 7rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .tab {
      padding: 8px 10px;
      background: #2f2f2f;
      border-radius: 45px;
    }
    h3 {
      font-size: 3.5rem;
    }
    p {
      line-height: 1.8;
    }
    .image_wrapper {
      height: 30rem;
      img {
        object-fit: cover;
      }
    }
  }
  .skills_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }

  .project_wrapper {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Work;
