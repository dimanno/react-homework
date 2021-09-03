import {store} from "../Store";
import {GET_GENRES, LOAD_MOVIES, GET_MOVIE} from "../Actions/action.type";

let  initialState = {movies: [], genres:[], movie:{}}
export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {...state, movies: [...action.payload]}
        case GET_GENRES:
            return {...state, genres: [...action.payload]}
        case GET_MOVIE:
            return {...state, movie: {...action.payload}}
        default:
            return state
    }
}