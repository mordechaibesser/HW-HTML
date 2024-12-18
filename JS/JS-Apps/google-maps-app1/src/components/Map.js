import React, { useEffect, useRef } from "react";

const Map = () => {
  const mapRef = useRef(null); // Reference to the div where the map will be rendered

  useEffect(() => {
  
    const loadGoogleMapsScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeMap = () => {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12,
      });

      
      const marker = new window.google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: googleMap,
        title: "San Francisco",
      });
    };


    loadGoogleMapsScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAR81Gvx-n93mwBN5RvlAbtaJZ0Y_L9knM&libraries=places"
    )
      .then(() => {
       
        initializeMap();
      })
      .catch((error) => {
        console.error("Error loading Google Maps script", error);
      });
  }, []); 

  return (
    <div
      ref={mapRef}
      style={{ height: "400px", width: "100%", marginTop: "20px" }}
    ></div>
  );
};

export default Map;
