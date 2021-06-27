const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("animation");
  document.querySelector(".center__header").classList.toggle("display");
});
