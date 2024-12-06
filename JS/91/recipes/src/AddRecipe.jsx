import React, { useState } from 'react';

const AddRecipe = ({ addRecipeHandler }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      ingredients: ingredients.split(',').map((item) => item.trim()),
      directions: directions.split(',').map((item) => item.trim()),
      picture,
    };
    addRecipeHandler(newRecipe);
    setName('');
    setIngredients('');
    setDirections('');
    setPicture('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <label>
        Recipe Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Ingredients (comma-separated):
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Directions (comma-separated):
        <input
          type="text"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Picture URL:
        <input type="text" value={picture} onChange={(e) => setPicture(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
