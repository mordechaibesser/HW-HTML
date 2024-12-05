import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState('');
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    setCurrent(current + num);
  };

  const handleOperatorClick = (op) => {
    if (current) {
      setTotal(parseFloat(current));
      setCurrent('');
      setOperator(op);
    }
  };

  const handleEqualClick = () => {
    if (current && operator) {
      const num = parseFloat(current);
      if (operator === '+') setTotal((prev) => prev + num);
      if (operator === '-') setTotal((prev) => prev - num);
      if (operator === '*') setTotal((prev) => prev * num);
      if (operator === '/') setTotal((prev) => prev / num);
      setCurrent('');
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setCurrent('');
    setTotal(0);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{current || total || '0'}</div>
      <div className="buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={handleClearClick}>C</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
    </div>
  );
};

export default App;
