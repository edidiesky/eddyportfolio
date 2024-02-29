import React from "react";
import styled from "styled-components";
import { Services, Tools, Playground, Hero } from "../components/about";
import Footer from "../components/common/Footer";
import Bottom from "../components/about/Bottom";
import Header from "../components/common/Header";
// import { Hero } from "../components/home";
const About = () => {
   React.useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  return (
    <HomeStyles className="w-100 bg-[#E1DFDD] flex flex-col gap-2">
      <Header/>
      <Hero />
      {/* <Services /> */}
      {/* <Tools />
      <Playground/>
      <Bottom /> */}
      <Footer />
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  overflow:hidden;
`;

export default About;
