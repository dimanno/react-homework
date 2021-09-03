import './moviesList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import {getMovies} from "../../Services/service.movie";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Route} from "react-router-dom";
import {MovieInfo} from "../MovieInfo/MovieInfo";

export function MoviesList() {
    let state = useSelector(({movies}) => movies);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getMovies())},[])
    console.log(state);
    return (
            <div>
                <div className={'d-flex justify-content-lg-start m-3'}>
                    {
                        state.map(value => <MoviesListCard {...value} key={value.id}/>)
                    }
                </div>
            </div>

    );
}