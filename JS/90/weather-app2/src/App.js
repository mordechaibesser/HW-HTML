import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import { API_KEY } from "./apiKey"; // Ensure API_KEY is correctly imported

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (zipCode) => {
        setLoading(true);
        setError(null);
        setWeatherData(null);

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Invalid ZIP Code or API issue.");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Weather App 2</h1>
            <WeatherForm onSubmit={fetchWeather} />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>
    );
};

export default App;
