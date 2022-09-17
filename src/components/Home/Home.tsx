import {
  FreeToWatch,
  Latest,
  Leaderboard,
  NavBar,
  Popular,
  SearchBar,
  Trending,
} from "../index";

import "../components.css";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <SearchBar />
      <Popular />
      <FreeToWatch />
      <Latest />
      <Trending />
      <Leaderboard />
    </div>
  );
};

export default Home;
