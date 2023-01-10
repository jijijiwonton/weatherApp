import React from 'react';
import button from '../assets/image/button.png';
export default function Button(props) {
  return (
    <div className="btn">
      <img className="btnImg" src={button}>
        {props.city}
      </img>
      {props.city}
    </div>
  );
}
