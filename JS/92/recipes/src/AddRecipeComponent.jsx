import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddRecipeComponent = ({ handleAddRecipe, setShowAddRecipe }) => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      name,
      picture,
      ingredients: ingredients.split(';'),
      directions: directions.split(';'),
    };
    handleAddRecipe(recipe);
  };

  return (
    <form className="text-start" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength="3"
        />
      </div>
      <div className="form-group">
        <label htmlFor="picture">Picture: </label>
        <input
          className="form-control"
          id="picture"
          name="picture"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients: </label>
        <input
          className="form-control"
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="directions">Directions: </label>
        <input
          className="form-control"
          id="directions"
          name="directions"
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
        />
      </div>
      <button type="submit">Add Recipe</button>
      <button type="button" onClick={() => setShowAddRecipe(false)}>Cancel</button>
    </form>
  );
};

AddRecipeComponent.propTypes = {
  handleAddRecipe: PropTypes.func.isRequired,
  setShowAddRecipe: PropTypes.func.isRequired,
};

export default AddRecipeComponent;
