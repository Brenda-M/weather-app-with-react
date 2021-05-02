import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const Search = ({ fetchData }) => {
  const [city, setCity] = useState('');

  const updateSearch = e => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div>
        <h1 class="title">What's the weather like today?</h1>
      </div>
      <div className="search-box">
      <FormControl
        placeholder='Enter city e.g Paris'
        onChange={updateSearch}
        value={city}
        className='search-bar' 
      />
      </div>
   
      <button onClick={() => fetchData(city)}className='search-button'>Check Weather</button>
    </div>
  );
};

export default Search;
