import './App.css';
import { useState, useEffect } from 'react';

/**
 * 1. Display weather based on the current situation as soon as the app is running.
 * 2. The weather info displays a city, celsius, fahrenheit.
 * 3. Display 5 buttons (1 is for the current location, 4 are for different cities).
 * 4. Each button allows to display appropriate city's weather.
 * 5. While displaying data, loading spinner is showing.
 */

function App() {
  // Get current location using navigator object
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeatherAPIByGeoLocation(latitude, longitude);
    });
  };

  // Get weather API based on a current location
  const getWeatherAPIByGeoLocation = async (lat, lon) => {
    const API = '7b5c92adb42c953e26d80267006836ad';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`;
    let response = await fetch(url);
    let data = await response.json(response);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div>Hello</div>;
}

export default App;
