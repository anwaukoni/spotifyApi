import React, { PropTypes } from 'react';
import './styles.css';

const Search = (props) => (
  <form className="Search-form">
    <input
      className="Search-input"
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder} />
  </form>
);

Search.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

Search.defaultProps = {
  placeholder: 'Search...',
  value: ''
}

export default Search;
