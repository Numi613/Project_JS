
class Recipe {
    constructor(RecipeName, RecipeImg, RecipeIngredients = []) {
        this.RecipeName = RecipeName;
        this.RecipeImg = RecipeImg;
        this.RecipeIngredients = RecipeIngredients;
    }
}

const RecipeArray = [
    new Recipe("Apple Cake", "../images/apple pie.png", ['eggs', 'apple', 'flour', 'sugar', 'oil']),
    new Recipe("Carrot Cake", "../images/carrot cake.webp", ['eggs', 'carrot', 'flour', 'sugar', 'oil', 'salt', 'sweet']),
    new Recipe("Potato Kugel", "../images/potato kugel.png", ['eggs', 'potato', 'flour', 'salt', 'oil']),
    new Recipe("Veggie Salad", "../images/salad.jpg", ['carrot', 'sweetPotato', 'onion', 'garlic', 'oil']),
    new Recipe("Layered Cake", "../images/layered cake.png", ['eggs', 'apple', 'flour', 'sugar', 'oil']),
    new Recipe("Onion Quiche", "../images/onion quiche.png", ['eggs', 'onion', 'flour', 'Zimkau', 'oil']),
    new Recipe("Cocoa Cookies", "../images/cocoa cookies.jpg", ['flour', 'sugar', 'eggs', 'oil']),
    new Recipe("Seasoned Potatoes", "../images/seasoned potatoes.jpg", ['potato', 'onion', 'Tomatoes', 'oil', 'salt']),
    new Recipe("Onion Soup", "../images/onion soup.jpg", ['onion', 'oil', 'salt']),
    new Recipe("Vanilla Birthday Cake", "../images/birthday ckae.jpg", ['flour', 'sugar', 'eggs', 'milk', 'apple', 'oil']),
    new Recipe("Stir Fried Veggies", "../images/stir fried veggies.jpg", ['oil', 'tomatoes', 'carrot', 'onion', 'salt']),
    new Recipe("Pizza", "../images/pizza.jpg", ['oil', 'tomatoes', 'flour', 'eggs', 'onion', 'salt']),
    new Recipe("Chicken on the Bone", "../images/chicken.jpg", ['chicken', 'salt', 'pepper', 'oil']),
    new Recipe("Grilled Veggies", "../images/grilled veggies.jpg", ['salt', 'pepper', 'carrot', 'onion', 'sweetPotato']),
    new Recipe("Tuna Salad", "../images/Screenshot 2025-07-24 010414.png", ["mayonnaise", "eggs", "onion", "salt", "pepper"]),
    new Recipe("Mashed Potatoes", "../images/fresh-flavorful-mashed-potatoes.jpg", ["potato", "butter", "milk", "salt"]),
    new Recipe("Banana Pancakes", "../images/ai-generated-image-banana.jpg", ["bannana", "eggs", "flour", "milk", "baking powder"]),
    new Recipe("Chocolate Cake", "../images/tasty-traditional-dessert-composition.jpg", ["flour", "sugar", "eggs", "chocolate", "baking powder", "oil"]),
    new Recipe("Garlic Bread", "../images/delicious-baguette-with-seasoning-board.jpg", ["flour", "garlic", "salt", "oil", "yeast"]),
    new Recipe("Shakshuka", "../images/flat-lay-delicious-jewish-food-composition.jpg", ["eggs", "Tomatoes", "onion", "garlic", "paprika", "oil"]),
    new Recipe("Coleslaw", "../images/Screenshot 2025-07-24 010735.png", ["carrot", "mayonnaise", "vinegar", "sugar"]),
    new Recipe("Baked Sweet Potatoes", "../images/high-angle-sweet-potatoes-black-plate.jpg", ["sweetPotato", "salt", "oil"]),
    new Recipe("Eggplant", "../images/eggplant-grilled-with-balsamic-sauce-garlic-cilantro-mint-vegan-food-grilled-aubergine.jpg", ["eggplant", "garlic", "lemon", "salt"]),
    new Recipe("Zucchini Fritters", "../images/zucchini-fritters-with-yogurt-sauce-white-wooden-table.jpg", ["flour", "eggs", "salt", "oil", "baking powder"]),
    new Recipe("Fruit Salad", "../images/vibrant-fruit-salad-elegant-glasses.jpg", ["apple", "bannana", "lemon", "honey"]),
    new Recipe("Cheese Omelette", "../images/Screenshot 2025-07-24 011352.png", ["eggs", "cheese", "salt", "butter"]),
    new Recipe("Vegetable Soup", "../images/top-view-delicious-autumn-soup-composition.jpg", ["carrot", "potato", "onion", "garlic", "salt", "pepper"]),
    new Recipe("Spicy Chicken", "../images/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg", ["chicken", "Tzili", "garlic", "salt", "oil"]),
];


