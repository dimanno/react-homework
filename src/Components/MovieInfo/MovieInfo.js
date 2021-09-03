import './movieInfo.css'
import {images_API} from "../../images/images";

export function MovieInfo({location: state}) {
console.log(state.title)
    return (
        <div className={'MovieInfoBox'}>
            <h2>{state.title}</h2>
            <div>
                {images_API+state.poster_path}
            </div>
            <p>
                {JSON.stringify(state)}
            </p>
        </div>
    )
}