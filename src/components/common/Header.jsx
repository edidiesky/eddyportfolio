import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = ({ text, path }) => {
  const [active, setActive] = useState(false);
  const [activetwitter, setActiveTwitter] = useState(false);
  const [activegithub, setActiveGithub] = useState(false);
  const [activelinkedln, setActiveLinkedln] = useState(false);
  return (
    <div className="w-full">
      <div className="w-100 w-full px-8 m-auto max-w-custom py-8">
        <div className="w-90 auto hero_top_wrapper text-text_dark_1 flex item-center justify-space gap-4">
          <h4
            onMouseMove={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className="relative text-base md:text-xl w-auto md:w-[300px] overflow-hidden font-portfolio_bold font-normal "
          >
            <motion.div
              animate={{ top: active ? "-100%" : "0" }}
              transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
              className="w-full h-full flex items-center flex-col relative"
            >
              <Link to={"/"} className="h-full w-full ">
                VICTOR ESSIEN
              </Link>
              <Link to={"/"} className="absolute top-[100%] w-full left-0 ">
                PORTFOLIO ©2024
              </Link>
            </motion.div>
          </h4>
          <div className="flex item-center justify-end flex-1 gap-4">
            <div className="w-full flex item-center justify-end gap-4">
              <div className="flex items-center gap-3 md:gap-8">
                <h4
                  onMouseMove={() => setActiveGithub(true)}
                  onMouseLeave={() => setActiveGithub(false)}
                  className="relative text-base md:text-sm w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activegithub ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      to={"https://twitter.com/edidiesky"}
                      target="_blank"
                      className=""
                    >
                      Twitter
                    </Link>
                    <Link
                      to={"https://twitter.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 "
                    >
                      Twitter
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveTwitter(true)}
                  onMouseLeave={() => setActiveTwitter(false)}
                  className="relative text-base md:text-sm w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activetwitter ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      to={"https://github.com/edidiesky"}
                      target="_blank"
                      className=""
                    >
                      Github
                    </Link>
                    <Link
                      to={"https://github.com/edidiesky"}
                      className="absolute top-[100%] w-full left-0 "
                    >
                      Github
                    </Link>
                  </motion.div>
                </h4>

                <h4
                  onMouseMove={() => setActiveLinkedln(true)}
                  onMouseLeave={() => setActiveLinkedln(false)}
                  className="relative text-base md:text-sm w-auto overflow-hidden font-portfolio_bold font-normal "
                >
                  <motion.div
                    animate={{ top: activelinkedln ? "-100%" : "0" }}
                    transition={{ duration: 0.5, ease: [0.75, 0, 0.24, 1] }}
                    className="w-full h-full flex items-center flex-col relative"
                  >
                    <Link
                      to={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      target="_blank"
                      className=""
                    >
                      LinkedIn
                    </Link>
                    <Link
                      to={
                        "https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/"
                      }
                      className="absolute top-[100%] w-full left-0 "
                    >
                      LinkedIn
                    </Link>
                  </motion.div>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
