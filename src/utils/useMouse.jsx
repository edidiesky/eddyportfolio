import React, { useEffect, useState } from "react";

const useMouse = () => {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleUpdateMousePosition = (e) => {
      const { pageX, pageY } = e;
      const rect = e.target.getBoundingClientRect();
      const x = pageX - 60;
      const y = pageY - 60;

      setMousePosition({ x: x, y: y });
    };
    window.addEventListener("mousemove", handleUpdateMousePosition);
    return () =>
      window.removeEventListener("mousemove", handleUpdateMousePosition);
  }, [setMousePosition]);
  return mouseposition;
};

export default useMouse;
