import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search'
import ForecastList from './components/ForecastList';
import UseFetch from './components/UseFetch';



const App = () => {
  const APP_KEY = '61989eeb4a4021720c5ede6548438281';
  const APP_URL = 'https://api.openweathermap.org/data/2.5';
  const {data, error, isLoading, setUrl} = UseFetch();

  const getData = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <ForecastList weathers={data.list} />
  };


  const getInfo = (city) =>{
    setUrl(`${APP_URL}/forecast?q=${city}&cnt=5&appid=${APP_KEY}`)
  }



  return (
    <main className="App">
      <Search fetchData={getInfo} />
      {getData()}
    </main>
  );
};

export default App;

