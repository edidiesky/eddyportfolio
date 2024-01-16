import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { scaleAnimations } from "../../../utils/framer";

export default function Modal({ modal, projects }) {
  const { index, active } = modal;
  const modalContainer = useRef(null);
  const cursorContainer = useRef(null);
  const labelContainer = useRef(null);
  useEffect(() => {
    let ModalContainerX = gsap.quickTo(modalContainer?.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let ModalContainerY = gsap.quickTo(modalContainer?.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let labelContainerX = gsap.quickTo(labelContainer?.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let labelContainerY = gsap.quickTo(labelContainer?.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    let xTo = gsap.quickTo(cursorContainer.current, "left", {
        duration: 0.6,
        ease: "power3",
      }),
      yTo = gsap.quickTo(cursorContainer.current, "top", {
        duration: 0.6,
        ease: "power3",
      });

    const handlePosition = (e) => {
      const { pageX, pageY } = e;
      ModalContainerX(pageX);
      ModalContainerY(pageY);
      labelContainerX(pageX);
      labelContainerY(pageY);
      xTo(pageX);
      yTo(pageY);
    };

    window.addEventListener("mousemove", handlePosition);
    // return () => window.removeEventListener("mousemove", handlePosition);
  }, []);
  // console.log(projectdata[index]);
  const worktitle = projects[index]?.website;
  // console.log(worktitle, index);

  return (
    <>
      <ModalWrapper
        ref={modalContainer}
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="flex item-center justify-center gap-2"
      >
        <Link
          to={`/work/${worktitle}`}
          style={{ top: index * -100 + "%" }}
          className="modal_slider"
        >
          {projects.map((data) => {
            // setPath(data.text)
            return (
              <StyledCard
                style={{ background: `${data.color}` }}
                className="cardImage w-100 h-100 flex item-center justify-center"
              >
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={data.image}
                  className=""
                  alt=""
                />
              </StyledCard>
            );
          })}
        </Link>
      </ModalWrapper>
      <CursorWrapper
        style={{ background: `${projects[index]?.color}` }}
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursorContainer}
      ></CursorWrapper>
      <LabelWrapper
        as={motion.div}
        variants={scaleAnimations}
        initial="initial"
        onClick={() => console.log("Hello Card")}
        animate={active ? "enter" : "closed"}
        ref={labelContainer}
      >
        <Link target="_blank" to={`${worktitle}`}>
          <span onClick={() => console.log("Hello Card")}>View</span>
        </Link>
      </LabelWrapper>
    </>
  );
}

const ModalWrapper = styled(motion.div)`
  height: 400px;
  width: 500px;
  position: absolute;
  background-color: white;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal_slider {
    height: 100%;
    width: 100%;
    position: absolute;
    transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
`;
const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  pointer-events: none;
  padding: 30px;
  transition: top 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CursorWrapper = styled(motion.div)`
  height: 80px;
  position: absolute;
  pointer-events: none;
  width: 80px;
  border-radius: 50%;
  color: var(--dark-1);
`;

const LabelWrapper = styled(motion.div)`
  font-size: 17px;
  color: #fff;
  /* pointer-events: none; */
  position: absolute;
  a {
    color: #fff;
    &:hover {
      text-decoration: none;
    }
  }
`;
