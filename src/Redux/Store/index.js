import {createStore, applyMiddleware} from "redux"
import {moviesReducer} from "../Reducers/moviesReducer";
import ReduxThunk from "redux-thunk"

export  let store = createStore(moviesReducer, applyMiddleware(ReduxThunk))