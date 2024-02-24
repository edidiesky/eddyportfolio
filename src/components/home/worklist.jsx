import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectdata } from "../../data/projectdata";
import ProjectCard from "./ProjectCard";
const WorkList = () => {
  const ref = useRef([]);
  const headerref = useRef([]);
  const [tab, setTab] = useState({
    active: false,
    index: 0,
  });
  const [mouseposition, setMousePosition] = useState({
    x: 0,
    y: 0,
    active: false,
    index: 0,
  });
  ref.current = [];
  headerref.current = [];
  useEffect(() => {
    ref.current?.forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          stagger: 0.1,
          // delay:1,
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    });

    headerref.current?.forEach((el) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.chars;
      gsap.fromTo(
        textrefelement_1,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          // delay:1,
          duration: 0,
          scrollTrigger: {
            trigger: textrefelement_1,
          },
        }
      );
    });
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


  return (
    <>
      <div data-scroll className="py-12 w-full bg-[#E1DFDD]">
        <div className="w-full px-8 m-auto max-w-custom flex flex-col gap-16">
          <div className="text-sm md:text-lg font-portfolio_bold w-full justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
            <span ref={adHeaderdRefs}>02/</span>
            <span ref={adHeaderdRefs}>RECENT WORKS?</span>
            <span ref={adHeaderdRefs}>PROJECTS</span>
          </div>
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
