import React, { useState } from 'react';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import HabitProgress from './components/HabitProgress';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/HabitTracker.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [theme, setTheme] = useState('light');

  const addHabit = (habit) => {
    setHabits([...habits, { ...habit, id: Date.now(), progress: 0 }]);
  };

  const updateProgress = (id, increment) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, progress: habit.progress + increment } : habit
      )
    );
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1>Habit Tracker Pro</h1>
      <ThemeSwitcher setTheme={setTheme} />
      <AddHabit addHabit={addHabit} />
      <HabitList habits={habits} updateProgress={updateProgress} />
      <HabitProgress habits={habits} />
    </div>
  );
}

export default App;
