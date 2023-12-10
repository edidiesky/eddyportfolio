import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Header from "../common/Header";
const Hero = () => {
  return (
    <HeroStyles className="flex column w-100 item-center justify-center">
      {/* top section */}
      <Header/>
      {/* center section */}
      <div className="w-100 hero_center">
        <div className="about_hero_wrapper auto flex item-start column gap-2">
          <div className="flex item-center gap-2">
            <span className="block fs-18 text-extra-bold">
              About & Services
            </span>
          </div>
          <h1>Hello ! I'm Victor</h1>
          <h2 className="fs-60 w-100 text-bold">
            I’m Building Digital Experience & Interface
          </h2>
          <div className="hero_c_Bottom flex item-start gap-4">
            <div className="flex-1 hero_c_Bottom_left flex column gap-2">
              <h4 className="fs-30 text-extra-bold">
                I’m Victor Essien, a freelance Software developer currently
                residing in Lagos, Nigeria.
              </h4>
              <p className="fs-20 text-light text-grey">
                My experience comes from working with companies to solve
                problems on their product and help them ship redesign, alpha
                products or new features. One of my goals during a project is to
                make sure we are always on the same page by documenting and
                communicating about the journey.
              </p>{" "}
            </div>

            <div className="flex-1 picture_background relative">
              {/* <div className="image_background w-100"></div> */}
              <img src="/eddy.jpeg" alt="" className="w-100" />
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
  .about_hero_wrapper {
    width: 90%;
    max-width: 1496px;
    padding: 0 6rem;
    @media (max-width: 980px) {
      padding: 0 2rem;
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
      margin-top: 4rem;
      gap: 6rem;
      align-items: flex-start;
      @media (max-width: 780px) {
        width: 90%;
        flex-direction: column;
      }
      .hero_c_Bottom_left {
        width: 55%;
        @media (max-width: 780px) {
          width: 90%;
          flex-direction: column;
        }
      }

      .hero_c_Bottom_ {
        width: 55%;
        @media (max-width: 780px) {
          width: 90%;
          flex-direction: column;
        }
      }
      p {
        line-height: 1.8;
        @media (max-width: 980px) {
          font-size: 17px;
          line-height: 1.8;
        }
      }
    }
    span {
      color: rgb(238, 161, 190);
      @media (max-width: 580px) {
        font-size: 14px;
      }
    }
    h2 {
      font-size: 9rem;
      @media (max-width: 980px) {
        font-size: 7.5rem;
      }
      @media (max-width: 580px) {
        font-size: 5rem;
      }
    }
  }
`;

export default Hero;
