import {
  FreeToWatch,
  Latest,
  Leaderboard,
  NavBar,
  Popular,
  SearchBar,
  Trending,
} from "../index";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
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
