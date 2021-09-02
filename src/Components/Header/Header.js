import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList";

 export const Header = () => {

  return (
      <Router>
          <div className="header">
              <Link to={'/'}>All films</Link>
          </div>
      </Router>
  )
}