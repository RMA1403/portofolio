const webPertama = document.getElementById("website-pertama");
const backendDevelopment = document.getElementById("backend-development");
const projectSaatIni = document.getElementById("project-saat-ini");
const k12Project = document.getElementById("k12-project");
const nav = document.getElementById("nav");
const navAfter = window.getComputedStyle(nav, "::after");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [0.2, 0.6],
};

let currentWidth = 0;

function changeWidth(entry, index) {
  if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
    nav.style.setProperty("--width", `${index * 25}%`);
    currentWidth = index;
  } else if (
    !entry.isIntersecting &&
    entry.intersectionRatio < 0.2 &&
    index === 1 &&
    currentWidth === index
  ) {
    nav.style.setProperty("--width", "0%");
  }
}

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.target.id === "website-pertama") {
      changeWidth(entry, 1);
    } else if (entry.target.id === "backend-development") {
      changeWidth(entry, 2);
    } else if (entry.target.id === "project-saat-ini") {
      changeWidth(entry, 3);
    } else if (entry.target.id === "k12-project") {
      changeWidth(entry, 4);
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, observerOptions);

observer.observe(webPertama);
observer.observe(backendDevelopment);
observer.observe(projectSaatIni);
observer.observe(k12Project);
