import React from "react";
import { Link } from "react-router-dom";
const Header = ({ text,path }) => {
  return (
    <div className="w-full">
      <div className="w-100 w-full px-8 m-auto max-w-custom py-8">
        <div className="w-90 auto hero_top_wrapper flex item-center justify-space gap-4">
          <Link to={"/"} className="text-base md:text-2xl font-portfolio_bold1 font-normal">
            VICTOR ESSIEN
          </Link>
          <div className="flex item-center justify-end flex-1 gap-4">
            <div className="w-full flex item-center justify-end gap-4">
              <div className="flex items-center gap-3 md:gap-8">
                <Link
                  to={"https://twitter.com/edidiesky"}
                  target="_blank"
                  className="text-text_dark_1 font-portfolio_bold1 font-normal text-[12px] md:text-sm flex item-center justify-center text-bold"
                >
                 Twitter
                </Link>
                <Link
                  to={"https://github.com/edidiesky"}
                  target="_blank"
                  className="text-text_dark_1 font-portfolio_bold1 font-normal text-[12px] md:text-sm flex item-center justify-center text-bold"
                >
                  Github
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"}
                  target="_blank"
                  className="text-text_dark_1 font-portfolio_bold1 font-normal text-[12px] md:text-sm flex item-center justify-center text-bold"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
