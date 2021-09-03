import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";
import {GenreBadge} from "./Components/GenreBadge/GenreBadge";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {MovieInfo} from "./Components/MovieInfo/MovieInfo";

function App() {

  return (
      <Router>
          <div className={'mainBox'}>
              <div className={'header-top'}>
                  <Header/>
                  <Link to={'/'}>Home</Link>
              </div>

              <div className={'content'}>
                  <div className={'wramGenres'} >
                      <GenreBadge/>
                  </div>

                  <div className={'movie-app container-fluid'}>
                      <div className={'row wrap'}>
                          <MoviesList/>
                      </div>
                  </div>
              </div>
              <div>
                  <Route path={'/'}/>
              </div>
          </div>
      </Router>
  );
}

export default App;