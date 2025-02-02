document.addEventListener("DOMContentLoaded", function () {
    console.log("Upsite Loaded Successfully!");
});

// Select the hamburger icon and the menu (ul element)
const hamburgerIcon = document.querySelector('.icon');
const navMenu = document.querySelector('nav ul');

// Toggle the 'show' class to show/hide the menu when the icon is clicked
hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
