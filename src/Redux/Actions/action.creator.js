import {LOAD_MOVIES} from "./action.type";

const loadMovies = (payload) => {
  return (
      {type: LOAD_MOVIES, payload: payload}
  )
}

export {loadMovies}