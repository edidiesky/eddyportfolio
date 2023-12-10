import React from "react";
import styled from "styled-components";
import { Hero, Services, Tools } from "../components/about";
import Footer from "../components/common/Footer";
import Bottom from "../components/about/Bottom";
const Home = () => {
  return (
    <HomeStyles className="w-100 flex column gap-2">
      <Hero />
      <Services />
      <Tools />
      <Bottom />
      <Footer />
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
`;

export default Home;
