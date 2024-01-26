import { IoMdMail } from "react-icons/io";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";
const Works = () => {
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
  return (
    <HeroStyles className="flex column w-100 item-center justify-center">
      {/* top section */}
      <div className="w-90 auto">
        <h3 className="heroText w-100 text-center text-grey text-extra-bold">
          I help companies to design digital products and turn ideas into a
          functional and delightful experience. I’m focusing on working on
          interface and digital design – mainly building products, branding and
          websites.
        </h3>
      </div>
    </HeroStyles>
  );
};

const HeroStyles = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  h3 {
    font-size: 5rem;
    width: 1150px;
    line-height: 1.5;
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
`;

export default Works;
