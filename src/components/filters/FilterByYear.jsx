import PropTypes from 'prop-types';

const FilterByYear = (props) => {
    const years = Array.isArray(props.years) ? props.years : [];

    const yearSelect = years.map((year, index) => (
        <option key={index} value={year}>
            {year}
        </option>
    ));

    const handleYear = (ev) => {
        props.handleYear(ev.target.value);
    };

    return (
        <>
            <label className="label" htmlFor="year">Year</label>
            <select
                className="select"
                name="year"
                id="year"
                value={props.yearValue}
                onChange={handleYear}
            >
                <option value="all">Todos</option>
                {yearSelect}
            </select>
        </>
    );
};

FilterByYear.propTypes = {
    yearValue: PropTypes.string.isRequired,
    handleYear: PropTypes.func.isRequired,
    years: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.func]).isRequired,
};

export default FilterByYear;
