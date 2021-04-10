import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    zindex: 100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
        history.push("/");
      } else if (value === 1) {
        history.push("/movies");
      } else if (value === 2) {
        history.push("/tvSeries");
      } else if (value === 3) {
        history.push("/watchList");
      } else if (value === 4) {
        history.push("/watched");
      } else if (value === 5) {
        history.push('/search')
      }
  }, [value, history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Most Popular" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
      <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction label="Watch List" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="watched" icon={<MovieIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
