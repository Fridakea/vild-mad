console.log("single view - opskrift");

fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then(showRecipe);

function showRecipe(data) {
  console.log("Recipe");
  console.table(data);

  document.querySelector(".opskrift_titel").textContent = data[0].name;
  document.querySelector(".difficulty").textContent = data[0].difficulty;
  document.querySelector(".portions").textContent = data[0].portions;
  document.querySelector(".duration").textContent = data[0].duration;

  const ingredients = data.ingredients;

  const ingredientsList = document.querySelector(".ingredients_container");

  ingredients.forEach(makeIngredientList);

  function makeIngredientList(ingredient) {
    ingredientsList.innerHTML += "<li>" + ingredient + "</li>";
  }

  //   document.querySelector(".ingredients").textContent = data[0].ingredients;
  document.querySelector(".directions").textContent = data[0].directions;
  document.querySelector(".tips").textContent = data[0].tips;
  const imagePath = `https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe${data.image}.webp`;
}
