import React, { useState } from 'react';

const ColorPickerApp = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); // Background color state
  const [textColor, setTextColor] = useState('#000000'); // Text color state
  const [font, setFont] = useState('Arial'); // Font state

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1>Dynamic Style Changer</h1>
      
      {/* Background Color Input */}
      <label>
        Background Color:
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>
      <br />

      {/* Text Color Input */}
      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </label>
      <br />

      {/* Font Selector */}
      <label>
        Font:
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </label>
    </div>
  );
};

export default ColorPickerApp;
