import React from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Hero, Services, Work, Skills, Case } from "../components/home";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/Preloader";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [isloading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 4000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <HomeStyles className="w-100 flex column gap-2">
      {/* <AnimatePresence mode="will">
        {isloading && <Preloader />}
      </AnimatePresence> */}
      <Hero />
      <div className="case">
        <Case />
      </div>

      <div className="small_work">
        <Work />
      </div>
      <Skills />
      <Services />
      <Footer />
    </HomeStyles>
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
