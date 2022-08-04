import React from 'react'

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const ForecastWeather = ({ data }) => {

  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
  return (
    <div className='card-grid'>
      {data.list.splice(0, 7).map((item, idx) => (
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div style={{ textAlign: 'center',marginTop: 10 }}>
                <span className='day' >{forecastDays[idx]}</span>
                <br></br>
                <img alt='day-weather-icon' src={`icons/${item.weather[0].icon}.png`} />
                <br></br>
                <span className='day-temp-min-max' >{Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°F</span>
                <br></br>
                <span className='day-weather-desc' >{item.weather[0].description}</span>
              </div>
            </div>
            <div class="flip-card-back">
              <div style={{ marginTop: 20 }}>
                <span className='details'>Details</span>
                <br></br>
                <span className='details'>Feels Like: </span>
                <span className='details'>{Math.round(item.main.feels_like)}°F</span>
                <br></br>
                <span className='details'>Humidity: </span>
                <span className='details'>{item.main.humidity}%</span>
                <br></br>
                <span className='details'>Clouds: </span>
                <span className='details'>{item.clouds.all}%</span>
                <br></br>
                <span className='details'>Wind: </span>
                <span className='details'>{item.wind.speed}m/s</span>
                <br></br>
                <span className='details'>Pressure: </span>
                <span className='details'>{item.main.pressure}pHa</span>
                <br></br>
                <span className='details'>Sea Level: </span>
                <span className='details'>{item.main.sea_level}m</span>
              </div>
            </div>
          </div>
        </div>
        
      ))}
      </div>
  )
}

export default ForecastWeather