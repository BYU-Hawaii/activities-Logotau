document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const feedback = document.getElementById('feedback').value;

        if (name === '' || age === '' || feedback === '') {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
});
