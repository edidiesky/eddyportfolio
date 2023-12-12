import React from "react";
import styled from "styled-components";
import { Hero, Services, Tools, Playground } from "../components/about";
import Footer from "../components/common/Footer";
import Bottom from "../components/about/Bottom";
const Home = () => {
   React.useEffect(() => {
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);
  return (
    <HomeStyles className="w-100 flex column gap-2">
      <Hero />
      <Services />
      <Tools />
      <Playground/>
      <Bottom />
      <Footer />
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
  overflow:hidden;
`;

export default Home;
