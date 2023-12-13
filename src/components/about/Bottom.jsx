import React from "react";
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import Arrow from "../../assets/svg/arrow";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Bottom = () => {
  return (
    <WorkStyles>
      <div className="skills_wrapper w-100">
        <div className="services_right w-90 auto">
          <div className="w-85 auto services_left_wrapper flex column gap-3 justify-center">
            <span className="block fs-16 text-extra-bold">
              Let us work together
            </span>
            <h3 className="text-white fs-50 text-extra-bold">
              Interested ? <br /> Lets Get In Touch !
            </h3>
            <p className="text-light text-grey fs-20">
              I’m open to freelance opportunities or remote position. Also feel
              free to reach out if you need a hand on your side / open source
              project. I’d would love to help
            </p>
            <p className="text-light w-85 text-grey fs-20">
              I’m not really active on{" "}
              <Link to={"/"} className="span_highlight">
                Linkedin
              </Link>{" "}
              and{" "}
              <Link to={"/"} className="span_highlight">
                Facebook
              </Link>{" "}
              but you can stay in touch with me on{" "}
              <Link to={"/"} className="span_highlight">
                Twitter
              </Link>
              . Most of works can also be on found on my{" "}
              <Link to={"/"} className="span_highlight">
                Github
              </Link>{" "}
              page.
            </p>
            <Button/>
          </div>
        </div>
        <div className="skills_left"></div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  padding: 2rem 0;
  padding-bottom: 7rem;
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
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 6rem;
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
      padding: 4rem 6rem;
      padding-top: 9rem;
    }
    .services_left {
      padding: 4rem 3rem;
      background-color: #eea1be;
      .services_left_wrapper {
        padding-top: 4rem;
        padding-bottom: 4rem;
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

export default Bottom;
