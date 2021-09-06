import './movieInfo.css'
import {images_API} from "../../images/images";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getMovie} from "../../Services/service.movie";
import {useDispatch, useSelector} from "react-redux";
import data from "bootstrap/js/src/dom/data";
import {Foo} from "../StarsRating/StarsRating";

export function MovieInfo({match:{params:{id}}}) {
    console.log(id)
    // let {id:id} = useParams('id')
    let state = useSelector(({movie}) => movie)
    let dispatch = useDispatch()
    console.log(state)
    useEffect(()=>{
            dispatch(getMovie(id))
    },[id])
    return (
        <div className={' d-flex MovieInfoBox'}>
            <div className={'poster'}>
               <img width={'300px'} src={images_API+state.poster_path} alt={'posterCard'}/>
            </div>
            <div>
                <h2>{state.title}</h2>
                <p>
                    {state.overview}
                </p>
                {state.video}
                <Foo/>
            </div>

        </div>
    )
}