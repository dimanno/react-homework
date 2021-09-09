import './moviesList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import {getMovies} from "../../Services/service.movie";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

export function MoviesList() {
    let state = useSelector(({movies}) => movies);
    let dispatch = useDispatch()
    let [page, setPage] = useState(1)
    useEffect( () => {dispatch(getMovies(page))},[page])
    console.log(state);


    const load_more = () => {
            setPage(page+1)
    }
    return (
        <div>

            <div className={'d-flex movieListBox'}>
                    {
                    state && state.map(value => <MoviesListCard {...value} key={value.id}/>)
                    }
            </div>

            <div className={'buttonBox'}>
                <button onClick={load_more} className={'buttonNextPage'}>Next Page</button>
            </div>

        </div>

    );
}