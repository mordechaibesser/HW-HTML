import React from "react";

const Weather = ({ weather }) => {
  if (!weather) return <p>No weather data available.</p>;

  const { name, main, weather: weatherDetails } = weather;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Location: {name}</h2>
      <p>Temperature: {main.temp}°F</p>
      <p>Feels Like: {main.feels_like}°F</p>
      <p>Weather: {weatherDetails[0].description}</p>
    </div>
  );
};

export default Weather;
