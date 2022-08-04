import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import CurrentWeather from './components/currentweather';
import Search from './components/search';
import ForecastWeather from './components/forecastweather';
import LandingPage from './components/landingpage';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [currentForecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split('');


    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App" >
      <div className='blur-container'></div>
      <center>
        <div className="background-container" style={{ display: 'flex' }}>
          <div>{currentWeather ? (null) : (<LandingPage />) }</div>
          <div style={{ position: 'absolute', width: 300, marginLeft: '50vw', marginTop: 20 }}><Search onSearchChange={handleOnSearchChange} /></div>
          <div style={{ position: 'absolute', marginTop: 80, marginRight: '80vw', }}>{currentWeather && <CurrentWeather data={currentWeather}/>}</div>
          <div>{currentForecast && <ForecastWeather data={currentForecast}/>}</div>
        </div>
      </center>
    </div>
  );
}

export default App;
