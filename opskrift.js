fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then(showExampleRecipe);

function showRecipes(recipes) {
  // Finder containeren, hvor opskrifterne skal indsættes
  const container = document.getElementById("opskrifts-container");
  // Looper gennem hver opskrift og kalder funktionen 'showRecipe'
  recipes.forEach((recipe) => showRecipe(recipe, container));
}

function showRecipe(recipe, container) {
  // Finder template-elementet i dokumentet
  const template = document.getElementById("opskrifts-template").content;
  // Klone det, så vi har et nyt, brugbart element
  const copy = template.cloneNode(true);
  // Sætter opskriftsinformation
  copy.querySelector(".opskrifter_image").src = recipe.billede_url; // Brug det korrekte felt fra din API-respons
  copy.querySelector(".opskrifter_image").alt = recipe.navn; // Brug det korrekte felt fra din API-respons
  copy.querySelector(".opskrift_name").textContent = recipe.navn; // Brug det korrekte felt fra din API-respons
  copy.querySelector(".opskrift_seasons").textContent = `Sæsoner: ${recipe.sæsoner}`; // Brug det korrekte felt fra din API-respons

  // Tilføj elementet til containeren i DOM'en
  container.appendChild(copy);
}
