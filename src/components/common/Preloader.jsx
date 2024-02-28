import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
const Preloader = () => {
  const [index, setIndex] = React.useState(0);
  const wordsArray = [
    "I",
    "am",
    "Victor",
    "Essien",
    "A",
    "Software",
    "Developer",
    "Welcome",
    "to",
    "my ",
    "wonderful",
    "portfolio",
  ];

  React.useEffect(() => {
    if (index === wordsArray?.length - 1) return;
    const timer = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <FooterStyles
      className="flex items-center pre_loader justify-center"
    >
      <h2 className="absolute text-4xl text-white font-extrabold font-portfolio_bold top-10 left-10">
        VICTOR ESSIEN
        <span className="block">PORTFOLIO @2024</span>
      </h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: "1",
          transition: { duration: 0.4, delay: 0.8 },
        }}
        // style={{letterSpacing:"1px"}}
        className="text-3xl md:text-3xl text-white font-extrabold uppercase font-portfolio_bold"
      >
        {wordsArray[index]}
      </motion.h2>
    </FooterStyles>
  );
};

const FooterStyles = styled.div`
  width: 100vw;
  position: fixed;
  height: 100vh;
  background: #000;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 4000;
`;

export default Preloader;
