import axios from "axios"
import {loadGenres, loadMovie, loadMovies, loadGenre} from "../Redux/Actions/action.creator";

let config = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDMxNTI1N2I5YWQxNTE5YzRjMTgzYjAyYTNlNmEzZSIsInN1YiI6IjYxMmY0YzNhNTA3MzNjMDA4OTBlZDMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8rYwUp8ctQ-ucWBPCabkKQpnPQOkDE-1k1FNqIYPes'
    }
}
let axiosInstant = axios.create(config);

const getMovies = () => async (dispatch) => {
   let response = await axiosInstant.get('/discover/movie/');
    console.log(response.data.results);
    dispatch(loadMovies(response.data.results))
}

const getMovie = (id) => async (dispatch) => {
    let response = await axiosInstant.get(`/discover/movie/${id})`);
    console.log(response);
    dispatch(loadMovie(response))
}

const getGenres = () => async (dispatch) => {
    let response = await axiosInstant.get('/genre/movie/list');
    console.log(response.data.genres);
    dispatch(loadGenres(response.data.genres))
}

const getMoviesByGenre = (id) => async (dispatch) => {
    let response = await axiosInstant.get(`/discover/movie/?with_genres=${id}`);
    console.log(response);
    dispatch(loadGenre(response))
}



export {getMovies, getGenres, getMovie, getMoviesByGenre}