import { ContactMessage } from '@shared/schema';
import nodemailer from 'nodemailer';

// Check if email credentials are available
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail service
  auth: {
    user: emailUser || '',  // Use the environment variable 
    pass: emailPassword || ''  // Use the environment variable
  }
});

// Function to check if we have valid email configuration
const hasValidEmailConfig = (): boolean => {
  return Boolean(emailUser && emailPassword);
};

/**
 * Send confirmation email to user when they submit contact form
 */
export async function sendContactConfirmationEmail(contactMessage: ContactMessage): Promise<boolean> {
  try {
    // Log email that will be sent
    console.log('----------------------------------');
    console.log('SENDING CONFIRMATION EMAIL TO USER:');
    console.log(`From: ${emailUser}`);
    console.log(`To: ${contactMessage.email}`);
    
    // Email content
    const mailOptions = {
      from: emailUser,
      to: contactMessage.email,
      subject: 'Thanks for your interest in JSS Polytechnic For Women',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0A2463; color: white; padding: 20px; text-align: center;">
            <h2>JSS Polytechnic For Women</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
            <p>Dear ${contactMessage.firstName} ${contactMessage.lastName},</p>
            <p>Thank you for showing interest in JSS Polytechnic For Women. Our team will get in touch with you shortly.</p>
            <p>We've received your message regarding "${contactMessage.subject}" and appreciate you reaching out to us.</p>
            <p>If you have any urgent questions, please feel free to call our admissions office.</p>
            <p>Warm regards,<br>JSS Polytechnic For Women Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666;">
            <p>This is an automated email, please do not reply directly to this message.</p>
          </div>
        </div>
      `
    };
    
    console.log('----------------------------------');
    
    // Try to send the email if we have valid configuration
    if (hasValidEmailConfig()) {
      try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", contactMessage.email);
      } catch (error) {
        console.error("Error sending email:", error);
        return false;
      }
    } else {
      console.log("Email credentials not configured. Email not sent.");
    }
    
    return true;
  } catch (error) {
    console.error('Error while sending confirmation email:', error);
    return false;
  }
}

/**
 * Send notification email to admin when a new contact form is submitted
 */
export async function sendAdminNotificationEmail(contactMessage: ContactMessage): Promise<boolean> {
  try {
    // Log email that will be sent to admin
    console.log('----------------------------------');
    console.log('SENDING ADMIN NOTIFICATION EMAIL:');
    console.log(`From: ${emailUser}`);
    console.log(`To: ${emailUser}`);
    
    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailUser, // Send admin notifications to the same email address
      subject: `New Contact Form Submission - ${contactMessage.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #D8315B; color: white; padding: 20px; text-align: center;">
            <h2>New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
            <h3>Contact Details:</h3>
            <p><strong>Name:</strong> ${contactMessage.firstName} ${contactMessage.lastName}</p>
            <p><strong>Email:</strong> ${contactMessage.email}</p>
            <p><strong>Subject:</strong> ${contactMessage.subject}</p>
            <h3>Message:</h3>
            <p>${contactMessage.message}</p>
            <p><em>This message was received on: ${new Date(contactMessage.createdAt).toLocaleString()}</em></p>
          </div>
        </div>
      `
    };
    
    console.log('----------------------------------');
    
    // Try to send the email if we have valid configuration
    if (hasValidEmailConfig()) {
      try {
        await transporter.sendMail(mailOptions);
        console.log("Admin notification email sent successfully to:", emailUser);
      } catch (error) {
        console.error("Error sending admin notification email:", error);
        return false;
      }
    } else {
      console.log("Email credentials not configured. Admin notification email not sent.");
    }
    
    return true;
  } catch (error) {
    console.error('Error while sending admin notification email:', error);
    return false;
  }
}

// Email Sending Configuration:
// - Actual email sending is enabled when EMAIL_USER and EMAIL_PASSWORD environment variables are set
// - For Gmail, EMAIL_PASSWORD should be an App Password (not your regular account password)
// - Generate App Password: Google Account → Security → 2-Step Verification → App passwords
// - If email is not sending, check Gmail settings to allow less secure apps or use App Passwords