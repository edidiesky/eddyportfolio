import React, { useEffect, useState, lazy, Suspense } from "react";
import Lenis from "@studio-freight/lenis";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
// import About from "./screens/About";
import Hero from "./components/test/Hero";
import About from "./components/test/About";
import Works from "./components/test/Works";

export default function App() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
   const lenis = new Lenis({
     duration: 1.2,
     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   });

   function raf(time) {
     lenis.raf(time);
    //  ScrollTrigger.update();
    //  requestAnimationFrame(raf);
   }

   requestAnimationFrame(raf);
  }, []);
  return (
    <div className="based" style={{ height }}>
      {/* <Hero />
      <About />
      <Works /> */}
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
