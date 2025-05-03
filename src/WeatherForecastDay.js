import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperatureMaximum = Math.round(props.data.temperature.maximum);
    return temperatureMaximum;
  }

  function minTemperature() {
    let temperatureMinimum = Math.round(props.data.temperature.minimum);
    return temperatureMinimum;
  }

  return (
    <div>
      <div className="WeatherForecast-details">
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.condition.icon} size={36} />
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">
            {maxTemperature()}°
          </span>
          <span className="WeatherForecast-tempearture-min">
            {minTemperature()}°
          </span>
        </div>
      </div>
    </div>
  );
}
