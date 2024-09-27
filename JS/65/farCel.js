'use strict';

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
};

const convertAndDisplay = () => {
    const choice = prompt('Type "C" to convert Celsius to Fahrenheit or "F" to convert Fahrenheit to Celsius:');

    if (choice === 'C') {
        const celsius = parseFloat(prompt('Enter the temperature in Celsius:'));
        if (!isNaN(celsius)) {
            const fahrenheit = celsiusToFahrenheit(celsius);
            alert(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
        } else {
            alert('Please enter a valid number');
        }
    } else if (choice === 'F') {
        const fahrenheit = parseFloat(prompt('Enter the temperature in Fahrenheit:'));
        if (!isNaN(fahrenheit)) {
            const celsius = fahrenheitToCelsius(fahrenheit);
            alert(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
        } else {
            alert('Please enter a valid number');
        }
    } else {
        alert('Please enter "C" or "F"');
    }
};

convertAndDisplay();