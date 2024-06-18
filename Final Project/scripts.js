document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded and ready to go!");

    // Add functionality to handle game interactions or other features here

    // Example: Add a simple click event for game items
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on ${item.textContent}`);
        });
    });

    // Example: Add functionality to toggle navigation menu on mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});
