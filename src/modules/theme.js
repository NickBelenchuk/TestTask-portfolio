const body = document.querySelector("body");
const themeSwitcher = document.querySelector(".toggle");

themeSwitcher.addEventListener("click", () => {
  body.classList.toggle("light");
});
