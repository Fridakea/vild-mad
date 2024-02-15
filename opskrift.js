// Fetch data om opskrifter
fetch("https://ayhgznyvoxhuiwpetdcp.supabase.co/rest/v1/recipe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aGd6bnl2b3hodWl3cGV0ZGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NDE2NTcsImV4cCI6MjAyMzQxNzY1N30.8sKL9HgJTYSl6pgiZbRHk8qLBjPg9ebrnH6VQft3nx0", // Erstat med din faktiske API-nøgle
  },
})
  .then((response) => response.json())
  .then(opskrift);

function opskrift(dataExample) {
  console.log("Opskrifter");
  console.table(dataExample);

  // Find containeren i DOM'en
  var opskriftsContainer = document.getElementById("opskrifts-container");

  // Find template-elementet i DOM'en
  var opskriftsTemplate = document.getElementById("opskrifts-template");

  // Iterer over hvert element i data og opret elementer baseret på skabelonen
  dataExample.forEach((opskrift) => {
    // Klon template-elementet
    var opskriftsElement = document.importNode(opskriftsTemplate.content, true);

    // Opdater elementets indhold baseret på opskriftsdata
    opskriftsElement.querySelector(".opskrifter_image").src = opskrift.billede_url;
    opskriftsElement.querySelector(".opskrift_name").textContent = opskrift.navn;

    // Tilføj elementet til containeren i DOM'en
    opskriftsContainer.appendChild(opskriftsElement);
  });
}
