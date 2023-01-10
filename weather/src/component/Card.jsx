import React from 'react';
import moon from '../assets/image/moon.jpg';
import min from '../assets/image/min.png';
import max from '../assets/image/max.png';

export default function Card({ weather }) {
  return (
    <div className="card">
      <div>
        <div className="flex_container">
          <img className="moon" src={moon} alt="weather_image" />
          <h1>{}</h1>
        </div>
      </div>
      <div>
        <h3>{weather?.main.temp} °C</h3>
        <h3>{weather?.main.temp * 1.8 + 32} °F</h3>
      </div>
      <div className="should be absolute position to move">
        <h3>
          <img src={min} alt="min image" />
          {weather.main.temp_min}
        </h3>
        <h3>
          <img src={max} alt="max image" /> {weather?.main.temp_max}
        </h3>
      </div>
      <h3 className="description">{weather?.weather[0].description}</h3>
    </div>
  );
}
