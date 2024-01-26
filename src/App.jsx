import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Hero from "./components/test/Hero";
// import About from "./components/test/About";
import Works from "./components/test/Works";

export default function App() {
  const [height, setHeight] = useState(0);
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
