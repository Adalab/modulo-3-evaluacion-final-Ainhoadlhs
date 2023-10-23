import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieSceneDetail = (props) => {
    return (
        <article className="movie">
            <img className="movie__img" src={props.item.poster} alt={`${props.item.movie} poster`}/>
            <div className="movie__info">
                <h2 className="movie__title">{props.item.movie}</h2>
                <p className="movie__quote">{props.item.fullLine}</p>
                <p className="movie__director"> {`Director: ${props.item.director}`}</p>
                <a className="movie__audio" href={props.item.audio} title="Go to audio" target="_blank" rel="noreferrer"> Listen to the audio</a>
            </div>
            <Link className="movie__back" to="/"></Link>
        </article>
    );
};

MovieSceneDetail.propTypes = {
    item: PropTypes.shape({
        poster: PropTypes.string.isRequired,
        movie: PropTypes.string.isRequired,
        fullLine: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        audio: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieSceneDetail;
