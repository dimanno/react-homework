import './genres.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../Services/service.movie";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

export function GenreBadge() {
    let state = useSelector(({genres}) => genres);
    let dispatch = useDispatch()

    useEffect(() => {dispatch(getGenres())},[])
    console.log(state);
    return (
        <div className={'genreBadgeBox'}>
            {
                state.map(value=> <ul key={value.id}>
                    <li>
                        <Link to={{pathname:`/${value.id}`, value}}>{value.name}</Link>
                    </li>
                </ul>)
            }
        </div>
    );
}
