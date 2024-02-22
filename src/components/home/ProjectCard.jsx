import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
const scaleAnimations = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const ProjectCard = ({ x, index, addRefs, tab, setTab }) => {
  const labelContainer = useRef(null);
  useEffect(() => {
    let labelContainerX = gsap.quickTo(labelContainer?.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let labelContainerY = gsap.quickTo(labelContainer?.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    const handlePosition = (e) => {
      const { pageX, pageY } = e;
      labelContainerX(pageX);
      labelContainerY(pageY);
    };

    window.addEventListener("mousemove", handlePosition);
    return () => window.removeEventListener("mousemove", handlePosition);
  }, []);
  console.log(tab)
  return (
    <div
      onMouseLeave={() => setTab({ active: false, index: 0 })}
      onMouseOver={() => setTab({ active: true, index: index })}
      key={index}
      className="w-100 flex items-center flex-col gap-12"
    >
      <motion.div
        variants={scaleAnimations}
        initial="initial"
        animate={tab.active ? "enter" : "closed"}
        ref={labelContainer}
        style={{
          background: `#334BD3`,
          zIndex: 400,
        }}
        className="absolute cursor-pointer top-50 left-50 h-32 w-32 flex items-center justify-center rounded-full"
      >
        <Link to={`${x?.website}`} className="text-white text-xl font-medium">
          View
        </Link>
      </motion.div>
      <div
        data-scroll
        data-scroll-speed="1"
        ref={addRefs}
        style={{
          background: `${x?.color}`,
        }}
        className="flex w-full h-[400px] lg:h-[550px] items-center justify-center"
      >
        <div data-scroll data-scroll-speed="2" className="w-[85%]">
          <img src={x?.image} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <h3 className="text-2xl md:text-3xl flex items-start flex-col gap-4 justify-between font-portfolio_bold">
          <span
            data-scroll
            data-scroll-speed="2"
            className="border-b border-[rgba(0,0,0,.2)] pb-4 w-full"
          >
            {x?.text}
          </span>
          <span
            data-scroll
            data-scroll-speed="2"
            className="text-lg flex items-center justify-between w-full"
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
