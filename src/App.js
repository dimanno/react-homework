import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {Users} from "./Components/Users/Users";
import {Home} from "./Components/Home/Home";


export default function App() {
    return (
        <Router>
            <div className={'main'}>
                <div className={'menu'}>
                    <div className={'menuItem'}>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className={'menuItem'}>
                        <Link to={'/users'}>Users</Link>
                    </div>
                </div>

                <div>
                    <Route path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/users'} component={Users}/>
                </div>

            </div>
        </Router>
    );
}