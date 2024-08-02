import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
  <input className={css.search} type="text" value={filter} onChange={onFilterChange} placeholder="Search contacts" />
);

export default SearchBox;