const Button=document.getElementById("favorite")

Button.addEventListener("click",function(e){
    window.location.href ="favorites.html";
})
const AllRecipes = [];
for (let i = 0; i < RecipeArray.length; i++) {
    AllRecipes.push({
        name: RecipeArray[i].RecipeName,
        img: RecipeArray[i].RecipeImg,
        RecipeIngredients: RecipeArray[i].RecipeIngredients
    });
}


function displayRecipes(recipes) {
    allImageGrid.innerHTML = ''; 
    recipes.forEach(recipe => {
        const bag = document.createElement('div');
        bag.classList.add("recipe-card");

        const img = document.createElement('img');
        img.src = recipe.img;
        img.alt = recipe.name;

        const name = document.createElement('p');
        name.textContent = recipe.name;

       
        const favoriteBtn = document.createElement('button');
        favoriteBtn.textContent = "הוספה למומלצים 🤎";
        favoriteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const Favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            if (!Favorites.find(f => f.name === recipe.name)) {
                Favorites.push(recipe);
                localStorage.setItem("favorites", JSON.stringify(Favorites));
                alert(`${recipe.name} נוסף למומלצים`);
            }
            else(alert(`${recipe.name} המתכון כבר נמצא ברשימת המומלצים`))
        });

      
        img.addEventListener("click", () => {
            localStorage.setItem("selectedRecipe", JSON.stringify(recipe));
            window.location.href = "recipe.html";
        });

       
        img.addEventListener("mouseover", () => {
            img.classList.add("Hover");
            bag.appendChild(name);
        });

        img.addEventListener("mouseleave", () => {
            img.classList.remove("Hover");
            bag.removeChild(name);
        });

        bag.appendChild(img);
        bag.appendChild(favoriteBtn);
        allImageGrid.appendChild(bag);
    });
}

displayRecipes(AllRecipes);


document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.querySelector("#myForm");


        const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(checkbox => {
        const label = document.querySelector(`label[for='${checkbox.id}']`);

        checkbox.addEventListener("mouseover", () => {
            label.classList.add("color");
        });

        checkbox.addEventListener("mouseleave", () => {
            label.classList.remove("color");
        });

    myForm?.addEventListener('submit', (event) => {
        event.preventDefault();

        const userIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.name);

        const matchedRecipes = RecipeArray.filter(recipe =>
            recipe.RecipeIngredients.every(ing => userIngredients.includes(ing))
        ).map(recipe => ({
            name: recipe.RecipeName,
            img: recipe.RecipeImg,
            RecipeIngredients: recipe.RecipeIngredients
        }));

        displayRecipes(matchedRecipes);

        document.getElementById('resultsTitle').textContent = matchedRecipes.length > 0
            ? 'מתכונים שתואמים את המצרכים שלך:'
            : 'לא נמצאו מתכונים תואמים. בחר עוד מוצרים!';
    });
  
});
  setTimeout(()=>{alert("Enjoy!!!");},10000)
});