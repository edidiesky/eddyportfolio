import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./screens/Home";
import About from "./screens/About";

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
