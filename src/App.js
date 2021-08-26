import './App.css';
import {useReducer} from "react";
import {SuperCounter} from "./Super Counter/super.counter";

const reducer = (state = 0, action) => {
    switch (action) {
        case "+":
            return state +10
        case  '-':
            return state -2
        default:
            return state
    }

}

function App() {

       let [state, dispatch] = useReducer(reducer);

  return (
      <div className="main">
          <div className={'counterSimple'}>
              <h1>Counter {state}</h1>
              <button onClick={() => dispatch('+')}>Click Up</button>
              <button onClick={() => dispatch('-')}>Click Down</button>
          </div>
          <div className={'counterSuper'}>
              <SuperCounter/>
          </div>


      </div>
  );
}

export default App;