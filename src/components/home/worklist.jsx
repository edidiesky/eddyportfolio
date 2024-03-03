import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectdata } from "../../data/projectdata";
import ProjectCard from "./ProjectCard";
import Mouse from "../common/Mouse";
import { scaleAnimations } from "../../utils/framer";
import { Link } from "react-router-dom";

const WorkList = () => {
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const ref = useRef([]);
  const mouseRef = useRef(null);
  const headerref = useRef([]);

  const labelRef = useRef(null);
  const [tab, setTab] = useState({
    active: false,
    index: 0,
  });
  ref.current = [];
  headerref.current = [];

  useEffect(() => {
    ref.current?.forEach((el, index) => {
      gsap.fromTo(
        el,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          stagger: 0.1,
          // delay:1,
          ease: "power3.out",
          duration: 2,
          delay: index * 0.18,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    });

    headerref.current?.forEach((el, index) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.chars;
      gsap.fromTo(
        textrefelement_1,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.2 * index,
          duration: 1.2,
          scrollTrigger: {
            trigger: textrefelement_1,
          },
        }
      );
    });

    let mouseXMovement = gsap.quickTo(mouseRef.current, "left", {
      duration: 0.9,
      ease: "power3",
    });

    let mouseYMovement = gsap.quickTo(mouseRef.current, "top", {
      duration: 0.9,
      ease: "power3",
    });

    let labelXMovement = gsap.quickTo(labelRef.current, "left", {
      duration: 0.68,
      ease: "power3",
    });

    let labelYMovement = gsap.quickTo(labelRef.current, "top", {
      duration: 0.68,
      ease: "power3",
    });

    const handleMouseMotion = (e) => {
      const { pageX, pageY } = e;
      mouseXMovement(pageX);
      mouseYMovement(pageY);

      labelXMovement(pageX);
      labelYMovement(pageY);
    };

    window.addEventListener("mousemove", handleMouseMotion);
    return () => {
      window.removeEventListener("mousemove", handleMouseMotion);
    };
  }, []);

  const addRefs = (el) => {
    if (el && !ref?.current?.includes(el)) {
      ref.current.push(el);
    }
  };
  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };

  // console.log(mouseposition);

  const webactive = projectdata[mouseposition?.index]?.website;

  const website = webactive ? webactive : false;

  // console.log(website);

  return (
    <>
      <motion.div
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-[120px] z-50 absolute h-[120px] rounded-full flex items-center justify-center text-[12px] text-white font-portfolio_bold bg-[#2e2e30]"
      ></motion.div>
      <div
        onMouseEnter={() =>
          setMousePosition({
            active: false,
          })
        }
        className="absolute top-0 w-full h-full z-40"
      ></div>

      <motion.div
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="w-[60px] z-50 h-[60px] absolute rounded-full flex items-center justify-center text-[10px] text-white font-portfolio_bold"
      >
        {website ? (
          <Link target="_blank" to={website}>
            View
          </Link>
        ) : (
          <span className="text-center w-full"> Work in Progress</span>
        )}
      </motion.div>
      <div data-scroll className="py-12 w-full relative">
        <div className="w-full px-8 m-auto max-w-custom relative flex flex-col gap-16">
          <div className="text-sm md:text-lg text-text_dark_1 font-portfolio_bold w-full justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.3)] font-normal uppercase">
            <span ref={adHeaderdRefs}>02/</span>
            <span ref={adHeaderdRefs}>RECENT WORKS?</span>
            <span ref={adHeaderdRefs}>PROJECTS</span>
          </div>

          {/* <Mouse mouseposition={mouseposition} /> */}
          <div className="w-full relative pt-20 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 lg:gap-y-52 justify-between">
            {projectdata.map((x, index) => {
              return (
                <ProjectCard
                  setTab={setTab}
                  tab={tab}
                  project={x}
                  key={index}
                  index={index}
                  addRefs={addRefs}
                  setMousePosition={setMousePosition}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkList;
