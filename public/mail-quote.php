<?php
ob_start();
header('Content-Type: application/json');

// Set your recipient email address here
$to = "desmonlatandos@gmail.com";

// Set the email subject
$subject = "New Quote Request from Cargonz Website";

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

// Quote specific data
$origin       = htmlspecialchars($_POST['origin'] ?? 'N/A');
$destination  = htmlspecialchars($_POST['destination'] ?? 'N/A');
$transport    = htmlspecialchars($_POST['transport'] ?? 'N/A');
$incoterms    = htmlspecialchars($_POST['incoterms'] ?? 'N/A');
$date         = htmlspecialchars($_POST['date'] ?? 'N/A');

$commodity    = htmlspecialchars($_POST['commodity'] ?? 'N/A');
$weight       = htmlspecialchars($_POST['weight'] ?? 'N/A');
$length       = htmlspecialchars($_POST['length'] ?? 'N/A');
$width        = htmlspecialchars($_POST['width'] ?? 'N/A');
$height       = htmlspecialchars($_POST['height'] ?? 'N/A');

$instructions = htmlspecialchars($_POST['instructions'] ?? 'N/A');

// Validate required data
if (!$name || !$email) {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Please complete your name and provide a valid email address.']);
    exit;
}

// Build the email content
$email_content = "You have received a new Quote Request from your website.\n\n";
$email_content .= "==============================\n";
$email_content .= "CONTACT DETAILS\n";
$email_content .= "==============================\n";
$email_content .= "Name: {$name}\n";
$email_content .= "Email: {$email}\n";
$email_content .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$email_content .= "Company: {$company}\n\n";

$email_content .= "==============================\n";
$email_content .= "SHIPMENT ROUTE\n";
$email_content .= "==============================\n";
$email_content .= "Origin: {$origin}\n";
$email_content .= "Destination: {$destination}\n";
$email_content .= "Transport Mode: {$transport}\n";
$email_content .= "Incoterms: {$incoterms}\n";
$email_content .= "Est. Date: {$date}\n\n";

$email_content .= "==============================\n";
$email_content .= "CARGO DETAILS\n";
$email_content .= "==============================\n";
$email_content .= "Commodity: {$commodity}\n";
$email_content .= "Weight: {$weight} kg\n";
$email_content .= "Dimensions: {$length} cm (L) x {$width} cm (W) x {$height} cm (H)\n\n";

$email_content .= "==============================\n";
$email_content .= "INSTRUCTIONS\n";
$email_content .= "==============================\n";
$email_content .= "{$instructions}\n";

// Email headers (Using generic noreply for safer cPanel delivery, reply-to set to user's email)
$headers  = "From: noreply@on3-step.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($to, $subject, $email_content, $headers)) {
    ob_end_clean();
    echo json_encode(['success' => true, 'message' => "Thank You {$name}! Your quote request has been sent."]);
} else {
    ob_end_clean();
    echo json_encode(['success' => false, 'message' => 'Failed to send your request. Please try again later.']);
}
?>