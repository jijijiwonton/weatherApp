import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <div className="flex_container">
          <img className="moon" src={props.timeImg} alt="weather_image" />
          <h1>{props.city}</h1>
        </div>
      </div>
      <div>
        <h3>{props.celsius} °C</h3>
        <h3>{props.farenheit} °F</h3>
      </div>
      <div className="should be absolute position to move">
        <h3>
          <img src={props.minImg} alt="min image" />
          {props.min}
        </h3>
        <h3>
          <img src={props.maxImg} alt="max image" /> {props.max}
        </h3>
      </div>
      <h3 className="description">{props.description}</h3>
    </div>
  );
}
