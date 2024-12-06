import React from 'react';
import PropTypes from 'prop-types';

const WeatherDetails = ({ temperature, description, location }) => {
  return (
    <div>
      <h1>{location}</h1>
      <p>{description}</p>
      <p>{temperature}°C</p>
    </div>
  );
};

WeatherDetails.propTypes = {
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default WeatherDetails;
