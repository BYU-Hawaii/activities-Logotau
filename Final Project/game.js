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
