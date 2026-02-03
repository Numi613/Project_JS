const recipeDetails = document.getElementById('recipeDetails');
const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));

if (recipe) {
    const ingredients = recipe.RecipeIngredients || [];

    recipeDetails.innerHTML = `
        <h1>${recipe.name}</h1>
        <img src="${recipe.img}" alt="${recipe.name}" class="recipe-image">
        <h2>Ingredients:</h2>
        <ul>
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    `;
} else {
    recipeDetails.innerHTML = '<p>No recipe selected.</p>';
}