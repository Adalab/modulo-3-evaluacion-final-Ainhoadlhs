import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath, Link } from 'react-router-dom';
import LocalStorage from '../services/LocalStorage';
import Header from './Header';
import Filters from './filters/Filters';
import MovieSceneList from './scenes/MovieSceneList';
import MovieSceneDetail from './scenes/MovieSceneDetail';
import getDataFromAPI from '../services/Fetch';

function App() {
  const [movieData, setMovieData] = useState(LocalStorage.get('movies') || []);
  const [movieSearch, setMovieSearch] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  useEffect(() => {
    if (movieData.length === 0) {
      getDataFromAPI().then((cleanData) => {
        setMovieData(cleanData);
        LocalStorage.set('movies', cleanData);
      });
    }
  }, [movieData.length]);
  // Filtro
  const sortedMovies = [...movieData].sort((a, b) => a.movie.localeCompare(b.movie));
  const filters = sortedMovies.filter((item) => {
    const yearMatch = filterYear === 'all' || item.year.toString() === filterYear;
    const movieMatch = item.movie.toLowerCase().includes(movieSearch.toLowerCase());
    return yearMatch && movieMatch;
  });

  // Funciones
  const getYear = () => {
    const years = movieData.map((item) => item.year);
    const sortedYears = [...new Set(years)].sort((a, b) => a - b);
    return sortedYears;
  };

  const handleMovieInput = (value) => {
    setMovieSearch(value);
  };

  const handleYearInput = (value) => {
    setFilterYear(value);
  };

  // Rutas
  const { pathname } = useLocation();
  const routeData = matchPath('/movie/:id', pathname);

  const movieId = routeData !== null ? routeData.params.id : null;
  const clickedMovie = movieData.find((item) => item.id === parseInt(movieId));

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={
            <>
            <Filters 
            movieSearch = {movieSearch}
            filterYear = {filterYear}
            getYear = {getYear}
            handleMovieInput = {handleMovieInput}
            handleYearInput = {handleYearInput}
            />
            <MovieSceneList movies={filters} movieValue ={movieSearch} />
            </>}/>
            <Route
            path="/movie/:id"
            element={
              <>
              {clickedMovie ? (
                <>
                  <MovieSceneDetail item={clickedMovie} />
                  <Link to="/">Back</Link>
                </>
              ) : ( <div>Not found</div> 
              )}
                </>
            }
            />
        </Routes>
      </main>
    </>
  );
}

export default App;
