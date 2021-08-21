import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Posts} from "./Components/Posts/Posts";
function App() {

  return (
<Router>
      <div className="menu">
          <div className={'menuItem'}>
              <Link to={'/'}>Home</Link>
          </div>
          <div className={'menuItem'}>
              <Link to={'/posts'}>Posts</Link>
          </div>
      </div>
    <div>
        <Route path={'/'}>
           <Home/>
        </Route>
        <Route path={'/posts'} component={Posts}/>
    </div>
</Router>
  );
}

export default App;