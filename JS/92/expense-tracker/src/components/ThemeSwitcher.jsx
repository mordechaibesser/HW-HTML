import React from "react";

function ThemeSwitcher({ theme, setTheme }) {
  return (
    <button
      className="theme-switcher"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeSwitcher;
