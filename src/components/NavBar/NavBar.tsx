import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
export const NavBar = () => {
  const { height } = useWindowDimensions();
  return (
    <div className="navbar" style={{ height: height * 0.05 }}>
      <img src={require("../../assets/tmdblogo.png")} alt="logo" width="115" />
      <p>Movies</p>
      <p>Tv Shows</p>
      <p>People</p>
      <p>More</p>
      <p>icon</p>
      <p>icon</p>
      <FaBell style={{ cursor: "pointer" }} />
      <FaUserCircle style={{ cursor: "pointer" }} />
      <FaSearch style={{ cursor: "pointer" }} />
    </div>
  );
};
