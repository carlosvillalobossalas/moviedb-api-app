import React from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

export const NavBar = () => {
  const { height } = useWindowDimensions();
  return (
    <div style={{ backgroundColor: "green", height: height * 0.05 }}>
      NavBar 12313
    </div>
  );
};
