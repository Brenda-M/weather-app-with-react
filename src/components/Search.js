import React, { useState } from 'react';

const Search = ({ fetchData }) => {
  const [city, setCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const updateSearch = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    if (!city.trim()) {
      setErrorMessage('Please enter a city name.');
      return;
    }

    fetchData(city);
    setErrorMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-center text-2xl mb-4 text-white">What's the weather like today?</h3>
      <div className="mx-auto max-w-md">
        <input
          type="text"
          placeholder="Enter city e.g. Paris"
          className="w-full p-3 border border-gray-300 rounded"
          onChange={updateSearch}
          value={city}
          onKeyDown={handleKeyDown}
        />
      </div>
      {errorMessage && (
        <p className="text-red-500 text-center mt-2">{errorMessage}</p>
      )}
      <div className="text-center mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleClick}
        >
          Check Weather
        </button>
      </div>
    </div>
  );
};

export default Search;
