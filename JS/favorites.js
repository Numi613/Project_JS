const favoritesList = document.getElementById('favoritesList');
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length > 0) {
    favorites.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add("favorite-card");

        const title = document.createElement('h3');
        title.textContent = `🍽️ ${recipe.name}`;

        const img = document.createElement('img');
        img.src = recipe.img;
        img.alt = recipe.name;
        

      
        img.addEventListener("click", () => {
            localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
            window.location.href = "recipe.html";
        });

        recipeDiv.appendChild(title);
        recipeDiv.appendChild(img);
        favoritesList.appendChild(recipeDiv);
    });
} else {
    favoritesList.innerHTML = '<p>אין מתכונים ברשימת הממולצים</p>';
}

