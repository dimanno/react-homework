import axios from "axios"
import {loadMovie, loadMovies,} from "../Redux/Actions/action.creator";

let config = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDMxNTI1N2I5YWQxNTE5YzRjMTgzYjAyYTNlNmEzZSIsInN1YiI6IjYxMmY0YzNhNTA3MzNjMDA4OTBlZDMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8rYwUp8ctQ-ucWBPCabkKQpnPQOkDE-1k1FNqIYPes'
    }
}
let axiosInstant = axios.create(config);

const getMovies = (page) => async (dispatch) => {
   let response = await axiosInstant.get('/discover/movie?page='+page);
    console.log(response.data);
    dispatch(loadMovies(response.data.results))
}

const getMovie = (id) => async (dispatch) => {
    let response = await axiosInstant.get(`/movie/${id})`);
    console.log(response);
    dispatch(loadMovie(response.data))
}

export {getMovies, getMovie}