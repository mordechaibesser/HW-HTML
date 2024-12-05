import React, { useState } from "react";

const App = () => {

  const [current, setCurrent] = useState("0");
  const [total, setTotal] = useState(null);
  const [operator, setOperator] = useState(null);


  const handleNumberClick = (number) => {
    if (current === "0") {
      setCurrent(number);
    } else {
      setCurrent(current + number);
    }
  };

  
  const handleOperatorClick = (op) => {
    if (total === null) {
      setTotal(parseFloat(current));
    } else if (operator) {
      // Perform calculation if operator is already set
      const newTotal = performCalculation(total, parseFloat(current), operator);
      setTotal(newTotal);
      setCurrent("0");
    }
    setOperator(op);
    setCurrent("0");
  };

  
  const handleEqualsClick = () => {
    if (operator && total !== null) {
      const newTotal = performCalculation(total, parseFloat(current), operator);
      setCurrent(newTotal.toString());
      setTotal(null);
      setOperator(null);
    }
  };

  
  const handleClear = () => {
    setCurrent("0");
    setTotal(null);
    setOperator(null);
  };

 
  const performCalculation = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? "Error" : a / b;
      default:
        return b;
    }
  };

  return (
    <div style={styles.container}>
      <h1>Simple React Calculator</h1>
      <div style={styles.display}>{current}</div>
      <div style={styles.buttonContainer}>
        {/* Number buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            style={styles.button}
            onClick={() => handleNumberClick(num.toString())}
          >
            {num}
          </button>
        ))}

    
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            style={styles.button}
            onClick={() => handleOperatorClick(op)}
          >
            {op}
          </button>
        ))}

      
        <button style={styles.button} onClick={handleEqualsClick}>
          =
        </button>
        <button style={styles.button} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  display: {
    width: "100%",
    height: "50px",
    marginBottom: "20px",
    fontSize: "2rem",
    backgroundColor: "#f0f0f0",
    textAlign: "right",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  button: {
    padding: "15px",
    fontSize: "1.5rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default App;
