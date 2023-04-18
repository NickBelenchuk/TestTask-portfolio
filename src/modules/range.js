const rangeInputs = document.querySelectorAll('input[type="range"]');
const numberInput = document.querySelector('input[type="number"]');
const dataValue = document.querySelectorAll("option");

function handleInputChange(e) {
  let target = e.target;
  if (e.target.type !== "range") {
    target = document.getElementById("range");
  }

  const min = target.min;
  const max = target.max;
  const val = target.value;

  dataValue.forEach((option) => {
    option.addEventListener("option", handleInputChange);
    option.label == val
      ? option.classList.add("current")
      : option.classList.remove("current");
  });

  target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
}

rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});
