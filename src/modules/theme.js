let themeSwitcher = document.getElementById("swither");

themeSwitcher.onclick = function () {
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "dark.scss") {
    theme.href = "light.scss";
  } else {
    theme.href = "dark.scss";
  }
};
