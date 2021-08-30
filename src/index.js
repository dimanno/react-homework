import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux"

const userReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case 'FETCH_USERS':
            console.log(action.payload)
            return {...state, users: [...action.payload]}
        case 'CLEAR_USERS':
            return {...state, users: []}
        case 'SAT_USERS':
            return {...state}
        case 'ADD_USER':
            console.log(action.payload)
            return {...state, users:[...state.users, action.payload]}

        default:
            return state
    }
}
const initialState = {users: []}
export const store = createStore(userReducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
