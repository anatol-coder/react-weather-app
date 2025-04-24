import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-9">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <WeatherDate timeStamp={props.data.date} />, {""}
              <span className="text-capitalize description">
                {props.data.description}
              </span>
            </li>
            <li>
              Humidity: <span>{props.data.humidity}%</span>, Wind:
              <span> {props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-4">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-8">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
