<?php

// Capture form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate email (optional)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Invalid email format.";
  exit();
}

// Prepare email content
$subject = "Contact form submission from $name";
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Send email using your preferred library or mailer function
// Replace with your email sending logic

if (mail('dulsaradidul@gmail.com', $subject, $body, 'From: ' . $email)) {
  echo "Email sent successfully!";
} else {
  echo "There was an error sending the email.";
}

?>