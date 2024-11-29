import React, { useState, useEffect } from "react";
import "./Clock.css";

const getBackgroundColor = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "#FFEB3B"; // Morning
  if (hour >= 12 && hour < 18) return "#FF9800"; // Afternoon
  if (hour >= 18 && hour < 21) return "#3F51B5"; // Evening
  return "#212121"; // Night
};

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    const tick = new Audio("/ticking-clock_1-27477.mp3");

    const interval = setInterval(() => {
      setTime(new Date());
      setSecondsElapsed((prev) => prev + 1);
      tick.play();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="clock-container"
      style={{
        backgroundColor: getBackgroundColor(),
        color: "#fff",
        transition: "background-color 0.5s ease",
      }}
    >
      <div className="clock-time">{time.toLocaleTimeString()}</div>
      <div className="clock-date">{time.toLocaleDateString()}</div>
      <div>Total Seconds Elapsed: {secondsElapsed}</div>
    </div>
  );
};

export default Clock;
