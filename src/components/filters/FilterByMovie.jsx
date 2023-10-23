import PropTypes from 'prop-types';

const FilterByMovie = ({ movieSearch, handleMovieInput }) => {
    const handleMovie = (ev) => {
        handleMovieInput(ev.target.value);
    };
    return (
        <>
            <label htmlFor="movie" className="label">
                Movie
            </label>
            <input
                className="input__movie"
                type="text"
                name="movie"
                id="movie"
                placeholder="Enter the movie title here"
                value={movieSearch}
                onChange={handleMovie}
            />
        </>
    );
};

FilterByMovie.propTypes = {
    movieSearch: PropTypes.string,
    handleMovieInput: PropTypes.func,
};

export default FilterByMovie;
