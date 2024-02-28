"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SmoothScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     if (scrollContainer) {
//       const locoScroll = new LocomotiveScroll({
//         el: scrollContainer,
//         smooth: true,
//       });

//       // Update ScrollTrigger
//       ScrollTrigger.scrollerProxy(scrollContainer, {
//         scrollTop(value) {
//           if (arguments.length) {
//             locoScroll.scrollTo(0, value, 0); // Scroll to the specified position
//           }
//           return locoScroll.scroll.instance.scroll.y; // Return current scroll position
//         },
//       });

//       ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//       // Clean up
//       return () => {
//         ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
//         locoScroll.destroy();
//       };
//     }
//   }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScroll;
