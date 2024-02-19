console.log("oversigt over alle opskrifter");

// til sammenhæng mellem ingrediens og opskrift
const urlParams = new URLSearchParams(window.location.search);
const ingredientUrlParam = urlParams.get("ingredient");

// Konstanter og variabler
const opskriftTemplate = document.querySelector("#opskrifts-template");
const opskriftsContainer = document.querySelector("#opskrifts-container");
const seasonFilter = document.querySelector("#season-filter");
const typeFilter = document.querySelector("#type-filter");
let data;

const ingredientRecipeParam = "?select=*,ingredient_recipe(ingredient(*))";
fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe" + ingredientRecipeParam, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then((fetchedData) => {
    console.log("Fetched Data:", fetchedData);
    data = fetchedData; // Gem data globalt
    
    // Filtrerer opskrifter som indeholder ingrediensen med Id = ingredientUrlParam
    if(ingredientUrlParam) data = data.filter(r => r.ingredient_recipe.some(ir => ir.ingredient.id == ingredientUrlParam));

    showRecipe(data); // Kald showRecipe med den oprindelige data
  })
  .catch((error) => console.error("Fejl ved indlæsning af opskrifter:", error));

// Event listener for sæson-filteret
seasonFilter.addEventListener("change", function () {
  // Filtrer opskrifter baseret på den valgte sæson
  const selectedSeason = seasonFilter.value;

  // Filtrer opskrifter baseret på den valgte sæson eller vis alle opskrifter
  const filteredData = selectedSeason === "all" ? data : data.filter((opskrift) => opskrift.seasons.includes(selectedSeason));

  // Kald showRecipe igen med filtrerede data baseret på valgt sæson
  showRecipe(filteredData);
});

// Event listener for type-filteret
typeFilter.addEventListener("change", function () {
  // Filtrer opskrifter baseret på den type
  const selectedType = typeFilter.value;

  // Filtrer opskrifter baseret på den valgte type eller vis alle opskrifter
  const filteredData = selectedType === "all" ? data : data.filter((opskrift) => opskrift.type.includes(selectedType));

  // Kald showRecipe igen med filtrerede data baseret på valgt sæson
  showRecipe(filteredData);
});

function showRecipe(data) {
  console.log("Recipe");
  console.log(data);

  // Fjern eksisterende opskrifter fra containeren
  opskriftsContainer.innerHTML = "";

  // Vis kun data, hvis der er mindst én opskrift
  if (data.length > 0) {
    // Iterer gennem hvert element i arrayet
    data.forEach((opskrift) => {
      console.log("Opskrift Type:", opskrift.type);
      // Klon templaten til at vise opskrifter
      let opskriftKlon = opskriftTemplate.cloneNode(true).content;

      opskriftKlon.querySelector(".opskrift_image").src = `images/${opskrift.image}`;
      opskriftKlon.querySelector(".opskrift_name").textContent = ` ${opskrift.name}`;
      opskriftKlon.querySelector(".opskrift_seasons").textContent = ` ${opskrift.seasons}`;
      opskriftKlon.querySelector(".opskrift_type").textContent = ` ${opskrift.type}`;
      opskriftsContainer.appendChild(opskriftKlon);
    });
  }
}
