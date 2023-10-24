
import PropTypes from 'prop-types';
import '../../styles/layout/movieDetail.scss'

import { AiFillSound } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

const MovieSceneDetail = (props) => {
    return (

            <section className="section">
                <div className='movies'>
                    <img className="imagendetail" src={props.item.poster} alt={`${props.item.movie} poster`}/>
                    <div className="movies__div">
                        <h2 className="movies__title"><MdLocalMovies />{props.item.movie}</h2>
                        <p className="movies__quote">{props.item.fullLine}</p>
                        <p className="movies__director"> {`Director: ${props.item.director}`}</p>
                        <a className="movies__audio" href={props.item.audio} title="Go to audio" target="_blank" rel="noreferrer"><AiFillSound /> Listen to the audio</a>
                    </div>
                </div>
            </section>
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
