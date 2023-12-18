import React from 'react';

const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  const date = new Date(dt);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md" style={{ width: '14rem' }}>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="Weather Icon"
        className="w-12 h-12 mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{main}</h2>
        <p className="text-sm text-gray-700">
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p className="text-base mb-2">Min: {Math.round(temp_min)}F</p>
        <p className="text-base">Max: {Math.round(temp_max)}F</p>
      </div>
    </div>
  );
};

export default WeatherCard;
