import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './Search.css'
import {loadMovies} from "../../Redux/Actions/action.creator";



export const Search = () => {
    let [searchItem, setSearchItem] = useState('')
    let state = useSelector(({movies}) => movies)
    let dispatch = useDispatch()
    let searchMovie = 'https://api.themoviedb.org/3/search/movie/?api_key=84315257b9ad1519c4c183b02a3e6a3e&query='


    const onsubmit = (e) => {
        e.preventDefault()
        if (searchItem) {

                fetch(searchMovie+searchItem)
                    .then(value => value.json())
                    .then((value) => {dispatch(loadMovies(value.results))})
            setSearchItem('')
        }
    }
    const handleChange = (e) => {
        setSearchItem(e.target.value)
    }

    return (
            <div className={'search-box'}>
                <form onSubmit={onsubmit}>
                    <input className={'search'}
                           type="search"
                           value={searchItem}
                           placeholder="search"
                           onChange={handleChange}
                    />
                </form>
            </div>
    )
}