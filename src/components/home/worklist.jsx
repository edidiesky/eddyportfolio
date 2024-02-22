import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectdata } from "../../data/projectdata";
const WorkList = () => {
  const ref = useRef([]);
  const headerref = useRef([]);
  ref.current = [];
  headerref.current = [];
  useLayoutEffect(() => {
    ref.current?.forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", opacity: 0 },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 1,
          stagger: 0.1,
          // delay:1,
          duration: 0.9,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    });

    headerref.current?.forEach((el) => {
      const text = new SplitType(el);
      const textrefelement_1 = text?.chars;
      gsap.fromTo(
        textrefelement_1,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          // delay:1,
          duration: 0.9,
          scrollTrigger: {
            trigger: textrefelement_1,
          },
        }
      );
    });
  }, []);

  const addRefs = (el) => {
    if (el && !ref?.current?.includes(el)) {
      ref.current.push(el);
    }
  };
  const adHeaderdRefs = (el) => {
    if (el && !headerref?.current?.includes(el)) {
      headerref.current.push(el);
    }
  };
  return (
    <>
      <div data-scroll className="py-12 w-full bg-[#E1DFDD]">
        <div className="w-full px-8 m-auto max-w-custom flex flex-col gap-12">
          <div className="text-2xl font-portfolio_bold w-full justify-between flex items-center pt-16 border-t border-[rgba(0,0,0,.4)] font-extrabold uppercase">
            <span ref={adHeaderdRefs}>02/</span>
            <span ref={adHeaderdRefs}>RECENT WORKS?</span>
            <span ref={adHeaderdRefs}>PROJECTS</span>
          </div>
          <div className="w-full pt-20 grid grid-cols-1 md:grid-cols-2 gap-20 justify-between">
            {projectdata.map((x, index) => {
              return (
                <div
                  key={index}
                  className="w-100 flex items-center flex-col gap-12"
                >
                  <div
                    data-scroll
                    data-scroll-speed="1"
                    ref={addRefs}
                    style={{
                      background: `${x?.color}`,
                    }}
                    className="flex w-full h-[400px] md:h-[500px] items-center justify-center"
                  >
                    <div data-scroll data-scroll-speed="2" className="w-[80%]">
                      <img src={x?.image} alt="" className="w-full" />
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl flex items-start flex-col gap-4 justify-between font-portfolio_bold">
                      <span
                        data-scroll
                        data-scroll-speed="2"
                        className="border-b border-[rgba(0,0,0,.2)] pb-4 w-full"
                      >
                        {x?.text}
                      </span>
                      <span
                        data-scroll
                        data-scroll-speed="2"
                        className="text-lg flex items-center justify-between w-full"
                      >
                        Development
                        <span>2023</span>
                      </span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkList;
