const popup = document.getElementById("popup");
// const close = document.getElementById("popup__close");

function showPopup() {
  popup.style.display = "block";
}
setTimeout(showPopup, 2000);

function closePopup() {
  popup.style.display = "none";
}

document.getElementById("popup__close").addEventListener("click", closePopup);
