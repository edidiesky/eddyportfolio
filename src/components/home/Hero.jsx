import { IoMdMail } from "react-icons/io";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";
import Header from "../common/Header";
const Hero = () => {
  useLayoutEffect(() => {
    new SplitType(".heroText");
    gsap
      .timeline()
      .fromTo(
        ".line .word",
        { skewY: 65, y: 870 }, // Initial skewY value
        {
          skewY: 0,
          y: 0,
          duration:2.8,
          delay: 4,
          ease: "power4.Out",
          stagger: {
            amount: 0.5,
          },
        }
      )

  }, []);
  return (
    <HeroStyles className="flex column w-100 item-center justify-center">
      {/* top section */}
      <Header />
      {/* center section */}
      <div className="w-100 hero_center">
        <div className="w-85 auto flex item-start column gap-2">
          <div className="flex item-center gap-2">
            <span className="block fs-16 text-extra-bold">
              I'm Victor Essien
            </span>
            <div className="span_length"></div>
            <span className="block fs-16 text-extra-bold">
              Available For Freelance Work
            </span>
          </div>
          <h2 className="fs-60 heroText w-100 text-bold">
            I'm Freelance Full Stack Developer Turning Your Paperball Into
            Paperplane
          </h2>
          <div className="hero_c_Bottom">
            <p className="fs-20 heroText text-light text-grey">
              I help companies to design digital products and turn ideas into a
              functional and delightful experience. I’m focusing on working on
              interface and digital design – mainly building products, branding
              and websites.
            </p>{" "}
            <div className="w-100 flex item-center btn_wrapper">
              <div className="btn_left flex item-center justify-center">
                <div className="icon flex item-center justify-center">
                  <IoMdMail fontSize={"20px"} color="#fff" />
                </div>
              </div>
              <div className="btn_right flex item-center justify-center">
                <h4 className="block fs-18 text-extra-bold">
                  hello@eddiongessien.com
                </h4>
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
  .line {
    overflow:hidden !important;
  }
  .hero_top {
    padding: 2rem 0;
    .icon {
      transition: all 0.5s;
      cursor:pointer;
      width: 4rem !important;
      height: 4rem !important;
      &:hover {
        background: var(--grey-1);
      }
    }
    .hero_top_wrapper {
      padding: 2rem 0;

      justify-content: space-between;
      .hero_top_wrapper_left {
        justify-content: flex-end;
      }
    }
  }
  .hero_center {
    padding: 8rem 0;
    .span_length {
      width: 100px;
      height: 1px;
      background: rgba(255, 255, 255, 0.6);
      @media (max-width: 580px) {
        width: 70px;
      }
    }
    .hero_c_Bottom {
      width: 55%;

      .btn_wrapper {
        margin-top: 4rem;
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
      @media (max-width: 780px) {
        width: 90%;
      }
      p {
        line-height: 1.8;
        @media (max-width: 580px) {
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
