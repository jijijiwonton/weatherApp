import './App.css';
import { useState, useEffect } from 'react';
import Card from './component/Card';
import Button from './component/Button';
import moon from './assets/image/moon.jpg';
import min from './assets/image/min.png';
import max from './assets/image/max.png';

/**
 * 1. Display weather based on the current situation as soon as the app is running.
 * 2. The weather info displays a city, celsius, fahrenheit.
 * 3. Display 5 buttons (1 is for the current location, 4 are for different cities).
 * 4. Each button allows to display appropriate city's weather.
 * 5. While displaying data, loading spinner is showing.
 */

function App() {
  // City, celsius, fahrenheit, description needed for state
  const [weatherInfo, setWeatherInfo] = useState({
    city: null,
    celsius: null,
    farenheit: null,
    min: null,
    ma: null,
    description: null,
  });

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

    console.log(data);

    setWeatherInfo({
      city: data.name,
      celsius: data.main.temp,
      farenheit: data.main.temp * 1.8 + 32,
      min: data.main.temp_min,
      max: data.main.temp_max,
      description: data.weather[0].description,
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div className="container">
      <Card
        timeImg={moon}
        city={weatherInfo.city}
        celsius={weatherInfo.celsius}
        farenheit={weatherInfo.farenheit}
        min={weatherInfo.min}
        max={weatherInfo.max}
        description={weatherInfo.description}
        minImg={min}
        maxImg={max}
      />
      <div className="flex_container">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;
