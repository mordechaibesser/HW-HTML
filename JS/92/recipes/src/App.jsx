import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import AddRecipeComponent from './AddRecipeComponent';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(0);
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('./recipes.json');
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const recipeSelected = (index) => {
    setSelectedRecipe(index);
  };

  const toggleAddRecipe = () => {
    setShowAddRecipe((prev) => !prev);
  };

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { ...newRecipe, id: prevRecipes.length + 1 },
    ]);
    setShowAddRecipe(false); // Close the form after adding
  };

  const recipeJsx = recipes.length ? (
    <Recipe recipe={recipes[selectedRecipe]} />
  ) : (
    <div>Loading...</div>
  );

  return (
    <div className="container text-center">
      <h1>PCS Recipes</h1>
      <button onClick={toggleAddRecipe}>
        {showAddRecipe ? 'Cancel Adding Recipe' : 'Add Recipe'}
      </button>
      {showAddRecipe && (
        <AddRecipeComponent
          handleAddRecipe={addRecipe}
          setShowAddRecipe={setShowAddRecipe}
        />
      )}
      <RecipeList
        recipes={recipes}
        recipeSelectedHandler={recipeSelected}
      />
      <hr />
      {recipeJsx}
    </div>
  );
};

export default App;
