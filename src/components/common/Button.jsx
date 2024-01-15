import { IoMdMail } from "react-icons/io";
import React, { useLayoutEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
const Button = () => {
  const [state, setState] = React.useState({
    value: "essienedidiong1000@gmail.com",
    copied: false,
  });
//   console.log(state.copied);
  return (
    <ButtonStyles className="w-100">
      <CopyToClipboard
        text={state.value}
        onCopy={() => setState({ copied: true })}
      >
        <div
          onClick={() => setState({ copied: true })}
          className="btn_wrapper w-100 flex item-center"
        >
          <span className="mail w-100 h-100 fs-16 text-bold text-dark">
            {state.copied ? "Mail has been copied" : "Click to copy mail"}
          </span>

          <div className="w-100 btn_container flex">
            <div className="btn_left flex item-center justify-center">
              <div className="icon flex item-center justify-center">
                <IoMdMail fontSize={"20px"} color="var(--dark-1)" />
              </div>
            </div>
            <div className="btn_right flex item-center justify-center">
              <h4 className="block fs-14 text-extra-bold">
                hello@eddiongessien.com   
              </h4>
            </div>
          </div>
        </div>
      </CopyToClipboard>
    </ButtonStyles>
  );
};

const ButtonStyles = styled.div`
  .btn_wrapper {
    margin-top: 4rem;
    /* border: 1px solid rgba(0, 0, 0, 0.4); */
    height: 8rem;
    width: 400px;
    @media (max-width: 780px) {
      width: 320px;
    }
    @media (max-width: 580px) {
      width: 90%;
    }
    .btn_container {
      z-index: 20;
      width: 100%;
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 100%;
      border-radius: 4px;
    }
    &:hover {
      &::before {
        background: var(--dark-1);
        opacity: 0.79;
        bottom: -3px;
        right: -3%;
      }
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--dark-1);
      opacity: 0.79;
      bottom: -16%;
      left: 0px;
      right: -8%;
      margin: auto;
      transition: all 0.4s;
      border-radius: 4px;
      z-index: 2;
    }
    /* overflow: hidden; */
    cursor: pointer;
    position: relative;
    @media (max-width: 780px) {
      h4 {
        font-size: 1.5rem;
      }
    }
    .mail {
      /* transform: translateY(250px); */
      position: absolute;
      top: 40%;
      left: 20%;
      width: 100%;
      height: 100%;
      color: #222 !important;
      font-size: 1.8rem;
      transition: transform 400ms;

      transform: translate(-50%, -20%);
      opacity: 0;
    }
    .btn_right {
      width: 80%;
      height: 100%;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      z-index: 20;
    }
    .btn_left {
      width: 20%;
      height: 100%;
      z-index: 20;
    }
  }
`;

export default Button;
