import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { scaleAnimations } from "../../utils/framer";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const [active, setActive] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    active: false,
    index: 0,
  });
  const mouseRef = useRef(null);
  const labelRef = useRef(null);
  const [activetwitter, setActiveTwitter] = useState(false);
  const [activegithub, setActiveGithub] = useState(false);
  const [activelinkedln, setActiveLinkedln] = useState(false);
  const aboutTextRef_1 = useRef(null);
  const headerref = useRef([]);
  headerref.current = [];

  useEffect(() => {
    const text = new SplitType(aboutTextRef_1?.current);

    const textrefelement_1 = text?.chars;
    gsap.fromTo(
      textrefelement_1,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: textrefelement_1,
        },
      }
    );
    headerref.current?.forEach((el) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.words;
      gsap.fromTo(
        textrefelement_1,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.06,
          duration: 1,
          ease: "power4.out",
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
  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };

  return (
    <>
      {/*  */}
      <div
        onMouseEnter={() =>
          setMousePosition({
            active: false,
          })
        }
        className="absolute top-0 left-0 w-full h-full z-[40]"
      ></div>
      <motion.div
        ref={mouseRef}
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        className="w-[180px] z-[50] absolute h-[180px] rounded-full hidden md:flex items-center justify-center text-[12px] text-white 
        font-portfolio_bold bg-[#E49C4A]"
      ></motion.div>

      <motion.div
        variants={scaleAnimations}
        initial="initial"
        animate={mouseposition?.active ? "enter" : "exit"}
        ref={labelRef}
        className="z-[50] absolute rounded-full hidden md:flex items-center justify-center text-sm text-text_dark_1 font-portfolio_bold"
      >
        <Link
          target="_blank"
          className="z-[50] relative"
          to={
            "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
          }
        >
          Message Me
        </Link>
      </motion.div>

      <div data-scroll className="py-16  relative w-full">
        <div
          onMouseEnter={() =>
            setMousePosition({
              active: true,
            })
          }
          className="w-full px-4 md:px-8 z-40 relative m-auto max-w-custom flex flex-col gap-12 md:gap-20"
        >
          <h3 className="text-sm relative md:text-lg font-portfolio_bold1 text-text_dark_1 w-full gap-2 justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-normal uppercase">
            <span ref={adHeaderdRefs}>05/</span>
            <span ref={adHeaderdRefs}>WANT TO WORK TOGETHER?</span>
            <span ref={adHeaderdRefs}>SEND ME A MESSAGE</span>
          </h3>

          <Link
            ref={aboutTextRef_1}
            to={
              "mailto:essienedidiong1000@gmail.com?subject=Hey! lets work! Love your works!"
            }
            className="text-4xl relative text-start sm:text-center sm:text-7xl lg:text-9xl w-full pb-16 md:pb-24 font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
          >
            <span> HELLO@VICTOR</span>
            <span> ESSIEN.COM</span>
          </Link>
        </div>

        <div className="w-full px-4 md:px-8 m-auto max-w-custom flex flex-col gap-12">
          <h3 className="text-xl md:text-2xl  flex-col text-text_dark_1 lg:flex-row font-portfolio_bold1 w-full justify-between flex gap-4 md:items-center pt-16 font-normal">
            <span>
              Victor Essien
              <span className="block">Creative Developer</span>
            </span>
            <span className="flex items-center gap-8 ">
              <h4
                onMouseMove={() => setActiveGithub(true)}
                onMouseLeave={() => setActiveGithub(false)}
                className="relative text-xl z-50 sm:text-2xl w-auto overflow-hidden font-portfolio_bold1 font-normal "
              >
                <motion.div
                  animate={{ top: activegithub ? "-200%" : "0" }}
                  transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                  className="w-full h-full flex items-center flex-col relative"
                >
                  <Link
                    to={"https://twitter.com/edidiesky"}
                    target="_blank"
                    className=""
                  >
                    Twitter
                  </Link>
                  <Link
                    to={"https://twitter.com/edidiesky"}
                    className="absolute top-[100%] w-full left-0 "
                  >
                    Twitter
                  </Link>
                </motion.div>
              </h4>

              <h4
                onMouseMove={() => setActiveTwitter(true)}
                onMouseLeave={() => setActiveTwitter(false)}
                className="relative text-xl z-50 sm:text-2xl w-auto overflow-hidden font-portfolio_bold1 font-normal "
              >
                <motion.div
                  animate={{ top: activetwitter ? "-100%" : "0" }}
                  transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                  className="w-full h-full flex items-center flex-col relative"
                >
                  <Link
                    to={"https://github.com/edidiesky"}
                    target="_blank"
                    className=""
                  >
                    Github
                  </Link>
                  <Link
                    to={"https://github.com/edidiesky"}
                    className="absolute top-[100%] w-full left-0 "
                  >
                    Github
                  </Link>
                </motion.div>
              </h4>

              <h4
                onMouseMove={() => setActiveLinkedln(true)}
                onMouseLeave={() => setActiveLinkedln(false)}
                className="relative text-xl z-50 sm:text-2xl w-auto overflow-hidden font-portfolio_bold1 font-normal "
              >
                <motion.div
                  animate={{ top: activelinkedln ? "-100%" : "0" }}
                  transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                  className="w-full h-full flex items-center flex-col relative"
                >
                  <Link
                    to={
                      "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                    }
                    target="_blank"
                    className=""
                  >
                    LinkedIn
                  </Link>
                  <Link
                    to={
                      "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                    }
                    className="absolute top-[100%] w-full left-0 "
                  >
                    LinkedIn
                  </Link>
                </motion.div>
              </h4>
            </span>

            <span className="flex items-center gap-8 ">
              Development Victor Essien
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
