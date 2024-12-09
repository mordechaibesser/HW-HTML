import './Recipe.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';

const Recipe = ({ recipe }) => {
  const [pictureShowing, setPictureShowing] = useState(true);

  if (!recipe?.name) {
    return <div>Loading...</div>;
  }

  const { name, ingredients, directions, picture } = recipe;

  const togglePicture = () => setPictureShowing((prev) => !prev);

  return (
    <>
      <h2>{name}</h2>
      {pictureShowing && <img src={picture} alt={name} />}
      <br />
      <button onClick={togglePicture}>
        {pictureShowing ? 'Hide Picture' : 'Show Picture'}
      </button>
      <ListComponent name="ingredients" list={ingredients} />
      <ListComponent name="directions" list={directions} />
    </>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    directions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Recipe;
