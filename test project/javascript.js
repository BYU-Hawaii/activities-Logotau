// Animal data (in a real implementation, this would be generated by an AI)
const animals = [
    { name: "elephant", description: "I'm big and gray with a long trunk!" },
    { name: "giraffe", description: "I have a very long neck and spotted fur!" },
    { name: "penguin", description: "I waddle around in a tuxedo and love to swim!" },
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
window.onload = startGame;