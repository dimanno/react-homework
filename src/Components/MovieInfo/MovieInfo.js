import './movieInfo.css'
import {images_API} from "../../images/images";
import {useEffect} from "react";
import {getMovie} from "../../Services/service.movie";
import {useDispatch, useSelector} from "react-redux";
import {Foo} from "../StarsRating/StarsRating";
import {Link} from "react-router-dom";



export function MovieInfo({match:{params:{id}}}) {
    console.log(id)
    useEffect(  ()=>{
        dispatch(getMovie(id))
    },[id])
    let state = useSelector(state => state)
    console.log(state)
    let dispatch = useDispatch()

    let movie = state.movie
    console.log(movie)

    let genres = movie.genres
    console.log(genres);

    return (
        <div className={' d-flex MovieInfoBox'}>
            <div className={'poster'}>
               <img width={'300px'} src={images_API+movie.poster_path} alt={'posterCard'}/>
            </div>
            <div>
                <h2>{movie.title}</h2>
                    <h6>({movie.release_date})</h6>
                <div className={'genresMovieBox'} >
                    {
                     genres && genres.map(value =>
                        <ul>
                            <li>
                                    <Link to={{pathname: `/${value.id}`}}>{value.name}</Link>
                            </li>
                        </ul>
                        )
                    }
                </div>
                <p>
                    {movie.overview}
                </p>
                <p> Duration - {movie.runtime}m
                    </p>
                <Foo vote_average={movie.vote_average}/>
            </div>
        </div>
    )
}