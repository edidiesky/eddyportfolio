import React from "react";
import { Link, Outlet } from "react-router-dom";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import styled from "styled-components";
const Layout = () => {
  const noOfColumns = 5;
  const expand = {
    initial: {
      bottom: "0",
    },
    enter: (i) => ({
      bottom: "100%",
      transition: { duration: .8, delay: 0.08 * i },
    }),
  };
  return (
    <LayoutStyles>
      <div className="transition_columns">
        {Array(noOfColumns)
          .fill("")
          .map((x, index) => {
            return (
              <motion.span
                key={index}
                custom={index}
                variants={expand}
                initial="initial"
                animate="enter"
                className="w-100"
              ></motion.span>
            );
          })}
      </div>
      <Outlet />
    </LayoutStyles>
  );
};

const LayoutStyles = styled.div`
  width: 100%;
  .transition_columns {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    pointer-events: none;
    display: flex;
    z-index: 30000000000000;
    span {
      height: 100%;
      width: 100%;
      z-index: 30000000000000;
      position: relative;
      background-color: #000;
    }
  }
  /* .span_highlight {
    transition: all 0.5s;

    color: #fff;
    &:hover {
      color: rgb(238, 161, 190);
    }
  }
  .footer {
    padding: 2rem 0;
    .footer_right,
    .footer_left {
      padding: 2rem;
    }
    .footer_right {
      justify-content: flex-emd;
    }
  } */
`;

export default Layout;
