import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../assets/svg/arrow";
const Footer = () => {
  return (
    <FooterStyles>
      <div className="w-90 auto flex item-center gap-4 justify-space">
            <span className="block fs-12 text-bold  text-white">Copyright © 2024 Edidiong Essien</span>
      </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.div`
  width: 100%;
  padding:2rem 0;
  background-color: #000000;
  .span_highlight {
    transition: all 0.5s;

    color: #fff;
    &:hover {
      color: rgb(238, 161, 190);
    }
  }
`;

export default Footer;
