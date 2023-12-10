import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../assets/svg/arrow";
const Layout = () => {
  return (
    <LayoutStyles>
      <Outlet />
    </LayoutStyles>
  );
};

const LayoutStyles = styled.div`
  width: 100%;
  .span_highlight {
    transition: all 0.5s;

    color: #fff;
    &:hover {
      color: rgb(238, 161, 190);
    }
  }
  .footer {
    padding: 2rem 0;
    .footer_right,
    .footer_left {
      padding: 2rem;
    }
    .footer_right {
      justify-content: flex-emd;
    }
  }
`;

export default Layout;
