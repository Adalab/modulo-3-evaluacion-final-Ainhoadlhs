import PropTypes from 'prop-types';

const FilterByYear = ({ years, handleYearInput, filterYear }) => {
    const handleMovieInput = (ev) => {
        handleYearInput(ev.target.value);
    };
    const yearSelect = years.map((year, index) => (
        <option key={index} value={year}>
        {year}
        </option>
    ));
  
    return (
        <>
            <label className="label" htmlFor="year">
                Year
            </label>
            <select 
            className="select" 
            name="year" 
            id="year"
            value ={filterYear}
            onChange={handleMovieInput}>
                <option value="all">All</option>
                {yearSelect}
            </select>
        </>
    );
};

FilterByYear.propTypes = {
    years: PropTypes.array.isRequired,
    handleYearInput: PropTypes.func.isRequired,
    filterYear: PropTypes.string.isRequired,
};

export default FilterByYear;