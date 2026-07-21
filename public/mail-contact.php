<?php
ob_start();
header('Content-Type: application/json');

// Set your recipient email address here
$to = "desmonlatandos@gmail.com";

// Set the email subject
$subject = "New Inquiry from Cargonz Contact Form";

// Check if the form was submitted via POST method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Collect and sanitize input data
$name    = htmlspecialchars($_POST['name'] ?? '');
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone   = htmlspecialchars($_POST['phone'] ?? '');
$company = htmlspecialchars($_POST['company'] ?? 'N/A');
$service = htmlspecialchars($_POST['service'] ?? 'N/A');
$message = htmlspecialchars($_POST['message'] ?? '');

// Validate required data
if (!$name || !$email || !$message) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields and provide a valid email address.']);
    exit;
}

// Build the email content
$email_content = "You have received a new message from your website contact form.\n\n";
$email_content .= "==============================\n";
$email_content .= "SENDER DETAILS\n";
$email_content .= "==============================\n";
$email_content .= "Name: {$name}\n";
$email_content .= "Email: {$email}\n";
$email_content .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$email_content .= "Company: {$company}\n\n";

$email_content .= "==============================\n";
$email_content .= "INQUIRY DETAILS\n";
$email_content .= "==============================\n";
$email_content .= "Service Needed: {$service}\n\n";
$email_content .= "Message:\n{$message}\n";

// Email headers (Using the exact same working configuration as quote form)
$headers  = "From: noreply@on3-step.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
if (mail($to, $subject, $email_content, $headers)) {
    ob_end_clean();
    echo json_encode(['success' => true, 'message' => "Thank You {$name}! Your message has been sent."]);
} else {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Failed to send your message. Please try again later.']);
}
?>