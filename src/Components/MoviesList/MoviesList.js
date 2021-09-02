import './moviesList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import {getMovies} from "../../Services/service.movie";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

export function MoviesList() {
    let store = useSelector(({movies}) => movies);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getMovies())},[])
    console.log(store);
    return (
        <div className={'movieslistBox'}>
            <div className={'d-flex justify-content-start m-3'}>
                {
                    store.map(value => <MoviesListCard {...value} key={value.id}/>)
                }
            </div>

        </div>
    );
}