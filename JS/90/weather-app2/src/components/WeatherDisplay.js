import React from "react";

const WeatherDisplay = ({ data }) => {
    return (
        <div className="weather-container">
            <h2>Weather in {data.name}</h2>
            <p>Temperature: {data.main.temp}°F</p>
            <p>Feels Like: {data.main.feels_like}°F</p>
            <p>Weather: {data.weather[0].description}</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} mph</p>
        </div>
    );
};

export default WeatherDisplay;
