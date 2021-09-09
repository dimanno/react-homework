import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMoviesByGenre} from "../../Services/genres-service";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './movieListByGenres.css'

export function MoviesListByGenres ({match:{params:{id}}}) {
    let state = useSelector(({moviesByGenres}) => moviesByGenres);
    let dispatch = useDispatch()
    let [page, setPage] = useState(1)

    useEffect(() => {dispatch(getMoviesByGenre(id, page))},[id, page])

    const clickNextPage = () => {
      setPage(page+1)
    }
    return (
         <div>
             <div className={'d-flex'}>
                 {
                     state.map(value => <MoviesListCard {...value} key={value.id}/>)
                 }
             </div>
             <div className={'buttonBox'}>
                 <button onClick={clickNextPage} className={'buttonNextPage'}>Next page</button>
             </div>
         </div>
    )
}