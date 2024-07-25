"use strict"

const interestCalculator = (function () {


    let rate = 0;
    let years = 0;

    function setRate(newRate) {
        if (typeof newRate !== 'number') {
            throw new Error('Rate must be a number');
        }
        if (newRate < 0) {
            throw new Error('Rate cannot be negative');
        }
        rate = newRate;
    }

    function setYears(newYears) {
        if (typeof newYears !== 'number') {
            throw new Error('Years must be a number');
        }
        if (newYears < 0) {
            throw new Error('Years cannot be negative');
        }
        years = newYears;
    }

    function calculateInterest(principal) {
        if (typeof principal !== 'number') {
            throw new Error('Principal must be a number');
        }
        if (principal < 0) {
            throw new Error('Principal cannot be negative');
        }
        return principal * rate * years;
    }

    return {
        setRate,
        setYears,
        calculateInterest
    };
})();

// Example usage:

try {
    interestCalculator.setRate(0.05); // Setting the interest rate to 5%
    interestCalculator.setYears(10); // Setting the duration to 10 years
    const interest = interestCalculator.calculateInterest(1000); // Calculating interest on a principal of 1000
    console.log(interest); // Outputs: 500
} catch (error) {
    console.error(error.message);
}