window.addEventListener("DOMContentLoaded", init);

// Konstanter og variabler
const ingrediensContainer = document.querySelector(".ingredients-overview-container");

function init() {
// Fetch data om ingredienser
fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/ingredient", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then(showIngredient);
}

function showIngredient(data) {
  console.log(data);

  data.forEach(function(ingredientData) {
    const template = document.querySelector("#ingredient-template");
    const ingredientClone = template.cloneNode(true).content;
    console.log(ingredientClone);

    ingredientClone.querySelector(".ingredient img").src = `images/${ingredientData.image}`
    ingredientClone.querySelector(".ingredient img").alt = `images of ${ingredientData.image}`
    ingredientClone.querySelector(".ingredient h3").textContent = ingredientData.name
    ingredientClone.querySelector(".ingredient").href = `opskrift_oversigt.html?=${ingredientData.ingredients}`

    // Insert into the actual DOM 
    document.querySelector(".ingredients-overview-container").appendChild(ingredientClone);
  })
}
