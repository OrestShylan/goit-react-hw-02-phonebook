import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <span> Find Contact</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onchange: PropTypes.array,
};
