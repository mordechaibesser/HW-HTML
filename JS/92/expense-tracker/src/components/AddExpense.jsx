import React, { useState } from "react";

function AddExpense({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense({ name, amount: parseFloat(amount), category });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;
