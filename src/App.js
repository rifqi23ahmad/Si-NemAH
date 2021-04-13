import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import WatchList from "./Pages/WatchList/WatchList";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Container>
            <Switch>
              <Route path="/" component={Trending} exact />
              <Route path="/movies" component={Movies} />
              <Route path="/series" component={Series} />
              <Route path="/search" component={Search} />
              <Route path="/WatchList" component={WatchList} />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
