document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // If using a service like Formspree, you'd submit the form here
            alert('Thank you for your feedback!');
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        if (email === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (rating === '') {
            alert('Please select a rating.');
            return false;
        }

        if (comments === '') {
            alert('Please enter your comments.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});