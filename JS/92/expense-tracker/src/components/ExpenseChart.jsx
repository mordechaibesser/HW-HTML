import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

function ExpenseChart({ expenses }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = expenses.reduce((acc, { category, amount }) => {
    const existing = acc.find((item) => item.name === category);
    if (existing) {
      existing.value += amount;
    } else {
      acc.push({ name: category, value: amount });
    }
    return acc;
  }, []);

  return (
    <div className="expense-chart">
      <h2>Expense Breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseChart;
