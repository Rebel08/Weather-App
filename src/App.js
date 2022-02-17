import React, { useState } from 'react';

import { fetchWeather } from './fetchWeather';
import { dateBuilder } from './dateBuilder';
import './App.css';




const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    // const date = new Date;
    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');

        }
    }
    return (
        <div className="app__weather">
            <h1 className="head-text">Weather Report</h1>
            <div className="app__weather-search">
            <input type="text" className="search-box" placeholder="Enter city name" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            </div>
           {weather.main && (
              
            <div className="app__weather_container">

                <div className="app__weather_left">
                <h2 className="left__box-cityname">{weather.name} </h2>

                       
                      <p className="left__box-coutry">Country: {weather.sys.country}</p>
                       <p className="left__box-date">{dateBuilder(new Date())}</p>
                       <p className="left__box-temp">{Math.round(weather.main.temp)} &#8451;</p>
                       <div className="left__box-templogo">
                           <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p >{weather.weather[0].description}</p>
                       </div>
                       <p className="left__box-tempMin"> <b>Min Temp:</b> <span>{Math.round(weather.main.temp_min)} &#8451;</span></p>
                       <p className="left__box-tempMax"><b>Max Temp: </b><span>{Math.round(weather.main.temp_max)} &#8451;</span></p>

                       
                   
                </div>
                <div className="app__weather_middle"/>
                <div className="app__weather_right">

                        <p className="right__box-humidity"><b>Humidity:</b> <span>{weather.main.humidity}</span> %</p>
                        <p className="right__box-wind"><b>Wind:</b> <span>{Math.floor((weather.wind.speed*18)/5)}</span> Km/hr</p>
                        <p className="right__box-humidity"><b>Pressure:</b> <span> {weather.main.pressure}</span> hPa </p>
                        <p className="right__box-humidity"><b>Sunrise:</b> <span>{new Date(weather.sys.sunrise*1000).toLocaleTimeString()}</span> </p>
                        <p className="right__box-humidity"><b>Sunset:</b> <span>{new Date(weather.sys.sunset*1000).toLocaleTimeString()}</span>  </p>

                </div>
                
            </div>
           )}

        </div>
    );
}

export default App;