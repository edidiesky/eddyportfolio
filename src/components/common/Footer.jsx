import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../assets/svg/arrow";
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer w-90 auto flex item-center gap-4 justify-space">
        <div className="w-100 footer_left flex item-center gap-4">
          <div className="flex column fs-14 gap-2 text-extra-bold">
            <span className="block text-grey fs-12">VERSION</span>
            <span className="block text-white">2023 © Edition</span>
          </div>

          <div className="flex column fs-14 gap-2 text-extra-bold">
            <span className="block text-grey fs-12">LOCATION</span>
            <span className="block text-white">Nigeria</span>
          </div>
        </div>
        <div className="w-100 flex item-center footer_right justify-end">
          <div className="flex w-100 column fs-14 gap-2 text-extra-bold">
            <span className="block text-grey fs-12">SOCIALS</span>
            <div className="w-100 flex gap-3 item-center">
              <Link
                to={"https://github.com/edidiesky"}
                target="_blank"
                className="block span_highlight text-white"
              >
                Github
              </Link>
              <Link
                to={"https://twitter.com/edidiesky"}
                target="_blank"
                className="block span_highlight text-white"
              >
                Facebook
              </Link>
              <Link
                to={"https://twitter.com/edidiesky"}
                target="_blank"
                className="block span_highlight text-white"
              >
                Twitter
              </Link>
              <Link
                to={"https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"}
                target="_blank"
                className="block span_highlight text-white"
              >
                Linkedln
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

const FooterStyles = styled.div`
  width: 100%;
  .span_highlight {
    transition: all 0.5s;

    color: #fff;
    &:hover {
      color: rgb(238, 161, 190);
    }
  }
  .footer {
    padding: 4rem 0;
    @media (max-width: 580px) {
      flex-direction: column;
      justify-content: flex-start;
      gap:1rem;
      .footer_right {
        justify-content: flex-start;
      }
    }
    .footer_right {
      justify-content: flex-end;
    }
  }
`;

export default Footer;