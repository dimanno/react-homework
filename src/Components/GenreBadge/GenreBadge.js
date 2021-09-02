import './genres.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Services/service.movie";

export function GenreBadge() {
    let state = useSelector(({genres}) => genres);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getGenres())},[])
    console.log(state);
    return (
        <div className={'genreBadgeBox'}>
            {
                state.map(value=> <ul>
                    <li>{value.name}</li>
                </ul>)
            }
        </div>
    );
}
