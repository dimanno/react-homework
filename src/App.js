import './App.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Users} from "./Components/Users/Users";

function App() {

  return (
      <Router>
          <div className="main">
                <Link to={'/'}>
                    <h3>Home</h3>
                </Link>
                <Link to={'/users'}>
                    <h3>Users</h3>
                </Link>
          </div>

          <div>
              <Route path={'/'} component={Home}/>
              <Route path={'/users'} component={Users}/>
          </div>
      </Router>

  );
}

export default App;