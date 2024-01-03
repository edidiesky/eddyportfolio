import React, { useEffect, useState } from "react";

const useMouse = () => {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleUpdateMousePosition = (e) => {
      const { clientX, clientY } = e;
      const rect = e.target.getBoundingClientRect();
      const x = clientX - rect.width/ 2;
      const y = clientY - rect.height/ 2;

      setMousePosition({ x: x, y: y });
    };
    window.addEventListener("mousemove", handleUpdateMousePosition);
    return () =>
      window.removeEventListener("mousemove", handleUpdateMousePosition);
  }, [setMousePosition]);
  return mouseposition;
};

export default useMouse;
