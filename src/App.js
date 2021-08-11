import './App.css';
import Users from "./Components/Users/Users";
import {Posts} from "./Components/Posts/Posts";
import {Comments} from "./Components/Comments/Comments";
function App() {
  return (
      <div className="main">
          <Users/>
          <Posts/>
          <Comments/>
      </div>
  );
}

export default App;