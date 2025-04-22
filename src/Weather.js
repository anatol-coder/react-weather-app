import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <img src="../logo-small.png" alt="shecodes-logo" />
      <div className="container">
        <form>
          <input type="search" placeholder="Enter a city..." />
          <input type="submit" value="search" className="btn btn-primary" />
        </form>
        <div className="row">
          <div className="col-6">
            <h1>San Francisco</h1>
            <ul>
              <li>Tuesday 17:29, scattered clouds</li>
              <li>Humidity: 87%, Wind: 2.24 km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <h2>12°C</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
