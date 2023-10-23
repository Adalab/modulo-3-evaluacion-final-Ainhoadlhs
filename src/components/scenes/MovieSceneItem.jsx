import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import '../../styles/layout/movieItem.scss';

const MovieSceneItem = ({ item }) => {
  return (
    <Link className="movie" to={`/movie/${item.id}`}>
      <img className="movie__img" src={item.poster} alt={`${item.movie} poster`} />
      <h2>{item.movie}</h2>
      <p>{item.fullLine}</p>
      <p>{item.year.toString()}</p>
    </Link>
  );
};

MovieSceneItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    fullLine: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired, 
  }).isRequired,
};

export default MovieSceneItem;

