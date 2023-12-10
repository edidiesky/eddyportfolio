import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <HeaderStyles className="w-100">
      <div className="w-100 hero_top">
        <div className="w-90 auto hero_top_wrapper flex item-center justify-space">
          <Link to={'/'} className="fs-16 text-bold">© Code by Victor</Link>
          <div className="flex-1 hero_top_wrapper_left flex item-center jusify-center gap-4">
            <div className="fs-20 icon flex item-center justify-center text-bold">
              <FaXTwitter fontSize={"25px"} />
            </div>
            <div className="fs-20 icon flex item-center justify-center text-bold">
              <BsGithub fontSize={"25px"} />
            </div>
            <div className="fs-20 icon flex item-center justify-center text-bold">
              <RiLinkedinFill fontSize={"25px"} />
            </div>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div`
  width: 100%;
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
