import React, { useContext } from "react";
// import WatchListControl from "./WatchListControl";

import { GlobalContext } from "../../context/GlobalState";
import SingleContent from "../../components/SingleContent/SingleContent";

const WatchList = ({ movie, type }) => {
  const { watchList } = useContext(GlobalContext);
    // console.log(movie);
  console.log(localStorage.getItem("watchList"))
  return (
    <>
      <span className="pageTitle">My Watch List</span>

      {watchList.length > 0 ? (
        <div className="trending">
          {watchList &&
            watchList.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type="movie"
                vote_average={c.vote_average}
                type="watchList"
              />
            ))}
        </div>
      ) : (
        <h2>no movies in your list</h2>
      )}
      {/* <WatchListControl type={type} movie={watchList} /> */}
    </>
  );
};

export default WatchList;
