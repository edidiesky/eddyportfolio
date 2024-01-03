import React from "react";
import styled from "styled-components";

export default function Project({ setModal, title, index }) {
  const handleUpdateMousePosition = (e) => {
    setModal({ active: true, index: index });
  };
  return (
    <ProjectWrapper
      onMouseEnter={handleUpdateMousePosition}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="card flex w-100 auto item-center justify-space gap-2"
    >
      <h1 className={`capitalize project-${index} flex text-dark text-bold column justify-space w-100`}>
        {title}
        <span className="family1 fs-14 text-light text-grey">
          PRISMA + NODEJS + REACT-TYPESCRIPT + JEST
        </span>
      </h1>
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  transition: all 0.4s;
  padding: 50px;
  border-top: 1px solid rgb(215, 215, 215);
  .line {
    overflow: hidden !important;
    display: flex !important;
    justify-content: space-between !important;
  }
  &:hover {
    opacity: 0.5;
    h1 {
      transform: translateX(-20px);
      span {
        transform: translateX(20px) !important;
      }
    }
  }
  &:nth-child(6) {
    border-bottom: 1px solid rgb(215, 215, 215);
  }
  h1 {
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.4s;

    span {
      font-size: 14px;
      transition: all 0.4s;
      font-weight: 400;
    }
  }
`;
