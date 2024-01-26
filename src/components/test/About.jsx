import { IoMdMail } from "react-icons/io";
import React, { useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import styled from "styled-components";
const About = () => {
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
        <h2 className="heroText w-100 text-center text-extra-bold">
          I'm Freelance Full Stack Developer Turning Your Paperball Into
          Paperplane
        </h2>
      </div>
    </HeroStyles>
  );
};

const HeroStyles = styled.div`
  min-height: 100vh;
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
`;

export default About;
