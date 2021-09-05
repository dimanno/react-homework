import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMovies, getMoviesByGenre} from "../../Services/service.movie";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

export function MoviesListByGenres ({match:{params:{id}}}) {
    let state = useSelector(({moviesByGenres}) => moviesByGenres);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getMoviesByGenre(id))},[id])
    console.log(state);
    return (
         <div>
             <div className={'d-flex'}>
                 {
                     state.map(value => <MoviesListCard {...value} key={value.id}/>)
                 }
             </div>
             <button className={'buttonBox'}>Load more</button>
         </div>
    )
}