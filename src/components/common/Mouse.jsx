import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
const Mouse = ({ mouseposition }) => {
  const mouseRef = useRef(null);
  const size = mouseposition.active ? 60 : 10;
  useEffect(() => {
    let mousePositionX = gsap.quickTo(mouseRef.current, "left", {
      duration: 0.8,
      ease: "power3.out",
    });

    let mousePositionY = gsap.quickTo(mouseRef.current, "top", {
      duration: 0.8,
      ease: "power3.out",
    });
    const handlePosition = (e) => {
      const { pageX, pageY } = e;

      mousePositionX(pageX - size);
      mousePositionY(pageY - size);
    };

    window.addEventListener("mousemove", handlePosition);
    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);
  return (
    <span>
      <motion.div
        style={{ pointerEvents: "none" }}
        animate={
          mouseposition.active
            ? {
                height: "120px",
                width: "120px",
              }
            : {
                height: "20px",
                width: "20px",
              }
        }
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
        ref={mouseRef}
        className="absolute cursor-pointer top-[50%] z-40 left-[50%] bg-[#988871] md:flex hidden items-center justify-center rounded-full"
      >
        {/* <Link
          // style={{ pointerEvents: "visible" }}
          // to={`${project?.website}`}
          className="text-text_dark_1 text-xl font-medium"
        >
          View
        </Link> */}
      </motion.div>
    </span>
  );
};

export default Mouse;
