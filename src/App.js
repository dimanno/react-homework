
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {Users} from "./Components/Users/Users";


export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users page</Link>
                <div>
                    <Route path={'/users'} component={Users}/>
                </div>

            </div>
        </Router>
    );
}