import React from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-8">
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
        <div className="col-4">
          <div className="row">
            <div className="col-2">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="col-10">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
