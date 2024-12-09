import React from 'react';

function HabitList({ habits, updateProgress }) {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <div key={habit.id} className="habit-item">
          <h3>{habit.name}</h3>
          <p>Goal: {habit.goal}</p>
          <p>Progress: {habit.progress}</p>
          <button onClick={() => updateProgress(habit.id, 1)}>+1</button>
          <button onClick={() => updateProgress(habit.id, -1)} disabled={habit.progress <= 0}>
            -1
          </button>
        </div>
      ))}
    </div>
  );
}

export default HabitList;
