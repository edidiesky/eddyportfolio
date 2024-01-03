import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ data, index }) {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  const { x, y } = mouseposition;
  const handleUpdateMousePosition = (e) => {
    const { clientX, clientY } = e;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = clientX - rect.left - 150 / 2;
    const y = clientY - rect.top - 150 / 2;

    setMousePosition({ x: x, y: y });
  };
  const handleRemoveMousePosition = (e) => {
    setMousePosition({ x: 0, y: 0 });
  };
  return (
    <Link
      to={`/work/${data.text}`}
      onMouseMove={handleUpdateMousePosition}
      onMouseLeave={handleRemoveMousePosition}
      className="card_wrapper flex column gap-4"
      data-scroll
      data-scroll-speed={index * 0.1}
      style={{marginBottom:"12rem"}}
    >
      <StyledCard
        backgroundColor={data.color}
        className="card w-100 flex item-center justify-center"
      >
        <img
          style={{ width: "85%" }}
          src={data.image}
          className="auto "
          alt=""
        />
      </StyledCard>
      <div className="flex column gap-1">
        <div className="flex item-center card_text justify-space w-100">
          <h3 className="fs-24 text-white text-bold">{data.text}</h3>
        </div>
        <div className="card_bottom flex item-center justify-space w-100">
          <span className="fs-16 text-light text-grey">
            Frontend & Backend Devlopment
          </span>
          <span className="text-grey fs-16 text-light">2023</span>
        </div>
      </div>
    </Link>
  );
}

const StyledCard = styled.div`
  position: relative;
  z-index: 400;
  min-height: 400px;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* margin-bottom: 10rem; */
  @media (max-width: 680px) {
    min-height: 290px;
  }
  /* Add more styles for the card here */
`;
