const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener ('click', () => {
    navLinks.classList.toggle("open");
});