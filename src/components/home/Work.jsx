import React from "react";
import styled from "styled-components";
const Work = () => {
  return (
    <WorkStyles>
      <div className="w-100 flex item-center justify-center">
        <div className="w-90 auto flex flex item-center justify-center column gap-2">
          <h2 className="">
            Case <br /> Studies <br /> & Projects
          </h2>
        </div>
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  padding: 4rem 0;

  h2 {
    font-size: 13rem;
    line-height: 9.4vw;
    text-rendering: optimizeLegibility;
    width: 90%;
    font-family: "CustomFont_", sans-serif;
    font-weight: light;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: 1px #fff;
    -webkit-text-stroke: 1px #cecae3;
    color: rgba(0, 0, 0, 0) !important;
    line-height: 1.1;

    @media (max-width: 980px) {
      font-size: 70px;
    }
    @media (max-width: 580px) {
      font-size: 50px;
    }
  }
`;

export default Work;
