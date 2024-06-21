<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $age = htmlspecialchars($_POST['age']);
    $feedback = htmlspecialchars($_POST['feedback']);

    $file = fopen("feedback.txt", "a") or die("Unable to open file!");
    $txt = "Name: $name, Age: $age, Feedback: $feedback\n";
    fwrite($file, $txt);
    fclose($file);

    header("Location: feedback.html");
    exit();
}
?>
