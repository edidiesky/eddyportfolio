import React from "react";
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
const Home = () => {
  const Homeref = useRef(null);
  const [isloading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Preloader />
      <SmoothScroll>
        <HomeStyles
          ref={Homeref}
          style={{ perspective: "1px", minHeight: "100vh" }}
          data-scroll-section
          className="w-full min-h-full bg-[#000000] overflow-hidden"
        >
          <Header />
          <Hero />
          <Cta />
          <WorkList />
          {/* <Skills/> */}
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
