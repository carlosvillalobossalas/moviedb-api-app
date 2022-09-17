import "./App.css";
import Home from "./components/Home/Home";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

export const App = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div className="container" style={{ width, height }}>
      <Home />
    </div>
  );
};
