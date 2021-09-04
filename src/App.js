import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";
import {GenreBadge} from "./Components/GenreBadge/GenreBadge";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {MovieInfo} from "./Components/MovieInfo/MovieInfo";
import {MoviesListByGenres} from "./Components/MoviesListByGenres/MoviesListByGenres";


function App() {

  return (
      <Router>
          <div className={'mainBox'}>
              <div className={'header-top'}>
                  <Header/>
                  <Link to={'/'}>Home</Link>
              </div>
              <div className={'movie-app'}>
                  <div className={'row'}>
                      <Switch>
                      <Route path={`/:id`} render={(props) =>
                      {return <MoviesListByGenres {...props}/>}}/>/>
                      <MoviesList/>
                      </Switch>
                  </div>
              </div>
              <div className={'content'}>
                  <div className={'wramGenres'} >
                      <GenreBadge/>
                  </div>
                  <div>
                      <Switch>
                      <Route path={'/y/:id'} render={(props) =>
                      {return <MovieInfo {...props}/>}}/>
                  </Switch>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;