const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll("nav .menu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    menu.classList.remove("active");
  });
});

//index pil scrol
function scrollToNextSection() {
  // Vælg det næste afsnit eller element, du vil rulle ned til
  var nextSection = document.getElementById("nextSection");

  // Tjek om elementet blev fundet, og rul ned, hvis det gør
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}
