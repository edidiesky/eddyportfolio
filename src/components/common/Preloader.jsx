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
    "Victor portfolio  ©2024",
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
    <PreloaderStyles className="flex items-center pre_loader justify-center">
      <div
        style={{ background: `#988871` }}
        className="revealer_1 absolute h-full top-0 left-0 items-center justify-center w-full block"
      ></div>

      <div
        style={{ background: `#000` }}
        className="revealer_2 absolute h-full top-0 left-0 items-center justify-center w-full block"
      ></div>
      {/* <h2 className="absolute text-2xl md:text-3xl text-white font-extrabold font-portfolio_bold top-10 left-10">
        VICTOR ESSIEN
        <span className="block">PORTFOLIO ©2024</span>
      </h2> */}
      <h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: index * 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
        // style={{letterSpacing:"1px"}}
        className="text-xl md:text-2xl overflow-hidden loader_text relative text-white font-normal uppercase font-portfolio_bold"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: index * 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          // style={{letterSpacing:"1px"}}
          className="text-white"
        >
          {wordsArray[index]}
        </motion.span>
      </h2>
    </PreloaderStyles>
  );
};

const PreloaderStyles = styled.div`
  width: 100vw;
  position: fixed;
  height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 4000;
`;

export default Preloader;
