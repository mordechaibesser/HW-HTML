async function fetchRecipes() {
    try {
      const response = await fetch('http://localhost:3000/api/recipes');
      const recipes = await response.json(); // Directly getting the array
  
      console.log('API Response:', recipes); // Log to debug
  
      if (!Array.isArray(recipes)) {
        throw new Error('Invalid API response: Expected an array');
      }
  
      const recipesDiv = document.getElementById('recipes');
      recipesDiv.innerHTML = '';
  
      recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `
          <h3>${recipe.name}</h3>
          <p><strong>Category:</strong> ${recipe.category}</p>
          <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipesDiv.appendChild(recipeDiv);
      });
  
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
  
  // Call the function to load recipes on page load
  fetchRecipes();
  