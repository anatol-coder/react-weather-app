import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>San Francisco</h1>
            <ul>
              <li>Tuesday 17:29, scattered clouds</li>
              <li>
                Humidity: <span>87%</span>, Wind:<span> 2.24 km/h</span>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div>
              <span className="temperature">12</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
