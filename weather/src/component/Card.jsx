import React from 'react';

export default function Card(props) {
  return (
    <div>
      <div>
        <span>
          <img src={props.img} alt="weather_image" />
        </span>
        <p>{props.city}city</p>
      </div>
      <div>
        <p>{props.celsius}celsius</p>
        <p>{props.farenheit}fahrenheit</p>
      </div>
      <p>{props.description}description</p>
    </div>
  );
}
