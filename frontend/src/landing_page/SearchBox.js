import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBox.css';

function SearchBox() {
  return (
    <div className="search-box">
      
      <button className="btn-search"><FaSearch className='btn-adj'/></button>
      <input type="text" className="input-search" placeholder="Type to Search..." />
    </div>
  );
}

export default SearchBox;
