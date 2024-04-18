'use client';
import PropTypes from 'prop-types';


export const SearchBar = ({ onSearchTermChange }) => {

  return (
    <div className='search-bar'>
      <input
        onChange={(e) => {
          onSearchTermChange(e.target.value);
        }
        }
        placeholder="Search Contacts"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func
}