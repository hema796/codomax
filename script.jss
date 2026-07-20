// Select menu button and navigation links
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu when a navigation link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});