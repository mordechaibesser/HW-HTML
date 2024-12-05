import React, { useState } from "react";

const WeatherForm = ({ onSubmit }) => {
    const [zipCode, setZipCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (zipCode.trim()) {
            onSubmit(zipCode);
            setZipCode("");
        } else {
            alert("Please enter a valid ZIP code.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
