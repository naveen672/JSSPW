<?php
/**
 * Email Service for sending emails
 */

class EmailService {
    private $fromEmail;
    private $siteName;
    private $adminEmail;
    
    /**
     * Constructor - initializes email settings
     */
    public function __construct() {
        $this->fromEmail = EMAIL_FROM;
        $this->siteName = SITE_NAME;
        $this->adminEmail = ADMIN_EMAIL;
    }
    
    /**
     * Send contact confirmation email to user
     */
    public function sendContactConfirmation($contactMessage) {
        $to = $contactMessage['email'];
        $subject = "{$this->siteName} - Thank you for your message";
        
        $message = "
        <html>
        <head>
            <title>Thank you for contacting {$this->siteName}</title>
        </head>
        <body>
            <h2>Thank you for contacting {$this->siteName}</h2>
            <p>Dear {$contactMessage['name']},</p>
            <p>We have received your message and will get back to you as soon as possible.</p>
            <p>Here's a copy of your message:</p>
            <div style='background-color: #f5f5f5; padding: 15px; border-radius: 5px;'>
                <p>{$contactMessage['message']}</p>
            </div>
            <p>Best regards,<br>The {$this->siteName} Team</p>
        </body>
        </html>
        ";
        
        // Set content-type header for sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: {$this->siteName} <{$this->fromEmail}>" . "\r\n";
        
        // For development, just log the email
        if (defined('DISPLAY_ERRORS') && DISPLAY_ERRORS) {
            error_log("Contact Confirmation Email would be sent to: $to");
            error_log("Subject: $subject");
            error_log("Message: $message");
            error_log("Headers: $headers");
            return true;
        }
        
        // Send email
        return mail($to, $subject, $message, $headers);
    }
    
    /**
     * Send notification email to admin
     */
    public function sendAdminNotification($contactMessage) {
        $to = $this->adminEmail;
        $subject = "New Contact Message - {$this->siteName}";
        
        $message = "
        <html>
        <head>
            <title>New Contact Message</title>
        </head>
        <body>
            <h2>New Contact Message Received</h2>
            <p>A new contact message has been submitted on the {$this->siteName} website.</p>
            <table style='border-collapse: collapse; width: 100%;'>
                <tr>
                    <th style='border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;'>Name</th>
                    <td style='border: 1px solid #ddd; padding: 8px;'>{$contactMessage['name']}</td>
                </tr>
                <tr>
                    <th style='border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;'>Email</th>
                    <td style='border: 1px solid #ddd; padding: 8px;'>{$contactMessage['email']}</td>
                </tr>";
                
        if (!empty($contactMessage['phone'])) {
            $message .= "
                <tr>
                    <th style='border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;'>Phone</th>
                    <td style='border: 1px solid #ddd; padding: 8px;'>{$contactMessage['phone']}</td>
                </tr>";
        }
        
        $message .= "
                <tr>
                    <th style='border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;'>Message</th>
                    <td style='border: 1px solid #ddd; padding: 8px;'>{$contactMessage['message']}</td>
                </tr>
                <tr>
                    <th style='border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2;'>Date/Time</th>
                    <td style='border: 1px solid #ddd; padding: 8px;'>{$contactMessage['createdAt']}</td>
                </tr>
            </table>
            <p>You can respond directly to this email to reply to the sender.</p>
        </body>
        </html>
        ";
        
        // Set content-type header for sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: {$this->siteName} Website <{$this->fromEmail}>" . "\r\n";
        $headers .= "Reply-To: {$contactMessage['email']}" . "\r\n";
        
        // For development, just log the email
        if (defined('DISPLAY_ERRORS') && DISPLAY_ERRORS) {
            error_log("Admin Notification Email would be sent to: $to");
            error_log("Subject: $subject");
            error_log("Message: $message");
            error_log("Headers: $headers");
            return true;
        }
        
        // Send email
        return mail($to, $subject, $message, $headers);
    }
}