import React, {useContext} from "react";
import { Button } from "@material-ui/core";
import GlobalContext from '../../context/GlobalState'
import YouTubeIcon from "@material-ui/icons/YouTube";

const WatchListControl = ({id, type}) => {
    const {removeMovieFromWatchList} = useContext(GlobalContext)
    console.log(id)
  return (
    <Button
      variant="contained"
      startIcon={<YouTubeIcon />}
      color="primary"
      // disabled={watchListDisabled}
      onClick={() => removeMovieFromWatchList(id)}
    >
      Remove
    </Button>
  );
};

export default WatchListControl