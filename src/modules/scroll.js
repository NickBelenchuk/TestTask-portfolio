const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const elementId = anchor.getAttribute("href").substring(1);
    const section = document.getElementById(elementId);
    if (!section) return;

    const topOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPos = topOffset - sectionHeight;

    window.scrollTo({
      top: scrollPos,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", () => {
  let scrollBar = window.scrollY;

  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu path ").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".menu a")
        [i].querySelector("path")
        .classList.add("active");
    }
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu p ").forEach((el) => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".menu a")
        [i].querySelector("p")
        .classList.add("active");
    }
  });
});
