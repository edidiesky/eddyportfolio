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
    <ButtonStyles className="flex column w-100 item-center justify-center">
      <CopyToClipboard
        text={state.value}
        onCopy={() => setState({ copied: true })}
      >
        <div
          onClick={() => setState({ copied: true })}
          className="btn_wrapper w-100 flex item-center"
        >
          <span className="mail w-100 h-100 fs-16 text-bold text-dark">
            {!state.copied ? "Mail has been copied" : "Click to copy mail"}
          </span>

          <div className="btn_left flex item-center justify-center">
            <div className="icon flex item-center justify-center">
              <IoMdMail fontSize={"20px"} color="#fff" />
            </div>
          </div>
          <div className="btn_right flex item-center justify-center">
            <h4 className="block fs-18 text-extra-bold">
              hello@eddiongessien.com
            </h4>
          </div>
        </div>
      </CopyToClipboard>
    </ButtonStyles>
  );
};

const ButtonStyles = styled.div`
  .btn_wrapper {
    margin-top: 4rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    height: 9rem;
    width: 90%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    @media (max-width:580px) {
        width:100%;
        h4 {
            font-size:16px;
        }
    }
    &:hover {
      &::before {
        transform: skew(0, 0) rotate(0) translateY(0);
      }
      .mail {
        opacity: 1;
        transform: scale(1);
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
    &::before {
      content: "";
      background-color: #eea1be;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: skew(0, 10deg) rotate(10deg) translateY(250px);
      transition: transform 400ms;
      z-index: -10;
    }
    .btn_right {
      width: 80%;
      height: 100%;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
    }
    .btn_left {
      width: 20%;
      height: 100%;
    }
  }
`;

export default Button;
