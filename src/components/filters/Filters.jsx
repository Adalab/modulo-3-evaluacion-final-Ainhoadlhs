import PropTypes from 'prop-types';

import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    const years = Array.isArray(props.years) ? props.years : [];
    return (
        <form 
        className='form'
        onSubmit={handleSubmit}>
            <FilterByMovie 
                handleMovie = {props.handleMovie}
                movieValue = {props.movieValue}
            />
            <FilterByYear 
                years={years} 
                handleYear={props.handleYear} 
                yearValue={props.yearValue}
            />
        </form>
    );
};

Filters.propTypes = {
    movieValue: PropTypes.string.isRequired,
    yearValue: PropTypes.string.isRequired,
    years: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.func]).isRequired,
    handleMovie: PropTypes.func.isRequired,
    handleYear: PropTypes.func.isRequired,
};


export default Filters;
