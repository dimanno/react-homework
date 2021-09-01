import './App.css';
import {MoviesList} from "./Components/MoviesList/MoviesList";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {getMovies} from "./Services/service.movie";

function App() {

  return (
      <Router>
            <div className="main">
                <Link to={'/'}>Movies Page</Link>

                <MoviesList/>
            </div>
          <div>
              <Route path={'/'} component={MoviesList}/>
          </div>
      </Router>
  );
}

export default App;