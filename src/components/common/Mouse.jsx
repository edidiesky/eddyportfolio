import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import useMouse from "../../utils/useMouse";
const Mouse = ({ mouseposition }) => {
  const { x, y } = useMouse();
  const mouseRef = useRef(null);
  return (
    <span>
      <motion.div
        style={{
          left: x,
          top: y,
        }}

        // initial={{
        //   scale: 0,
        //   opacity: 0,
        // }}
        animate={
          mouseposition?.active
            ? {
                sacle: 1,
                opacity: 1,
                // left: x,
                // top: y,
              }
            : {
                scale: 0,
                opacity: 0,
              }
        }
        transition={{ type: "tween", ease: [0.7, 0, 0.24, 1], duration: 1 }}
        className="absolute opacity-0 scale-0 cursor-pointer h-[120px] w-[120px] top-[50%] z-40 left-[50%] bg-[#988871] md:flex hidden items-center justify-center rounded-full"
      >
        <Link
          // to={`${project?.website}`}
          target="_blank"
          className="text-text_dark_1 text-xl font-medium"
        >
          View
        </Link>
      </motion.div>
    </span>
  );
};

export default Mouse;
