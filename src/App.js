import './App.css';
import Users from "./Components/Users/Users";
import {Posts} from "./Components/Posts/Posts";
function App() {
  return (
      <div className="main">
          <Users/>
          <Posts/>
      </div>
  );
}

export default App;