import './movieInfo.css'
import {images_API} from "../../images/images";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getMovie} from "../../Services/service.movie";
import {useDispatch, useSelector} from "react-redux";

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
        <div className={'MovieInfoBox'}>
            <h2>{}</h2>
            <div>
                {images_API}
            </div>
            <p>
                {JSON.stringify(state)}
            </p>
        </div>
    )
}