
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, matchPath, Link } from 'react-router-dom';


import Fetch from '../services/Fetch';
import LocalStorage from '../services/LocalStorage';

import Header from './Header';
import Filters from './filters/Filters';
import MovieSceneList from './scenes/MovieSceneList';
import MovieSceneDetail from './scenes/MovieSceneDetail';

function App() {

  //Constantes de estado

  const [movieData, setMovieData] = useState(LocalStorage.get('movies', []) || []);
  const [movieSearch, setMovieSearch] = useState ('');
  const [filterYear, setFilterYear] = useState('all');

  // UseEffect
  useEffect(() => {
    if (movieData.length === 0) {
      Fetch().then((cleanData) => {
        setMovieData(cleanData);
        LocalStorage.set("movies", cleanData);
      });
    }
  }, [movieData.length]);

  // Filtro
  const filters = movieData.filter((item) => {
    return movieSearch === '' ? true : item.movie.toLowerCase().includes(movieSearch.toLowerCase());
  }).filter ((item) => {
    if (filterYear === 'all') {
      return true; 
    } else {
      return filterYear.includes(item.year.toString());
    }
  });

  // Funciones
  const getYear = () => {
    const years = movieData.map((item) => item.year);
    return [...new Set(years)];
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
            movieValue = {movieSearch}
            yearValue = {filterYear}
            years = {getYear}
            handleMovie = {handleMovieInput}
            handleYear = {handleYearInput}
            />
            <MovieSceneList movies={filters} movieValue ={movieSearch} />
            </>}/>
            <Route
            path="/movie/:id"
            element={
              <>
                <MovieSceneDetail item={clickedMovie} />
                <Link to="/">Back</Link>
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
