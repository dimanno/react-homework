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
                  <GenreBadge/>
                  <div className={'container-fluid movie-app'}>
                      <div className='row'>

                          <MoviesList/>

                      </div>
                  </div>

              </div>

          </div>

  );
}

export default App;