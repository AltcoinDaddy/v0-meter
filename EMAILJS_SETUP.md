# EmailJS Setup Guide

This guide will help you set up EmailJS to handle form submissions from your website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes 200 emails per month, which should be sufficient for most small businesses

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service (e.g., "Unistar Contact Forms")
6. Note down the **Service ID** for later use

## Step 3: Create Email Templates

You'll need to create three email templates:

### Quote Request Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it "Quote Request"
4. Design your template with the following variables:
   - `{{name}}` - Customer's name
   - `{{company}}` - Company name
   - `{{email}}` - Email address
   - `{{phone}}` - Phone number
   - `{{address}}` - Delivery address
   - `{{product_type}}` - Product type
   - `{{quantity}}` - Quantity
   - `{{additional_info}}` - Additional information
5. Example template:
   \`\`\`html
   <h2>New Quote Request</h2>
   <p><strong>Date:</strong> {{subscription_date}}</p>
   <hr />
   <h3>Customer Information:</h3>
   <p><strong>Name:</strong> {{name}}</p>
   <p><strong>Company:</strong> {{company}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Address:</strong> {{address}}</p>
   <hr />
   <h3>Product Information:</h3>
   <p><strong>Product Type:</strong> {{product_type}}</p>
   <p><strong>Quantity:</strong> {{quantity}}</p>
   <p><strong>Additional Information:</strong> {{additional_info}}</p>
   \`\`\`
6. Save the template and note down the **Template ID**

### Contact Form Template

1. Create another template named "Contact Form"
2. Design it with these variables:
   - `{{name}}` - Customer's name
   - `{{company}}` - Company name
   - `{{email}}` - Email address
   - `{{phone}}` - Phone number
   - `{{product_interest}}` - Product interest
   - `{{message}}` - Message
3. Example template:
   \`\`\`html
   <h2>New Contact Form Submission</h2>
   <p><strong>Date:</strong> {{subscription_date}}</p>
   <hr />
   <h3>Contact Information:</h3>
   <p><strong>Name:</strong> {{name}}</p>
   <p><strong>Company:</strong> {{company}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   <p><strong>Phone:</strong> {{phone}}</p>
   <p><strong>Product Interest:</strong> {{product_interest}}</p>
   <hr />
   <h3>Message:</h3>
   <p>{{message}}</p>
   \`\`\`
4. Save the template and note down the **Template ID**

### Newsletter Template

1. Create a third template named "Newsletter Subscription"
2. Design it with these variables:
   - `{{email}}` - Subscriber's email
   - `{{subscription_date}}` - Date of subscription
3. Example template:
   \`\`\`html
   <h2>New Newsletter Subscription</h2>
   <p><strong>Date:</strong> {{subscription_date}}</p>
   <p><strong>Email:</strong> {{email}}</p>
   \`\`\`
4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Website Configuration

1. Open the file `utils/emailjs.ts` in your project
2. Replace the placeholder values with your actual EmailJS credentials:
   \`\`\`typescript
   export const EMAILJS_SERVICE_ID = "your_service_id" // Replace with your EmailJS service ID
   export const EMAILJS_QUOTE_TEMPLATE_ID = "your_quote_template_id" // Replace with your quote template ID
   export const EMAILJS_CONTACT_TEMPLATE_ID = "your_contact_template_id" // Replace with your contact template ID
   export const EMAILJS_NEWSLETTER_TEMPLATE_ID = "your_newsletter_template_id" // Replace with your newsletter template ID
   export const EMAILJS_PUBLIC_KEY = "your_public_key" // Replace with your EmailJS public key
   \`\`\`

## Step 6: Install EmailJS Package

Run the following command in your project directory:

\`\`\`bash
npm install @emailjs/browser
\`\`\`

## Step 7: Test Your Forms

1. Deploy your website or run it locally
2. Submit test forms to ensure emails are being sent correctly
3. Check your inbox for the test submissions

## Troubleshooting

- If emails aren't being received, check your spam folder
- Verify that your EmailJS service is connected properly
- Ensure your template IDs and service ID are correct
- Check the browser console for any JavaScript errors

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration Guide](https://www.emailjs.com/docs/examples/reactjs/)
