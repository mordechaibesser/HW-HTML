import React, { useState } from 'react';

function AddHabit({ addHabit }) {
  const [habitName, setHabitName] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && goal) {
      addHabit({ name: habitName, goal: parseInt(goal) });
      setHabitName('');
      setGoal('');
    }
  };

  return (
    <form className="add-habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Daily Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default AddHabit;
