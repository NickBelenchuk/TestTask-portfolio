const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  //   console.log(anchor);
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const elementId = anchor.getAttribute("href").substring(1);
    // console.log(elementId);

    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
});

window.addEventListener("scroll", () => {
  let scrollBar = window.scrollY;

  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu path ").forEach((el) => {
        console.log(el);
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
      document
        .querySelectorAll(".menu a")
        [i].querySelector("path")
        .classList.add("active");
    }
  });

  document.querySelectorAll(".section").forEach((el, i) => {
    if (el.offsetTop <= scrollBar) {
      document.querySelectorAll(".menu p ").forEach((el) => {
        console.log(el);
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
