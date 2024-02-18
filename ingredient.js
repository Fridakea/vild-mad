window.addEventListener("DOMContentLoaded", init);

// Konstanter og variabler
const urlParams = new URLSearchParams(window.location.search);
const seasonFilter = urlParams.get("season");
const monthFilter = urlParams.get("month");

function init() {
  console.log("Url Parameter season: ", seasonFilter);

  document.querySelector(`.${seasonFilter}`).classList.add('show');

  // Fetch data om ingredienser fra API
  fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/ingredient", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
    },
  })
  .then((response) => response.json())
  .then(showIngredient);
}

// Vis ingredienser ud fra data fra API'et
function showIngredient(data) {
  console.log(data);
  
  // Filtrer på sæson
  let filteredIngredients = data.filter(i => i.seasons.includes(seasonFilter))
  
  if(monthFilter) filteredIngredients = filteredIngredients.filter(i => i.months.includes(Number(monthFilter)));


  console.log(filteredIngredients);

  // For Each loop som gør det muligt at lave et "card" for hver ingrediens
  filteredIngredients.forEach(function(ingredientData) {
    const template = document.querySelector("#ingredient-template");
    const ingredientClone = template.cloneNode(true).content;

    ingredientClone.querySelector(".ingredient img").src = `images/${ingredientData.image}`
    ingredientClone.querySelector(".ingredient img").alt = `images of ${ingredientData.image}`
    ingredientClone.querySelector(".ingredient h3").textContent = ingredientData.name
    ingredientClone.querySelector(".ingredient").href = `opskrift_oversigt.html?=${ingredientData.ingredients}`

    // Indsæt klonerne i dommen
    document.querySelector(".ingredients-overview-container").appendChild(ingredientClone);
  })
}

function onMonthFilterClick(month) {
  const url = new URL(window.location.href);   // Nuværende URL
  url.searchParams.set('month', month);        // Ændre måned
  window.location.href = url;                  // Ændrer url og genindlæser siden
}
