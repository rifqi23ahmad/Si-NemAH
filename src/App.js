import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from './components/BottomNav'
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import MostPopular from './pages/mostPopular/mostPopular'
import Movies from './pages/movies/movies'
import TvSeries from './pages/tvSeries/tvSeries'
import WatchList from './pages/watchList/watchList'
import Watched from './pages/watched/watched'
import Search from './pages/search/search'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
      <Container>
        <Switch>
          <Route path='/' component={MostPopular} exact/>
          <Route path='/movies' component={Movies} />
          <Route path='/tvSeries' component={TvSeries} />
          <Route path='/watchList' component={WatchList} />
          <Route path='/watched' component={Watched} />
          <Route path='/search' component={Search} />
        </Switch>
      </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
