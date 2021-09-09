import {loadGenres, loadMoviesByGenre} from "../Redux/Actions/action.creator";
import axios from "axios";


let config = {
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDMxNTI1N2I5YWQxNTE5YzRjMTgzYjAyYTNlNmEzZSIsInN1YiI6IjYxMmY0YzNhNTA3MzNjMDA4OTBlZDMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8rYwUp8ctQ-ucWBPCabkKQpnPQOkDE-1k1FNqIYPes'
    }
}
let axiosInstant = axios.create(config);

const getGenres = () => async (dispatch) => {
    let response = await axiosInstant.get('/genre/movie/list');
    console.log(response.data.genres);
    dispatch(loadGenres(response.data.genres))
}

const getMoviesByGenre = (id, page) => async (dispatch) => {
    let response = await axiosInstant.get(`/discover/movie?with_genres=${id}&page=`+page);
    console.log(response);
    dispatch(loadMoviesByGenre(response.data.results))
}

export {getGenres, getMoviesByGenre}