console.log("single view - opskrift");

// const urlP = new URLSearchParams(window.location.search);
// const id = urlP.get("id");

// const produktURL = "https://kea-alt-del.dk/t7/api/products/" + id;

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

  const ingredientParent = document.querySelector(".ingredients_container");
  data[0].ingredients.forEach(makeIngredientList);

  function makeIngredientList(ingredientData) {
    console.log(ingredientData);
    ingredientParent.innerHTML += "<li>" + ingredientData + "</li>";
  }

  const directionParent = document.querySelector(".how_to");
  data[0].directions.forEach(makeDirectionList);

  function makeDirectionList(directionData) {
    console.log(directionData);
    directionParent.innerHTML += "<li>" + directionData + "</li>";
  }

  const tipParent = document.querySelector(".tips");
  data[0].tips.forEach(makeTipsList);

  function makeTipsList(tipData) {
    console.log(tipData);
    tipParent.innerHTML += "<li>" + tipData + "</li>";
  }

  document.querySelector(".opskrift_billede").src = data[0].image;
  document.querySelector(".opskrift_billede").alt = `Picture of ${data[0].name} `;

  //   document.querySelector(".ingredients").textContent = data[0].ingredients;
  //   document.querySelector(".directions").textContent = data[0].directions;
  //   document.querySelector(".tips").textContent = data[0].tips;
  //   const imagePath = `https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe${data.image}.webp`;
}
