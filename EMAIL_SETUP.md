# Email Setup Instructions

The current serverless environment doesn't support direct SMTP connections, so we need to use a different approach to send emails from form submissions.

## Option 1: Use EmailJS (Recommended for Quick Setup)

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email template for each form type (quote requests, contact form, newsletter)
3. Update the `email-actions.ts` file to use the EmailJS API

\`\`\`typescript
// Example implementation using EmailJS
import { EmailJSResponseStatus } from '@emailjs/browser';

export async function sendQuoteRequest(formData: FormData) {
  try {
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      // Add other form fields here
    };

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'YOUR_SERVICE_ID',
        template_id: 'YOUR_TEMPLATE_ID',
        user_id: 'YOUR_USER_ID',
        template_params: templateParams,
      }),
    });

    if (response.ok) {
      return { success: true, message: "Quote request sent successfully" };
    } else {
      return { success: false, message: "Failed to send quote request" };
    }
  } catch (error) {
    console.error("Error sending quote request:", error);
    return { success: false, message: "An error occurred" };
  }
}
\`\`\`

## Option 2: Use Resend API

1. Sign up for [Resend](https://resend.com/)
2. Install the SDK: `npm install resend`
3. Update the `email-actions.ts` file:

\`\`\`typescript
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

export async function sendQuoteRequest(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    // Get other form fields

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'Israel.iszy2336@gmail.com',
      subject: `New Quote Request from ${name}`,
      html: `<p>Name: ${name}</p>...`, // Format your email content
    });

    return { success: true, message: "Quote request sent successfully" };
  } catch (error) {
    console.error("Error sending quote request:", error);
    return { success: false, message: "Failed to send quote request" };
  }
}
\`\`\`

## Option 3: Use a Webhook Service

1. Create a webhook in [Zapier](https://zapier.com/) or [Make.com](https://make.com/) that receives form data and sends an email
2. Update the `email-actions.ts` file to send data to your webhook URL

\`\`\`typescript
export async function sendQuoteRequest(formData: FormData) {
  try {
    const formDataObject = Object.fromEntries(formData.entries());
    
    const response = await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      return { success: true, message: "Quote request sent successfully" };
    } else {
      return { success: false, message: "Failed to send quote request" };
    }
  } catch (error) {
    console.error("Error sending quote request:", error);
    return { success: false, message: "Failed to send quote request" };
  }
}
\`\`\`

## Option 4: Use a Custom API Endpoint

If you have access to a server that can send emails, you can create an API endpoint that receives the form data and sends emails using Nodemailer or another library.
