import React from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AccordionIndex = ({ expanded, setExpanded, x, index }) => {
  const active = expanded === index;
  return (
    <div className="w-full border-t py-12 group cursor-pointer border-[rgba(0,0,0,.4)]">
      <div
        onClick={() => setExpanded(active ? false : index)}
        className="header_top h-[40px] group-hover:text-[rgba(0,0,0,.7)] cursor-pointer text-xl md:text-2xl flex items-center justify-between font-portfolio_bold1 gap-8 md:gap-24 text-text_dark_1"
      >
        <span className="">0{index + 1}</span>
        <span className="text-start flex-1 mx-12 md:mx-20"> {x?.title}</span>
        <span className="relative text-2xl">
          <motion.span
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            animate={{ opacity: !active ? 1 : 0 }}
          >
            <BiPlus />{" "}
          </motion.span>
          <motion.span
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            animate={{ opacity: !active ? 0 : 1 }}
            className="absolute left-0 opacity-0 top-0"
          >
            <BiMinus />{" "}
          </motion.span>
        </span>
      </div>
      <motion.div
        animate={{ maxHeight: active ? "16rem" : "0" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full  overflow-hidden"
      >
        <h4 className="text-xl md:text-2xl w-[60%] pt-8 pb-16 mx-auto font-portfolio_bold1 font-normal">
          {x.description}
        </h4>
      </motion.div>
    </div>
  );
};

export default AccordionIndex;
