import './App.css';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {Users} from "./Components/Users/Users";
import {Posts} from "./Components/Posts/Posts";
import {Comments} from "./Components/Comments/Comments";
function App() {
  return (
      <Router>
        <div className="main">


            <div className={'menu'}>
                <div className={'menuUsers buttonMenu'}>
                    <Link to={'/'}>
                        <h4>Home</h4>
                    </Link>
                </div>
                <div className={'menuUsers buttonMenu'}>
                    <Link to={'/users'}>
                        <h4>Users</h4>
                    </Link>
                </div>
                <div className={'menuPosts buttonMenu'}>
                    <Link to={'/posts'}>
                        <h4>Posts</h4>
                    </Link>
                </div>
                <div className={'menuComments buttonMenu'}>
                    <Link to={'/comments'}>
                        <h4>Comments</h4>
                    </Link>
                </div>
            </div>
        </div>
          <hr/>
            <div>
                <Route path={'/users'}>
                    <Users/>
                </Route>

                <Route path={'/posts'} component={Posts}/>

                <Route path={'/comments'} render={()=>{
                    return <Comments/>
                }}/>
            </div>
      </Router>
    );
}


export default App;