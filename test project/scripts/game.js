// Animal data (in a real implementation, this would be generated by an AI)
const animals = [
    { name: "elephant", description: "I'm big and gray with a long trunk!" },
    { name: "giraffe", description: "I have a very long neck and spotted fur!" },
    { name: "penguin", description: "I waddle around in a tuxedo and love to swim!" },
    { name: "lion", description: "I'm the king of the jungle with a big mane!" },
    { name: "monkey", description: "I love to swing from trees and eat bananas!" },
    { name: "dolphin", description: "I'm a smart swimmer with a permanent smile!" },
    { name: "kangaroo", description: "I hop around and carry my baby in a pouch!" },
    { name: "tiger", description: "I'm a big cat with orange fur and black stripes!" },
    { name: "panda", description: "I'm black and white and love eating bamboo!" },
    // Add more animals here
];

let currentAnimal;
let attempts = 0;
const maxAttempts = 3;

function startGame() {
    attempts = 0;
    currentAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById('description').textContent = currentAnimal.description;
    document.getElementById('result').textContent = '';
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
}

function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase();
    attempts++;

    if (guess === currentAnimal.name) {
        document.getElementById('result').textContent = "Correct! Well done!";
        setTimeout(startGame, 2000);
    } else if (attempts >= maxAttempts) {
        document.getElementById('result').textContent = `Sorry, it was a ${currentAnimal.name}. Let's try another!`;
        setTimeout(startGame, 2000);
    } else {
        document.getElementById('result').textContent = `Not quite! Try again. Attempts left: ${maxAttempts - attempts}`;
        document.getElementById('guess').value = '';
        document.getElementById('guess').focus();
    }
}

// Start the game when the page loads
window.onload = function() {
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.innerHTML = `
            <p id="description"></p>
            <input type="text" id="guess" placeholder="Enter your guess">
            <button onclick="checkGuess()">Submit Guess</button>
            <p id="result"></p>
        `;
        startGame();
    }
};