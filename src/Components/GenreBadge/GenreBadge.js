import {Header} from "../Header/Header";
import {MoviesList} from "../MoviesList/MoviesList";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Services/service.movie";

export function GenreBadge() {
    let store = useSelector(({genres}) => genres);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getGenres())},[])
    // console.log(store);
    return (
        <div className={'genreBadgeBox'}>
            <ul>
                <li> </li>
            </ul>
        </div>

    );
}
