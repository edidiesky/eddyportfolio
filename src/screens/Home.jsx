import React from "react";
import styled from "styled-components";
import { Hero, Services, Work } from "../components/home";
import Footer from "../components/common/Footer";
const Home = () => {
  return (
    <HomeStyles className="w-100 flex column gap-2">
      <Hero />
      <Work />
      <Services />
      <Footer/>
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  width: 100%;
`;

export default Home;
