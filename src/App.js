import React from 'react';
import './App.css'; // Your custom styles
import Search from './components/Search';
import ForecastList from './components/ForecastList';
import Loader from './components/Loader';
import UseFetch from './components/UseFetch';

const App = () => {
  const APP_KEY = '61989eeb4a4021720c5ede6548438281';
  const APP_URL = 'https://api.openweathermap.org/data/2.5';
  const { data, error, isLoading, setUrl } = UseFetch();

  const getData = () => {
    if (error) {
      return (
        <div className="text-center text-red-500 my-4">
          <p>{error}</p>
        </div>
      );
    }

    if (isLoading) {
      return <Loader />;
    }

    if (!data) return null;

    return <ForecastList weathers={data.list} />;
  };

  const getInfo = (city) => {
    setUrl(`${APP_URL}/forecast?q=${city}&cnt=5&appid=${APP_KEY}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <Search fetchData={getInfo} />
        {getData()}
      </div>
    </div>
  );
};

export default App;
