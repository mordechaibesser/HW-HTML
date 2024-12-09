import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function HabitProgress({ habits }) {
  const data = habits.map((habit) => ({
    name: habit.name,
    progress: habit.progress,
  }));

  return (
    <div className="habit-progress">
      <h2>Progress Chart</h2>
      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="progress" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default HabitProgress;
