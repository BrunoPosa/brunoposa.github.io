// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Upsite Loaded Successfully!");

  // Get hamburger button and navigation list
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  // Toggle the navigation menu with a smooth transition
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
