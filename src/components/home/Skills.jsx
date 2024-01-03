import React from "react";
import styled from "styled-components";

const Skills = () => {
  const phrases = [
    "REACT",
    "TYPESCRIPT",
    "RUST",
    "SOLANA",
    "NEXT.JS",
    "NODEJS",
    "EXPRESS.JS",
    "PRISMA",
    "GIT",
    "JEST",
    "TAILWIND",
    "CSS",
  ];

  return (
    <WorkStyles>
      <div className="w-90 skill_wrapper auto">
        <div className="w-100 flex column gap-2">
          <h4 className="fs-20 text-grey text-bold uppercase">
            SKILLS & TOOLS
          </h4>
          <div className="w-100">
            {phrases.map((x, index) => {
              return (
                <span className="tab family1 flex uppercase fs-16 text-dark text-bold item-center gap-2">
                  Proficiency.<span>{x}</span>
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-100 flex column gap-4">
          <div className="flex w-100 column gap-1">
            <h4 className="fs-20 text-grey text-bold uppercase">INTEREST</h4>
            <p className="fs-18 text-dark text-light">
              Brand Strategy, Animations, Creative Development, E-Commerce, Art
              Direction, maximizing user experience.
            </p>
          </div>

          <div className="flex w-100 column gap-1">
            <h4 className="fs-20 text-grey text-bold uppercase">INTEREST</h4>
            <p className="fs-18 text-dark text-light">
              Brand Strategy, Animations, Creative Development, E-Commerce, Art
              Direction, maximizing user experience.
            </p>
          </div>
        </div>
        {/* {phrases.map((x, index) => {
          return (
            <span className="tab family1 flex item-center gap-2">
              {index + 1}.
              <span>{x}</span>
            </span>
          );
        })} */}
      </div>
    </WorkStyles>
  );
};

const WorkStyles = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  .skill_wrapper {
    padding: 0 10rem;
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    grid-gap: 7rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      padding: 0;
    }
    .tab {
      padding: 1.4rem 1rem;
      /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
      border-bottom: 2px solid rgba(0, 0, 0, 1);
    }
    /* width: 65%; */
  }
`;

export default Skills;
