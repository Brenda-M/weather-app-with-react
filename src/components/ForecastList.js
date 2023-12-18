import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherList = ({ weathers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-8">
      {weathers.map(({ dt, main, weather }) => (
        <div key={dt} className="mb-4">
          <WeatherCard
            temp_max={main.temp_max}
            temp_min={main.temp_min}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </div>
      ))}
    </div>
  );
};

export default WeatherList;
