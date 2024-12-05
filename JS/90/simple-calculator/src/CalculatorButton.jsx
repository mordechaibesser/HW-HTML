import React from 'react';

export default function CalculatorButton({ label, onClick }) {
  return (
    <button className="calculator-button" onClick={onClick}>
      {label}
    </button>
  );
}
