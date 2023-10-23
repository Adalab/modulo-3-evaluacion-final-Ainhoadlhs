import PropTypes from 'prop-types';

const FilterByMovie = (props) => {
    const handleInput = (ev) => {
        props.handleMovie(ev.target.value);
    };
    return (
    <>
        <label htmlFor="movie" className="label"> Movie </label>
        <input 
            className="input__movie"
            type="text"
            name="movie"
            id="movie"
            placeholder="enter the movie title here"
            onChange={handleInput}
            value={props.movieValue}
        />
    </>
    );
};

FilterByMovie.propTypes = {
    movieValue: PropTypes.string,
    handleMovie: PropTypes.func,
};

export default FilterByMovie
