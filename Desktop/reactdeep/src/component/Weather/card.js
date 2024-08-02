import React, { useEffect } from "react";

const Weather = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = React.useState("");
  const {
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;

        default:
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* last col */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-thermometer"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Temperature
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-windy"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
