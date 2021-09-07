import './movieInfo.css'
import {images_API} from "../../images/images";
import {useEffect} from "react";
import {getMovie} from "../../Services/service.movie";
import {useDispatch, useSelector} from "react-redux";
import {Foo, Bar} from "../StarsRating/StarsRating";
import {Link} from "react-router-dom";



export function MovieInfo({match:{params:{id}}}) {
    console.log(id)
    let state = useSelector(({movie}) => movie)
    let dispatch = useDispatch()
    console.log(state)
    useEffect( ()=>{
            dispatch(getMovie(id))
    },[id])

    let genres = state.genres
    console.log(genres);

    return (
        <div className={' d-flex MovieInfoBox'}>
            <div className={'poster'}>
               <img width={'300px'} src={images_API+state.poster_path} alt={'posterCard'}/>
            </div>
            <div>
                <h2>{state.title}</h2>
                    <h6>({state.release_date})</h6>
                <div className={'genresMovieBox'} >
                    {
                        genres.map(value => <ul>
                                <li>
                                    <Link to={{pathname: `/${value.id}`}}>{value.name}</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
                <p>
                    {state.overview}
                </p>
                <p> Duration - {state.runtime}m
                    {state.video}</p>
                <Foo vote_average={state.vote_average}/>
            </div>
        </div>
    )
}