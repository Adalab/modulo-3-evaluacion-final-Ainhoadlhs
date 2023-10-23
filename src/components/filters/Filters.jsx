import PropTypes from 'prop-types';
import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';
import '../../styles/layout/filters.scss';

const Filters = ({getYear, movieSearch, filterYear, handleMovieInput, handleYearInput}) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    const years = getYear();
    return (
        <form 
        className='form'
        onSubmit={handleSubmit}>
            <FilterByMovie 
                handleMovieInput = {handleMovieInput}
                movieSearch = {movieSearch}
            />
            <FilterByYear 
                years={years} 
                handleYearInput={handleYearInput} 
                filterYear={filterYear}
            />
        </form>
    );
};
Filters.propTypes = {
    getYear: PropTypes.func.isRequired,
    movieSearch: PropTypes.string.isRequired,
    filterYear: PropTypes.string.isRequired,
    handleMovieInput: PropTypes.func.isRequired,
    handleYearInput: PropTypes.func.isRequired,
};

export default Filters;
