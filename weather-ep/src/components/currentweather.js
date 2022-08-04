import React from 'react'

const CurrentWeather = ({ data }) => {
  return (
    <div className='current-weather'>
      <div className="current-weather-description" style={{ textAlign: 'left' }}>
        <span className='city' >{data.city}</span>
        <br></br>
        <span className='city-temp' >{Math.round(data.main.temp)}°F</span>
        <br></br>
        <img alt='city-weather-icon' src={`icons/${data.weather[0].icon}.png`} />
        <br></br>
        <span className='city-weather-desc' >{data.weather[0].description}</span>
      
      <br></br>
        <span className='city-label' >Feels Like:</span>
        <span className='city-value' > {data.main.feels_like}°F</span>
        <br></br>
        <span className='city-label' >Humidity:</span>
        <span className='city-value' > {data.main.humidity}%</span>
        <br></br>
        <span className='city-label' >Wind:</span>
        <span className='city-value' > {data.wind.speed}m/s</span>
        <br></br>
        <span className='city-label' >Pressure:</span>
        <span className='city-value' > {data.main.pressure}pHa</span>
      </div>
    </div>
  )
}

export default CurrentWeather