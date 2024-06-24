<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $rating = htmlspecialchars($_POST['rating']);
    $comments = htmlspecialchars($_POST['comments']);

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($rating) && !empty($comments)) {
        // Save the feedback to a file
        $feedback = "Name: $name\nEmail: $email\nRating: $rating\nComments: $comments\n\n";
        file_put_contents('feedback.txt', $feedback, FILE_APPEND | LOCK_EX);

        // Display success message
        echo "<p>Thank you for your feedback!</p>";
    } else {
        // Display error message
        echo "<p>Please fill out all required fields.</p>";
    }
} else {
    // Display error message if form is not submitted correctly
    echo "<p>Invalid request method.</p>";
}
?>
