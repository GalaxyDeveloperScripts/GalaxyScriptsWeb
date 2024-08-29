// Script per gestire l'hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.links');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
