<?php
/**
 * Email Utility Functions
 */

// Include config file
require_once 'config.php';

/**
 * Send confirmation email to user when they submit contact form
 * 
 * @param array $contactMessage Contact message data
 * @return bool True if email sent successfully, false otherwise
 */
function sendContactConfirmationEmail($contactMessage) {
    $to = $contactMessage['email'];
    $subject = "Thank you for contacting " . SITE_NAME;
    $from = EMAIL_FROM;
    
    // Headers
    $headers = "From: " . SITE_NAME . " <" . $from . ">\r\n";
    $headers .= "Reply-To: " . ADMIN_EMAIL . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    
    // Message body
    $body = "<html><body>";
    $body .= "<h2>Thank you for contacting us, " . htmlspecialchars($contactMessage['name']) . "!</h2>";
    $body .= "<p>We have received your message and will get back to you as soon as possible.</p>";
    $body .= "<p><strong>Your message details:</strong></p>";
    $body .= "<p><strong>Name:</strong> " . htmlspecialchars($contactMessage['name']) . "</p>";
    $body .= "<p><strong>Email:</strong> " . htmlspecialchars($contactMessage['email']) . "</p>";
    
    if (!empty($contactMessage['phone'])) {
        $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($contactMessage['phone']) . "</p>";
    }
    
    $body .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($contactMessage['message'])) . "</p>";
    $body .= "<p><strong>Sent on:</strong> " . date('F j, Y, g:i a', strtotime($contactMessage['createdAt'])) . "</p>";
    $body .= "<hr>";
    $body .= "<p>This is an automated message from the " . SITE_NAME . " website.</p>";
    $body .= "</body></html>";
    
    // Send email
    return mail($to, $subject, $body, $headers);
}

/**
 * Send notification email to admin when a new contact form is submitted
 * 
 * @param array $contactMessage Contact message data
 * @return bool True if email sent successfully, false otherwise
 */
function sendAdminNotificationEmail($contactMessage) {
    $to = ADMIN_EMAIL;
    $subject = "New Contact Form Submission - " . SITE_NAME;
    $from = EMAIL_FROM;
    
    // Headers
    $headers = "From: " . SITE_NAME . " Website <" . $from . ">\r\n";
    $headers .= "Reply-To: " . $contactMessage['email'] . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    
    // Message body
    $body = "<html><body>";
    $body .= "<h2>New Contact Form Submission</h2>";
    $body .= "<p>A new message has been submitted through the contact form on the " . SITE_NAME . " website.</p>";
    $body .= "<p><strong>Contact details:</strong></p>";
    $body .= "<p><strong>Name:</strong> " . htmlspecialchars($contactMessage['name']) . "</p>";
    $body .= "<p><strong>Email:</strong> " . htmlspecialchars($contactMessage['email']) . "</p>";
    
    if (!empty($contactMessage['phone'])) {
        $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($contactMessage['phone']) . "</p>";
    }
    
    $body .= "<p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($contactMessage['message'])) . "</p>";
    $body .= "<p><strong>Sent on:</strong> " . date('F j, Y, g:i a', strtotime($contactMessage['createdAt'])) . "</p>";
    $body .= "<hr>";
    $body .= "<p>You can respond directly to this email to reply to the sender.</p>";
    $body .= "</body></html>";
    
    // Send email
    return mail($to, $subject, $body, $headers);
}