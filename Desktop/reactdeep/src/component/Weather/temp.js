import React, { useState, useEffect } from "react";
import "./style.css";
import Weather from "./card";

function Temp() {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});
  const [error, setError] = useState(null); // State to hold error message

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e8ac5f08c78f55f58b9e8633271c1c8d`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === "404") {
        // Check if city not found
        setError(`City '${searchValue}' not found.`);
      } else {
        const { temp, pressure, humidity } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;

        const myWeather = {
          temp,
          pressure,
          humidity,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
        setTempInfo(myWeather);
        setError(null); // Clear error state if successful
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch weather data.");
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Display error message if there is an error */}
      {error && <div className="error">{error}</div>}

      {/* Render weather card if there is no error */}
      {!error && <Weather tempInfo={tempInfo} />}
    </>
  );
}

export default Temp;
