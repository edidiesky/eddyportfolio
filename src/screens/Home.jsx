import React from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Hero, Services, Work } from "../components/home";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/Preloader";
import WorkList from "../components/home/worklist";

import Cta from "../components/home/cta";
import { useRef } from "react";
import Header from "../components/common/Header";
const Home = () => {
  const Homeref = useRef(null);
  // React.useEffect(() => {
  //   // Check if Homeref.current is not null before creating the LocomotiveScroll instance
  //   if (Homeref.current) {
  //    let locoScroll = new LocomotiveScroll({
  //       el: Homeref.current,
  //       smooth: true,
  //       multiplier: 1,
  //       class: "is-reveal",
  //     });

  //     // Use a function to update LocomotiveScroll on resize
  //     const handleResize = () => locoScroll.update();
  //     const resizeObserver = new ResizeObserver(handleResize);
  //     resizeObserver.observe(Homeref.current);

  //     // Cleanup functions
  //     return () => {
  //       if (locoScroll) {
  //         locoScroll.destroy();
  //       }
  //       resizeObserver.disconnect();
  //     };
  //   }

  //   // If Homeref.current is null, return a cleanup function without creating LocomotiveScroll
  //   return () => {
  //     // Cleanup without creating LocomotiveScroll
  //   };
  // }, [Homeref]);
  const [isloading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader />
      <HomeStyles
        ref={Homeref}
        style={{ perspective: "1px", minHeight: "100vh" }}
        data-scroll-section
        className="w-full min-h-full bg-[#E1DFDD] overflow-hidden"
      >
        <Header />
        <Hero />
        <Cta />
        <WorkList />
        <Footer />
      </HomeStyles>
    </>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  .case {
    display: block;

    @media (max-width: 1080px) {
      display: none;
    }
  }

  .small_work {
    display: none;

    @media (max-width: 1080px) {
      display: block;
    }
  }
`;

export default Home;
