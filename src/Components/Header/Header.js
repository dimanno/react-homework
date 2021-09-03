import './Header.css'
import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList";
import {useState} from "react";
import {useDispatch} from "react-redux";

 export const Header = () => {
     let [searchItem, setSearchItem] = useState('')
     let dispatch = useDispatch()
     let searchMovie = 'https://api.themoviedb.org/3/search/movie'


     const onsubmit = (e) => {
       e.preventDefault()
         if (setSearchItem) {
            fetch(searchMovie+searchItem)
                .then(value => value.json())
                .then(value => {
                    dispatch(value.results)
                });
            setSearchItem('')
         }
     }
     const handleChange = (e) => {
       setSearchItem(e.target.value)
     }

  return (
          <div className={'wrap-header'}>
            <div className={"header"}>
              {/*<Link to={'/'}>All films</Link>*/}
            </div>
            <div className={'search-box'}>
                <form onSubmit={onsubmit}>
                    <input className={'search'}
                           type="text"
                           value={searchItem}
                           placeholder="search"
                           onChange={handleChange}
                    />
                </form>
            </div>
          </div>
  )
}