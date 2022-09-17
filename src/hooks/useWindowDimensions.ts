import { useEffect, useState } from "react";

const getWindowDimnesions = () => {
  const { innerHeight, innerWidth } = window;

  return {
    width: innerWidth,
    height: innerHeight,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimnesions);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimnesions());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};
