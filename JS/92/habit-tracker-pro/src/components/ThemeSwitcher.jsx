import React from 'react';

function ThemeSwitcher({ setTheme }) {
  return (
    <div className="theme-switcher">
      <button onClick={() => setTheme('light')}>Light Theme</button>
      <button onClick={() => setTheme('dark')}>Dark Theme</button>
    </div>
  );
}

export default ThemeSwitcher;
