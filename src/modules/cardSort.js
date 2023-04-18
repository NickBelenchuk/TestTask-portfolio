const filterItem = document.querySelector(".skills");
const filterCard = document.querySelectorAll(".cards .cards__item");

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("skills__item")) {
      filterItem
        .querySelector(".skills__item--active")
        .classList.remove("skills__item--active");
      selectedItem.target.classList.add("skills__item--active");

      let filterName = selectedItem.target.getAttribute("data-name");

      filterCard.forEach((card) => {
        let filterCards = card.getAttribute("data-name");
        if (filterCards == filterName || filterName == "all") {
          card.classList.remove("cards__item---hide");
          card.classList.add("cards__item---show");
        } else {
          card.classList.add("cards__item---hide");
          card.classList.remove("cards__item---show");
        }
      });
    }
  };
};
