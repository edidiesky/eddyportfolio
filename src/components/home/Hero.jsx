import { IoMdMail } from "react-icons/io";
import React, { useLayoutEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";
import Header from "../common/Header";
import Button from "../common/Button";
import Plane from "../../assets/svg/plane";
const Hero = () => {
  // useLayoutEffect(() => {
  //   new SplitType(".heroText");
  //   gsap.timeline().fromTo(
  //     ".line .word",
  //     { skewY: 65, y: 870 }, // Initial skewY value
  //     {
  //       skewY: 0,
  //       y: 0,
  //       duration: 2.8,
  //       delay: 4,
  //       ease: "power4.Out",
  //       stagger: {
  //         amount: 0.5,
  //       },
  //     }
  //   );
  // }, []);
  const [state, setState] = React.useState({
    value: "essienedidiong1000@gmail.com",
    copied: false,
  });
  console.log(state.copied);
  return (
    <HeroStyles className="flex column w-100 item-center justify-center">
      {/* top section */}
      <Header text={"About & Services"} path={"about"} />
      {/* center section */}
      <div className="w-100 hero_center">
        <div className="w-85 auto hero_center_wrapper flex item-center justify-center column gap-2">
          <div className="flex hero_center_top item-center gap-1">
            <span className="block fs-16 text-extra-bold">
              I'm Victor Essien
            </span>
            <div className="span_length"></div>
            <span className="block fs-16 text-extra-bold">
              Available For Freelance Work
            </span>
          </div>
          <h2 className="heroText w-100 text-center text-extra-bold">
            I'm Freelance Full Stack Developer Turning Your Paperball Into
            Paperplane
          </h2>
          <div className="auto hero_bottom">
            <div className="hero_c_Bottom w-100 flex column item-start justify-center">
              <p className="fs-20 w-100 heroText text-start text-light text-dark">
                I help companies to design digital products and turn ideas into
                a functional and delightful experience. I’m focusing on working
                on interface and digital design – mainly building products,
                branding and websites.
              </p>{" "}
              <Button />
            </div>
            <div className="w-100">
              <div className="cubic_shape flex item-center justify-center">
                <div className="plane_wrapper">
                  <Plane />
                </div>
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
    overflow: hidden !important;
  }
  .cubic_shape {
    height: 400px;
    width: 320px;
    z-index: 10;
    background: #f7f7f7f7;
    margin-top: -20%;
    z-index: 10;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    position: relative;
    @media (max-width: 980px) {
      width: 300px;
    }
    @media (max-width: 780px) {
      width: 260px;
      margin-top: 0%;
      height: 300px;
    }
    @media (max-width: 680px) {
      width: 200px;
      height: 250px;
    }

    @media (max-width: 580px) {
      display: none;
    }
    .plane_wrapper {
      position: absolute;
      left: 50%;
      top: 40%;
      width: 400px;
      transform: translate(-50%, -50%);
      @media (max-width: 980px) {
        width: 110%;
        left: 40%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .plane {
        animation: paperplaneanim 2200ms cubic-bezier(0, 0.45, 0.15, 1);
        .plane_svg {
          width: 465px;
          height: 160px;
          @media (max-width: 980px) {
            width: 400px;
            height: 160px;
          }

          @media (max-width: 680px) {
            width: 350px;
            height: 200px;
          }
        }
        @keyframes paperplaneanim {
          0% {
            transform: rotate(50deg) translate(-500px, -250px);
          }
        }
      }
    }
  }
  .hero_bottom {
    width: 1000px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 8rem;
    @media (max-width: 1080px) {
      width: 100%;
      grid-gap: 4rem;
      /* grid-template-columns: 1fr; */
    }

    /* @media (max-width: 680px) {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
    } */
  }
  .hero_top {
    padding: 2rem 0;
    .icon {
      transition: all 0.5s;
      cursor: pointer;
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
  .hero_center_top {
    @media (max-width: 580px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .hero_center_wrapper {
    @media (max-width: 780px) {
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
  .hero_center {
    padding: 8rem 0;
    gap: 3px;
    .span_length {
      width: 100px;
      height: 1px;
      background: rgba(0, 0, 0, 0.6);
      @media (max-width: 580px) {
        width: 10px;
        display: none;
      }
    }
    .hero_c_Bottom {
      width: 100%;
      @media (max-width: 780px) {
        width: 100%;
      }
      p {
        line-height: 1.8;
        @media (max-width: 780px) {
          font-size: 15px;
          line-height: 1.8;
          text-align: start;
        }
      }
    }
    span {
      color: rgb(238, 161, 190);
      @media (max-width: 580px) {
        font-size: 14px;
        text-align: start;
      }
    }
    h2 {
      font-size: 8.5rem;
      width: 1150px;
      line-height: 1.2;
      text-align: center;
      z-index: 20;

      @media (max-width: 1180px) {
        font-size: 7rem;
        width: 100%;
      }

      @media (max-width: 780px) {
        text-align: start;
        font-size: 6rem;
      }

      @media (max-width: 480px) {
        text-align: start;
        font-size: 4.5rem;
      }
    }
  }
`;

export default Hero;
