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
      as={motion.div}
      initial={{ top: 0 }}
      exit={{
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      animate={{ top: 0 }}
      className="flex item-center justify-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
          opacity: "1",
          transition: { duration: 0.4, delay: 0.8 },
        }}
        className="fs-40 text-bold text-white"
      >
        {wordsArray[index]}
      </motion.h2>
    </FooterStyles>
  );
};

const FooterStyles = styled(motion.div)`
  width: 100vw;
  position: fixed;
  height: 100vh;
  background: #000;
  top: 0;
  left: 0;
  z-index: 4000;
`;

export default Preloader;
