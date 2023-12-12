import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Arrow from "../../assets/svg/arrow";

const Header = () => {
  return (
    <HeaderStyles className="w-100">
      <div className="w-100 hero_top">
        <div className="w-90 auto hero_top_wrapper flex item-center justify-space">
          <Link to={"/"} className="fs-16 text-bold">
            © Code by Victor
          </Link>
          <div className="flex-1 hero_top_wrapper_left flex item-center jusify-center gap-4">
            <div className="flex item-center gap-2">
              <Link
                to={"https://twitter.com/edidiesky"}
                target="_blank"
                className="fs-20 icon flex item-center justify-center text-bold"
              >
                <FaXTwitter fontSize={"22px"} />
              </Link>
              <Link
                to={"https://github.com/edidiesky"}
                target="_blank"
                className="fs-20 icon flex item-center justify-center text-bold"
              >
                <BsGithub fontSize={"22px"} />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"}
                target="_blank"
                className="fs-20 icon flex item-center justify-center text-bold"
              >
                <RiLinkedinFill fontSize={"22px"} />
              </Link>
            </div>

            <Link
              to={"/about"}
              className="fs-16 flex gap-1 item-center justify-center text-bold"
            >
              About & Services
              <Arrow color={"#fff"} />
            </Link>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div`
  width: 100%;
  a {
    .arrow {
      color:#fff !important;
      transition: all 0.5s;
    }
    &:hover {
      .arrow {
        transform: translateX(20px);
      }
    }
  }
  .hero_top {
    padding: 2rem 0;
    .icon {
      transition: all 0.5s;
      cursor: pointer;
      width: 4rem !important;
      height: 4rem !important;
      &:hover {
        background: var(--grey-1);
      }
    }
    .hero_top_wrapper {
      padding: 2rem 0;

      justify-content: space-between;
      .hero_top_wrapper_left {
        justify-content: flex-end;
      }
    }
  }
`;

export default Header;
