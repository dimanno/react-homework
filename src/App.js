import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";
import {GenreBadge} from "./Components/GenreBadge/GenreBadge";


function App() {

  return (
          <div className={'mainBox'}>
              <div className={'header-top'}>
                  <Header/>
              </div>
              <div className={'content'}>
                  <div className={'wramGenres'} >
                      <GenreBadge/>
                  </div>

                  <div className={'movie-app'}>
                      <div>
                          <MoviesList/>
                      </div>
                  </div>

              </div>

          </div>

  );
}

export default App;