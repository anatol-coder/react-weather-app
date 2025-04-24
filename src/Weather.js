import React, { useState } from "react";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      city: response.data.city,
      date: response.data.time,
    });
  }

  function search() {
    let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          <img src="../logo-small.png" alt="shecodes-logo" />
        </a>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                onChange={handleCityChange}
                type="search"
                placeholder="Enter a city..."
                className="enterCityButton"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="findInfoButton btn btn-primary"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
