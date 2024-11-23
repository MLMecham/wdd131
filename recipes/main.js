import recipes from './recipes.mjs'


function randomNumber(number) {
    return Math.floor(Math.random()*number)
}

function getRandomListEntry(list) {
    let length = list.length;
    let random = randomNumber(length);
    return list[random]
}

function tagsTemplate(tags) {
    let html = ""

    console.log("tags:", tags, "Type:", typeof tags)  
    tags = Object.values(tags)
    console.log("tags:", tags, "Type:", typeof tags)  
    
    for (let tag of tags) {
        html += `<li>${tag}</li>`
    }

    return html
}

function ratingTemplate(rating) {
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`

    return html
}

function recipeTemplate(recipe) {
    return `<div class="recipe-container">
            <div class="image-container">
                <img src="${recipe.image}" alt="Picture of ${recipe.image}" >
            </div>
            <div class="right-container">
                
                <ul class="tag">
                    ${tagsTemplate(recipe.tags)}
                </ul>
                <div class="subtitle-rating">
                    <div class="name">
                    <h2><a href="${recipe.url}" target="_blank">${recipe.name}</a></h2>
                    ${ratingTemplate(recipe.rating)}
                    </div>
                </div>
                <div class="description">
                    <p>${recipe.description}</p>
                </div>
            </div>
        </div>`
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    let div = document.querySelector('main')
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let content = recipeTemplate(recipeList)
	// Set the HTML strings as the innerHTML of our output element.
    div.innerHTML += content
}
function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes)
    // render the recipe with renderRecipes.
    renderRecipes(recipe);
  }
init();

console.log(getRandomListEntry(recipes))
// console.log(recipeTemplate(recipe))

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function searchHandler(event) {
    event.preventDefault
    let query = document.querySelector('#search').value
    query = query.toLowerCase()
    console.log(query)

    let filteredRecipes = filterRecipes(query)
    console.log(filteredRecipes)

    let sortedRecipes = sortRecipes(filteredRecipes)
    console.log(sortedRecipes)

    document.querySelector('main').innerHTML = ' '

    sortedRecipes.forEach(recipe => {
        renderRecipes(recipe)
    })

}

function filterRecipes(query) {


    return recipes.filter(recipe => {
        // Check if the recipe name, tags, ingredients, or description includes the query string
        const queryLower = query.toLowerCase(); // Convert query to lowercase for case-insensitive comparison
        
        return (
            recipe.name.toLowerCase().includes(queryLower) ||  // Search in name
            recipe.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||  // Search in tags
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(queryLower)) ||  // Search in ingredients
            recipe.description.toLowerCase().includes(queryLower) // Search in description
        );
    });  
}

function sortRecipes(list) {
    return list.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    })
}

let button = document.getElementById("search-button")
button.addEventListener('click', searchHandler)
