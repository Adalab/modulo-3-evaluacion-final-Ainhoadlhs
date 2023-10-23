import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import '../../styles/layout/movieItem.scss';

const MovieSceneItem = ({ item }) => {
  return (
    <Link className="link" to={`/movie/${item.id}`}>
      <div className='movie'>
        <img className="movie__img" src={item.poster} alt={`${item.movie} poster`} />
        <h2 className='movie__title'>{item.movie}</h2>
        <p className='movie__quote'>{item.fullLine}</p>
        <p className='movie__year'>{item.year.toString()}</p>
      </div>
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

