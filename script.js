const menu = document.getElementById("menu");
const hamburguer = document.getElementById("hamburguer");
const nav = document.getElementById("nav");
const linksMenu = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    menu.classList.add("fixo");
  } else {
    menu.classList.remove("fixo");
  }
});

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("ativo");
  nav.classList.toggle("ativo");
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    hamburguer.classList.remove("ativo");
    nav.classList.remove("ativo");
  });
});