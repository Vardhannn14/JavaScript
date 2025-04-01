document.addEventListener('DOMContentLoaded', loadRecipes);
document.getElementById('recipeForm').addEventListener('submit', addRecipe);

    function getRecipes() {
        return JSON.parse(localStorage.getItem('recipes')) || [];
    }

    function saveRecipes(recipes) {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function addRecipe(event) {
        event.preventDefault();
        const title = document.getElementById('title').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim();
        const instructions = document.getElementById('instructions').value.trim();
        const cuisine = document.getElementById('cuisine').value.trim();

        if (!title || !ingredients) return alert('Title and ingredients are required.');

        const recipes = getRecipes();
        recipes.push({ id: Date.now(), title, ingredients, instructions, cuisine });
        saveRecipes(recipes);
        document.getElementById('recipeForm').reset();
        displayRecipes();
    }

    function displayRecipes() {
        const recipesList = document.getElementById('recipesList');
        recipesList.innerHTML = '';

        const recipes = getRecipes();
        recipes.forEach(recipe => {
            const div = document.createElement('div');
            div.classList.add('recipe');
            div.innerHTML = `<h3>${recipe.title}</h3>
                            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                            <button onclick="editRecipe(${recipe.id})">Edit</button>
                            <button onclick="deleteRecipe(${recipe.id})">Delete</button>`;
            recipesList.appendChild(div);
        });
    }

    function editRecipe(id) {
        const recipes = getRecipes();
        const recipe = recipes.find(r => r.id === id);
        if (!recipe) return;

        document.getElementById('title').value = recipe.title;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;
        document.getElementById('cuisine').value = recipe.cuisine;

        deleteRecipe(id);
    }

    function deleteRecipe(id) {
        let recipes = getRecipes().filter(recipe => recipe.id !== id);
        saveRecipes(recipes);
        displayRecipes();
    }

    function loadRecipes() {
        displayRecipes();
    }

    function searchRecipes() {
        const query = document.getElementById('search').value.toLowerCase();
        const recipes = getRecipes().filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query)
        );
        displayFilteredRecipes(recipes);
    }

    function filterRecipes() {
        const filterValue = document.getElementById('filter').value.toLowerCase();
        if (!filterValue) return displayRecipes();

        const recipes = getRecipes().filter(recipe => recipe.cuisine.toLowerCase() === filterValue);
        displayFilteredRecipes(recipes);
    }

    function displayFilteredRecipes(recipes) {
        const recipesList = document.getElementById('recipesList');
        recipesList.innerHTML = '';

        recipes.forEach(recipe => {
            const div = document.createElement('div');
            div.classList.add('recipe');
            div.innerHTML = `<h3>${recipe.title}</h3>
                            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                            <button onclick="editRecipe(${recipe.id})">Edit</button>
                            <button onclick="deleteRecipe(${recipe.id})">Delete</button>`;
            recipesList.appendChild(div);
        });
    }