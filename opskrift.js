console.log("oversigt over alle opskrifter");

fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0",
  },
})
  .then((response) => response.json())
  .then(showRecipe)
  .catch((error) => console.error("Fejl ved indlæsning af opskrifter:", error));

function showRecipe(data) {
  console.log("Recipe");
  console.table(data);

  // Vis kun data, hvis der er mindst én opskrift
  if (data.length > 0) {
    const opskrift = data[0];

    opskriftsElement.querySelector(".opskrift_image").src = `https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe/${opskrift.image}.webp`;
    opskriftsElement.querySelector(".opskrift_name").textContent = `Navn: ${opskrift.name}`;
    opskriftsElement.querySelector(".opskrift_seasons").textContent = `Sæsoner: ${opskrift.seasons}`;
  }
}
