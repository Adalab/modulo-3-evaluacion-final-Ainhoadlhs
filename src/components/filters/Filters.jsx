import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

const Filters = () => {
    return (
        <form className='form'>
            <FilterByMovie />
            <FilterByYear />
        </form>
    );
};

export default Filters;
