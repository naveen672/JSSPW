<?php
require_once 'config.php';

class Email {
    /**
     * Send an email
     * @param string $to
     * @param string $subject
     * @param string $message
     * @param string $from
     * @param string $fromName
     * @return boolean Success status
     */
    public function send($to, $subject, $message, $from = null, $fromName = null) {
        if (!$from) {
            $from = EMAIL_FROM;
        }
        
        if (!$fromName) {
            $fromName = EMAIL_FROM_NAME;
        }
        
        // Headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: " . $fromName . " <" . $from . ">" . "\r\n";
        
        // Send email
        return mail($to, $subject, $message, $headers);
    }
    
    /**
     * Send contact form confirmation email to user
     * @param array $contactData
     * @return boolean Success status
     */
    public function sendContactConfirmationEmail($contactData) {
        $to = $contactData['email'];
        $subject = "Thank you for contacting " . SITE_NAME;
        
        $message = $this->getContactConfirmationTemplate($contactData);
        
        return $this->send($to, $subject, $message);
    }
    
    /**
     * Send notification email to admin when a new contact form is submitted
     * @param array $contactData
     * @return boolean Success status
     */
    public function sendAdminNotificationEmail($contactData) {
        $to = ADMIN_EMAIL;
        $subject = "New contact form submission on " . SITE_NAME;
        
        $message = $this->getAdminNotificationTemplate($contactData);
        
        return $this->send($to, $subject, $message);
    }
    
    /**
     * Get contact confirmation email template
     * @param array $contactData
     * @return string HTML email content
     */
    private function getContactConfirmationTemplate($contactData) {
        $name = htmlspecialchars($contactData['name']);
        $email = htmlspecialchars($contactData['email']);
        $subject = htmlspecialchars($contactData['subject']);
        $message = htmlspecialchars($contactData['message']);
        
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #3E92CC; color: white; padding: 10px 20px; text-align: center; }
                .content { padding: 20px; border: 1px solid #ddd; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Thank You for Contacting Us</h2>
                </div>
                <div class="content">
                    <p>Dear ' . $name . ',</p>
                    <p>Thank you for reaching out to JSS Polytechnic for Women. We have received your message and will get back to you as soon as possible.</p>
                    <p>Here is a copy of your message:</p>
                    <p><strong>Subject:</strong> ' . $subject . '</p>
                    <p><strong>Message:</strong><br>' . nl2br($message) . '</p>
                    <p>If you have any further questions, please feel free to contact us.</p>
                    <p>Best regards,<br>JSS Polytechnic for Women</p>
                </div>
                <div class="footer">
                    <p>This is an automated email, please do not reply.</p>
                    <p>&copy; ' . date('Y') . ' JSS Polytechnic for Women. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>';
        
        return $html;
    }
    
    /**
     * Get admin notification email template
     * @param array $contactData
     * @return string HTML email content
     */
    private function getAdminNotificationTemplate($contactData) {
        $name = htmlspecialchars($contactData['name']);
        $email = htmlspecialchars($contactData['email']);
        $subject = htmlspecialchars($contactData['subject']);
        $message = htmlspecialchars($contactData['message']);
        $date = date('Y-m-d H:i:s');
        
        $html = '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #0A2463; color: white; padding: 10px 20px; text-align: center; }
                .content { padding: 20px; border: 1px solid #ddd; }
                .detail { margin-bottom: 10px; }
                .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Contact Form Submission</h2>
                </div>
                <div class="content">
                    <p>A new contact form has been submitted on ' . SITE_NAME . '.</p>
                    <div class="detail"><strong>Date:</strong> ' . $date . '</div>
                    <div class="detail"><strong>Name:</strong> ' . $name . '</div>
                    <div class="detail"><strong>Email:</strong> ' . $email . '</div>
                    <div class="detail"><strong>Subject:</strong> ' . $subject . '</div>
                    <div class="detail"><strong>Message:</strong><br>' . nl2br($message) . '</div>
                    <p>Please login to the admin dashboard to manage this message.</p>
                </div>
                <div class="footer">
                    <p>&copy; ' . date('Y') . ' JSS Polytechnic for Women. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>';
        
        return $html;
    }
}

// Initialize email
$email = new Email();