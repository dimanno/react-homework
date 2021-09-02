import {GET_GENRES, LOAD_MOVIES} from "./action.type";

const loadMovies = (payload) => {
  return (
      {type: LOAD_MOVIES, payload: payload}
  )
}

const loadGenres = (payload) => {
  return (
  {type: GET_GENRES, payload: payload}
  )
}

export {loadMovies, loadGenres }