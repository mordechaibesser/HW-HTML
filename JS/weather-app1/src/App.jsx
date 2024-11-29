import React, { Component } from "react";
import Weather from "./Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      zip: "08701",
      loading: true,
    };
  }

  componentDidMount() {
    const API_KEY = "40e7e5548591101e1d1cf2508c18d235";
    const { zip } = this.state;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Weather Data:", data); 
        this.setState({ weather: data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { weather, loading, zip } = this.state;

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Weather App</h1>
        <p>Fetching weather for ZIP code: {zip}</p>
        {loading ? <p>Loading...</p> : <Weather weather={weather} />}
      </div>
    );
  }
}

export default App;
