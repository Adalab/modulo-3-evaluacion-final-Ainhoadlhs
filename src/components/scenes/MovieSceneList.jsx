import PropTypes from 'prop-types';
import MovieSceneItem from './MovieSceneItem';

import '../../styles/layout/movieList.scss'

const MovieSceneList = (props) => {
    if (props.movies.length === 0) {
        return <p className="movie__message--notFound">No movie matches `{props.movieSearch}`. Try again!</p>;
    } else {
        const movieInfo = props.movies.map((item) =>{
            return (
                <li className='movie__list' key={item.id}>
                    <MovieSceneItem item={item} />
                </li>
            );
        });
        return <ul className='movie__list'>{movieInfo}</ul>
    }
};

MovieSceneList.propTypes = {
    movies: PropTypes.array.isRequired,
    movieSearch: PropTypes.string,
};

export default MovieSceneList;
