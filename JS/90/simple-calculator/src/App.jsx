import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState(null);

  const updateDisplay = () => currentInput || previousInput || '0';

  const handleButtonClick = (value) => {
    console.log('Button Clicked:', value); // Debugging log

    if (!isNaN(value) || value === '.') {
      // Handle numbers and decimal points
      setCurrentInput((prev) => prev + value);
      console.log('Updated Current Input:', currentInput + value);
    } else if (value === 'C') {
      // Clear inputs
      setCurrentInput('');
      setPreviousInput('');
      setOperator(null);
      console.log('Calculator Reset');
    } else if (value === '=') {
      // Perform calculation
      if (currentInput && previousInput && operator) {
        try {
          const result = eval(`${previousInput} ${operator} ${currentInput}`);
          setCurrentInput(result.toString());
          setPreviousInput('');
          setOperator(null);
          console.log('Calculation Result:', result);
        } catch (error) {
          console.error('Error during calculation:', error);
        }
      } else {
        console.log('Cannot calculate: missing inputs or operator');
      }
    } else {
      // Handle operators
      if (currentInput) {
        if (previousInput && operator) {
          // Chain calculations
          const result = eval(`${previousInput} ${operator} ${currentInput}`);
          setPreviousInput(result.toString());
          console.log('Chained Calculation Result:', result);
        } else {
          setPreviousInput(currentInput);
        }
        setCurrentInput('');
        setOperator(value);
        console.log('Operator Set:', value);
      } else {
        console.log('Operator clicked without current input');
      }
    }
  };


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => console.log('Network Request Test:', data))
      .catch((err) => console.error('Network Error:', err));
  }, []);

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-display"
        value={updateDisplay()}
        readOnly
      />
      <div className="calculator-buttons">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        {['0', '.', 'C', '+'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
        <button className="span-two" onClick={() => handleButtonClick('=')}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
