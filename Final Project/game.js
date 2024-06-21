let word = "TEST";
let guessedLetters = [];

function updateWordPuzzle() {
    let displayWord = '';
    for (let letter of word) {
        if (guessedLetters.includes(letter)) {
            displayWord += letter + ' ';
        } else {
            displayWord += '_ ';
        }
    }
    document.getElementById('word-puzzle').textContent = displayWord.trim();
}

function checkGuess() {
    let guessInput = document.getElementById('guess');
    let guess = guessInput.value.toUpperCase();
    if (guess.length === 1 && !guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
    }
    guessInput.value = '';
    updateWordPuzzle();
    checkWin();
}

function checkWin() {
    let puzzle = document.getElementById('word-puzzle').textContent.replace(/ /g, '');
    if (puzzle === word) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
    }
}

// Initialize the puzzle display
updateWordPuzzle();

// AI-generated word list for the puzzle
const words = ["APPLE", "BANANA", "ORANGE", "GRAPE", "MANGO"];

// Function to select a random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Set the word to a randomly selected word
let word = getRandomWord();

// Rest of the code remains the same...
