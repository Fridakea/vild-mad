// Konstanter og variabler
const ingredientTemplate = document.querySelector(".ingredient-template");
const ingrediensContainer = document.querySelector(".ingredients-overview-container");

// Fetch data om ingredienser
fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/ingredient", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then(showIngredient);

function showIngredient(data) {
  console.log(data);

  let cloneIngredient = ingredientTemplate.cloneNode(true).textContent;
  console.log(cloneIngredient);

  document.querySelector("ingredient-template img").src = `images/${data.image}`;
}
