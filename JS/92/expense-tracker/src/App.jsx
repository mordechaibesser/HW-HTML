import React, { useState, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./styles/ExpenseTracker.css";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className={`app ${theme}`}>
      <h1>Expense Tracker</h1>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <AddExpense addExpense={(expense) => setExpenses([...expenses, expense])} />
      <ExpenseList expenses={expenses} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;
