<?php

// Set your email address here
$to = "dulsaradidul@gmail.com";

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create email body content (adjust formatting as needed)
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

// Send email using PHP's mail() function
if (mail($to, "Message from Contact Form", $body)) {
  echo "Your message has been sent successfully!";
} else {
  echo "There was an error sending your message. Please try again later.";
}

?>