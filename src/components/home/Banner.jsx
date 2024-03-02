import React, { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Banner = () => {
  let direction = -1;
  let xPercentValue = 0;
  const helloRef1 = useRef(null);
  const helloRef2 = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sliderRef?.current, {
      x: "-=500px",
      scrollTrigger: {
        trigger: document.documentElement,
        start:0,
        end:window.innerHeight,
        scrub: 0.2,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });

    requestAnimationFrame(handleAnimationScroll);
  }, []);
  const handleAnimationScroll = (e) => {
    if (xPercentValue <= -140) {
      xPercentValue = 0;
    }

    if (xPercentValue > 0) {
      xPercentValue = -140;
    }
    gsap.set(helloRef1?.current, { xPercent: xPercentValue });
    gsap.set(helloRef2?.current, { xPercent: xPercentValue });

    xPercentValue += 0.12 * direction;
    requestAnimationFrame(handleAnimationScroll);
  };

  return (
    <>
      <div data-scroll className="py-16 w-full">
        <div className="w-full px-4 md:px-8 m-auto max-w-custom flex flex-col gap-12 md:gap-20">
          <Link
            to={"mailto:chukwudobemicah@gmail.com?subject=Hey! lets work!"}
            ref={sliderRef}
            // ref={aboutTextRef_1}
            className="slider relative text-[3rem] text-start sm:text-6xl lg:text-9xl flex w-full pb-16 md:pb-24 whitespace-nowrap font-normal font-portfolio_bold1 text-text_dark_1 uppercase"
          >
            <span ref={helloRef1}>
              {/* LET'S WORK - SAY HELLO- HELLO@VICTOR.COM */} Sustainable.{" "}
              Delicious. Traceable.
            </span>
            <span ref={helloRef2} className="absolute left-[200%] ">
              {/* LET'S WORK - SAY HELLO- HELLO@VICTOR.COM */} Sustainable.{" "}
              Delicious. Traceable.
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
