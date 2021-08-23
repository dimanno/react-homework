import './App.css';
import {BrowserRouter as Router,
    Route,
    Switch,
    Link,
    withRouter
} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import {Cars} from "./Components/Cars/Cars";
import {CreateCar} from "./Components/Form create-car/Form.create-car";
import {EditCarForm} from "./Components/Forms edit-car/Form.edit-car";
import {FlavorForm} from "./Components/Tests";

function App() {
  return (
  <Router>
      <div className="main">
        <div className={'menuBox'}>
            <div className={'itemMenuBox'}>
               <Link to={'/'}>Home</Link>
            </div>
            <div className={'itemMenuBox'}>
                <Link to={'/cars'}>Cars</Link>
            </div>
            <div className={'itemMenuBox'}>
                <Link to={'/create-car'}>Create car</Link>
            </div>
            <div className={'itemMenuBox'}>
                <Link to={'/update-car'}>Update car</Link>
            </div>
        </div>
      </div>
      <div>
          <Route path={'/'} component={FlavorForm}/>
          <Route path={'/cars'} component={Cars}/>
          <Route path={'/create-car'} component={CreateCar}/>

          <Route path={'/update-car'} component={EditCarForm}/>
      </div>
  </Router>
  );
}

export default App;