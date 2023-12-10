import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
const Home = lazy(() => import("./screens/Home"));
const About = lazy(() => import("./screens/About"));

export default function App() {
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="about"
            element={
              <Suspense fallback={<></>}>
                <About />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
