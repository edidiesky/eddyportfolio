import React, { useState } from "react";
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
    <>
      <Preloader />
      <Mouse mouseposition={mouseposition} />
      <SmoothScroll>
        <HomeStyles
          ref={Homeref}
          style={{ perspective: "1px", minHeight: "100vh" }}
          data-scroll-section
          className="w-full min-h-full bg-[#E1DFDD] overflow-hidden"
        >
          <Header />
          <Hero />
          <Cta />
          <WorkList setMousePosition={setMousePosition} />
          <Skills/>
          <Footer />
        </HomeStyles>
      </SmoothScroll>
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
