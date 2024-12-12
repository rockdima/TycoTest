import React, { useContext, useState } from 'react'
import {SearchContext} from '../context/SearchContext';

const SearchFilter = () => {
  const {term, setTerm} = useContext(SearchContext);

  return (
    <div id="searchBox">
      <div className='searchBar'>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
          id="search"
        />
        <img src="src/assets/icons/Lupa.png" alt="Lupa" className='lupa' />
        <img src="src/assets/icons/SearchEnter.png" alt="Search" className='search' />
      </div>
      <span className='searchComment'>
        Our comprehensive database contains published CVEs that our AppSec Research team has<br />
        verified and catalogued, as well as our own zero-day vulnerabilities.
      </span>
    </div>
  );
};


export default SearchFilter;