import {useEffect} from "react";
import {getMovies} from "../../Services/service.movie";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

export function MoviesList() {
    let movies = useSelector(({movies}) => movies);
    // let {movies} = state
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getMovies())},[])
    console.log(movies);
    return (
        <div className="main">
            {
                movies.map(value => value.id)
            }
        </div>
    );
}