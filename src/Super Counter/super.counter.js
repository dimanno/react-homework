import {reducer} from "../Reducer Super Counter/reducer";
import {useReducer} from "react";
export function SuperCounter() {
    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    let {a, b, c} = state;
    console.log(state)
    return (
        <div className={'superCounterBox'}>
            <h1>Super Counter</h1>
             <div>
                 <h2>Counter A</h2>
                 <p><h3>{a}</h3></p>
                <button onClick={()=>dispatch({key: 'a', count: 10, act: 'Plus'})}>Click Up</button>
                <button onClick={()=>dispatch({key: 'a', count: 10, act: 'Minus'})}>Click Down</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <p><h3>{b}</h3></p>
                <button onClick={()=>dispatch({key: 'b', count: 100, act: 'Plus'})}>Click Up</button>
                <button onClick={()=>dispatch({key: 'b', count: 100, act: 'Minus'})}>Click Down</button>
            </div>
            <div>
                <h2>Counter C</h2>
                <p><h3>{c}</h3></p>
                <button onClick={()=>dispatch({key: 'c', count: 1000, act: 'Plus'})}>Click Up</button>
                <button onClick={()=>dispatch({key: 'c', count: 1000, act: 'Minus'})}>Click Down</button>
            </div>
        </div>
    )
}