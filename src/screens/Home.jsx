import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Hero } from "../components/home";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/Preloader";
import WorkList from "../components/home/worklist";

import Cta from "../components/home/cta";
import { useRef } from "react";
import Header from "../components/common/Header";
import SmoothScroll from "../utils/smooth";
import Skills from "../components/home/skills";
import Banner from "../components/home/Banner";
import Mouse from "../components/common/Mouse";
const Home = () => {
  const Homeref = useRef(null);
  const [isloading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const [mouseposition, setMousePosition] = useState({
    x: 0,
    y: 0,
    active: false,
    index: 0,
  });
  return (
    <div className="w-full overflow-hidden">
      <Preloader />
      {/* <AnimatePresence></AnimatePresence> */}
      {/* {mouseposition?.active && <Mouse mouseposition={mouseposition} />} */}
      {/* <Mouse mouseposition={mouseposition} /> */}

      <HomeStyles
        ref={Homeref}
        style={{ perspective: "1px", minHeight: "100vh" }}
        data-scroll-section
        className="w-full min-h-full bg-[#E1DFDD] overflow-hidden"
      >
        <Header />
        <Hero />
        <Cta />
        <WorkList
          setMousePosition={setMousePosition}
          mouseposition={mouseposition}
        />
        <Skills />
        {/* <Banner/> */}
        <Footer />
      </HomeStyles>
    </div>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  overflow: hidden;
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
