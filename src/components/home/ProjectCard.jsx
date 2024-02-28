import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index, addRefs, tab, setTab }) => {
  console.log(tab);
  const [mouseposition, setMousePosition] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseEnter = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - 120 / 2;
    const y = clientY - rect.top - 120 / 2;
    setMousePosition({
      x,
      y,
      active: true,
    });
  };

  const handleMouseLeave = (e) => {
    setMousePosition({
      active: false,
    });
  };

  const { x, y } = mouseposition;
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseEnter}
      key={index}
      className="w-100 group flex items-center relative flex-col gap-12"
    >
      <motion.div
        animate={
          mouseposition.active
            ? { opacity: 1, top: `${y}px`, left: `${x}px`, scale: 1 }
            : { opacity: 0, scale: 0 }
        }
        transition={{ type: "tween", ease: "backOut", duration: 1 }}
        // ref={labelContainer}
        style={{
          background: `#744118`,
          zIndex: 400,
        }}
        className="absolute cursor-pointer top-[50%] left-[50%]  h-[120px] w-[120px] md:flex hidden items-center justify-center rounded-full"
      >
        <Link
          to={`${project?.website}`}
          className="text-white text-xl font-medium"
        >
          View
        </Link>
      </motion.div>
      <div
        data-scroll
        data-scroll-speed="1"
        ref={addRefs}
        style={{
          background: `${project?.color}`,
        }}
        className="flex w-full h-[350px] sm:h-[450px] lg:h-[550px] items-center justify-center"
      >
        <div data-scroll data-scroll-speed="2" className="w-[70%] md:w-[85%]">
          <img src={project?.image} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <h3 className="text-xl lg:text-2xl md:text-3xl flex items-start text-white flex-col gap-4 justify-between font-portfolio_bold">
          <span
            data-scroll
            data-scroll-speed="2"
            className="border-b border-[rgba(255,255,255,.2)] text-white pb-4 w-full"
          >
            {project?.text}
          </span>
          <span
            data-scroll
            data-scroll-speed="2"
            className="text-sm md:text-lg flex font-portfolio_bold1 items-center justify-between w-full"
          >
            Development
            <span>2023</span>
          </span>
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
