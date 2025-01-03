import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Default latitude
  lng: -122.4194, // Default longitude
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(center);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.error("Error getting location. Using default center.");
        setUserLocation(center); // Fallback to default center
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAR81Gvx-n93mwBN5RvlAbtaJZ0Y_L9knM">
      <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={10}>
        <Marker position={userLocation} title="You are here!" />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
