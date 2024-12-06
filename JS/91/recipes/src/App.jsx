import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      selectedRecipe: 0,
      showAddRecipe: false,
    };
  }

  async componentDidMount() {
    try {
      const r = await fetch('./recipes.json');
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText}`);
      }
      const recipes = await r.json();
      this.setState({
        recipes,
      });
    } catch (e) {
      console.error(e);
    }
  }

  recipeSelected = (index) => {
    this.setState({
      selectedRecipe: index,
    });
  };

  toggleAddRecipe = () => {
    this.setState((prevState) => ({
      showAddRecipe: !prevState.showAddRecipe,
    }));
  };

  addRecipe = (newRecipe) => {
    this.setState((prevState) => ({
      recipes: [...prevState.recipes, { ...newRecipe, id: prevState.recipes.length + 1 }],
      showAddRecipe: false, // Close the form after adding
    }));
  };

  render() {
    const { recipes, selectedRecipe, showAddRecipe } = this.state;

    const recipeJsx = recipes.length ? (
      <Recipe recipe={recipes[selectedRecipe]} />
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        <button onClick={this.toggleAddRecipe}>
          {showAddRecipe ? 'Cancel Adding Recipe' : 'Add Recipe'}
        </button>
        {showAddRecipe && <AddRecipe addRecipeHandler={this.addRecipe} />}
        <RecipeList recipes={recipes} recipeSelectedHandler={this.recipeSelected} />
        <hr />
        {recipeJsx}
      </div>
    );
  }
}
