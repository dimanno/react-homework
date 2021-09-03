import {GET_GENRES, LOAD_MOVIES, GET_MOVIE, GET_GENRE} from "./action.type";


const loadMovies = (payload) => {
  return {type: LOAD_MOVIES, payload: payload}
}

const loadMovie = (payload) => {
  return{type: GET_MOVIE, payload: payload}
}

const loadGenres = (payload) => {
  return {type: GET_GENRES, payload: payload}
}

const loadGenre = (payload) => {
  return {type: GET_GENRE, payload: payload}
}


export {loadMovies, loadGenres, loadMovie, loadGenre}