import React from "react";
import styled from "styled-components";

const Skills = () => {
  const phrases = [
    "REACT",
    "TYPESCRIPT",
    'NEXT.JS',
    "NODEJS",
    "EXPRESS.JS",
    "PRISMA",
    "GIT",
    "JEST",
    "TAILWIND",
    'CSS',
    
  ];

  return (
    <WorkStyles>
      <div className="w-100 skill_wrapper auto flex item-center justify-center">
        {phrases.map((x, index) => {
          return (
            <span className="tab family1 flex item-center gap-2">
              {index + 1}.
              <span>{x}</span>
            </span>
          );
        })}
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  margin: 7rem auto;
  .skill_wrapper {
    width: 65%;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: 980px) {
      width: 95%;
    }
    .tab {
      padding: 2rem 4rem;
      display: flex;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 40px;
      font-size: 2.5rem;
      @media (max-width: 980px) {
        font-size: 2rem;
        padding: 1.2rem 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.5rem;
        padding: 1.2rem 2rem;
      }
    }
  }
`;

export default Skills;