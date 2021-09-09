import './genres.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Services/genres-service";
import {Link} from "react-router-dom";

export function GenreBadge() {
    let state = useSelector(({genres}) => genres);
    let dispatch = useDispatch()

    useEffect(async () => {await dispatch(await getGenres())},[])
    console.log(state);
    return (
        <div className={'genreBadgeBox'}>
            {
               state && state.map(value=> <ul>
                    <li>
                        <Link to={{pathname: `/${value.id}`}} key={value.id}>{value.name}</Link>
                    </li>
                </ul>
                    )
            }
        </div>
    );
}
