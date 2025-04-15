import { ContactMessage } from '@shared/schema';

/**
 * Simple email service that logs email information
 * In a production environment, this would be replaced with actual email sending functionality
 */
export async function sendContactConfirmationEmail(contactMessage: ContactMessage): Promise<boolean> {
  try {
    // Log email that would be sent
    console.log('----------------------------------');
    console.log('EMAIL WOULD BE SENT:');
    console.log(`From: naveenravi.ch@gmail.com`);
    console.log(`To: ${contactMessage.email}`);
    console.log(`Subject: Thanks for your interest in JSS Polytechnic For Women`);
    console.log(`\nDear ${contactMessage.firstName} ${contactMessage.lastName},\n`);
    console.log(`Thank you for showing interest in JSS Polytechnic For Women. Our team will get in touch with you shortly.\n`);
    console.log(`We've received your message regarding "${contactMessage.subject}" and appreciate you reaching out to us.\n`);
    console.log(`If you have any urgent questions, please feel free to call our admissions office.\n`);
    console.log(`Warm regards,\nJSS Polytechnic For Women Team`);
    console.log('----------------------------------');
    
    // Simulate a successful email send
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
    // Log email that would be sent to admin
    console.log('----------------------------------');
    console.log('ADMIN NOTIFICATION EMAIL:');
    console.log(`From: naveenravi.ch@gmail.com`);
    console.log(`To: naveenravi.ch@gmail.com`);
    console.log(`Subject: New Contact Form Submission - ${contactMessage.subject}`);
    console.log(`\nA new contact form has been submitted:\n`);
    console.log(`Name: ${contactMessage.firstName} ${contactMessage.lastName}`);
    console.log(`Email: ${contactMessage.email}`);
    console.log(`Subject: ${contactMessage.subject}`);
    console.log(`Message: ${contactMessage.message}\n`);
    console.log(`This message was received on: ${contactMessage.createdAt}`);
    console.log('----------------------------------');
    
    // Simulate a successful email send
    return true;
  } catch (error) {
    console.error('Error while sending admin notification email:', error);
    return false;
  }
}