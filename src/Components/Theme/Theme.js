import styled from "styled-components";

import {Route, Switch} from "react-router-dom";
import {Header} from "../Header/Header";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {MoviesListByGenres} from "../MoviesListByGenres/MoviesListByGenres";
import {MoviesList} from "../MoviesList/MoviesList";
import {MovieInfo} from "../MovieInfo/MovieInfo";


const Page = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

export function Theme(props) {
const theme = props.theme
const setTheme = props.setTheme

    return (
         <Page>
                 <div className={'header-top'}>
                     <Header theme={theme} setTheme={setTheme}/>
                 </div>

                 <div className={'content d-flex'}>
                     <div className={'wramGenres'} >
                         <GenreBadge/>
                     </div>
                     <div className={'movie-list-wrap'}>
                         <div className={'movieList'}>
                             <Switch>
                                 <Route path={`/:id`} render={(props) =>
                                 {return <MoviesListByGenres {...props}/>}}/>/>
                                 <MoviesList/>
                             </Switch>
                         </div>
                     </div>
                     <div>
                         <Switch>
                             <Route path={'/movie-info:id'} render={(props) =>
                             {return <MovieInfo {...props}/>}}/>
                         </Switch>
                     </div>

                 </div>
         </Page>
    )
}