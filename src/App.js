import './App.css';

import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {EvenModel} from "./Components/Even model/evenModel";
import {OddModel} from "./Components/Odd model/oddModel";

function App() {
  return (
      <Router>
        <div className="main">
            <div className={"home"}>
                <Link to={'/'}>
                    <h4>Home</h4>
                </Link>
            </div>

            <div className={'menu'}>
                <div className={'carsList'}>
                    <Link to={'/CarsList1'}>
                        <h4>Even Model</h4>
                    </Link>
                </div>
                <div className={'carsList'}>
                    <Link to={'/CarsList2'}>
                        <h4>Odd Model</h4>
                    </Link>
                </div>


            </div>
        </div>
          <div>
              <Route path={'/CarsList1'} render={()=>{
                  return <EvenModel/>
              }}/>
              <Route path={'/CarsList2'} render={()=>{
                  return <OddModel/>
              }}/>
          </div>
      </Router>
  );
}

export default App;