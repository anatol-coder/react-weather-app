import React, { useState } from "react";
import "./Weather.css";
import WeatherDate from "./WeatherDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      city: response.data.city,
      date: response.data.time,
    });
    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
          <img src="../logo-small.png" alt="shecodes-logo" />
        </a>

        <form>
          <div className="row">
            <div className="col-9">
              <input
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
        <div className="weatherInfo">
          <div className="row">
            <div className="col-9">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <WeatherDate timeStamp={weatherData.date} />, {""}
                  <span className="text-capitalize description">
                    {weatherData.description}
                  </span>
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}%</span>, Wind:
                  <span> {weatherData.wind} km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-4">
                  <img
                    src={weatherData.iconUrl}
                    alt="weatherData.description"
                  />{" "}
                </div>
                <div className="col-8">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
