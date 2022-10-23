const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-sections");

const slider = document.querySelectorAll(".slide");
const persons = document.querySelectorAll(".person");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("click", () => {
    slider[i].classList.add("active");
    if (i > 0) {
      slider[i - 1].classList.remove("active");
      persons[0].classList.remove("hidden");
      persons[2].classList.add("hidden");
    } else {
      slider[i + 1].classList.remove("active");

      persons[2].classList.remove("hidden");
      persons[0].classList.add("hidden");
    }
  });
}
