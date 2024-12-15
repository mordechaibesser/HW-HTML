import React, { useState } from 'react';

const ColorPickerApp = () => {
  const [styles, setStyles] = useState({
    bgColor: '#ffffff',
    textColor: '#000000',
    font: 'Arial',
  });

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setStyles((prevStyles) => ({ ...prevStyles, [name]: value }));
  };

  return (
    <div
      style={{
        backgroundColor: styles.bgColor,
        color: styles.textColor,
        fontFamily: styles.font,
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
          name="bgColor"
          value={styles.bgColor}
          onChange={handleStyleChange}
        />
      </label>
      <br />

      {/* Text Color Input */}
      <label>
        Text Color:
        <input
          type="color"
          name="textColor"
          value={styles.textColor}
          onChange={handleStyleChange}
        />
      </label>
      <br />

      {/* Font Selector */}
      <label>
        Font:
        <select name="font" value={styles.font} onChange={handleStyleChange}>
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
