"use server"

import nodemailer from "nodemailer"

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "your-app-password",
  },
})

const RECIPIENT_EMAIL = "Israel.iszy2336@gmail.com"

export async function sendQuoteRequest(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const productType = formData.get("productType") as string
    const quantity = formData.get("quantity") as string
    const additionalInfo = formData.get("additionalInfo") as string

    // Create HTML content for the email
    const htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr />
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address || "Not provided"}</p>
      <hr />
      <h3>Product Information:</h3>
      <p><strong>Product Type:</strong> ${productType}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Additional Information:</strong> ${additionalInfo || "None provided"}</p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: RECIPIENT_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: htmlContent,
      replyTo: email,
    })

    return { success: true, message: "Quote request sent successfully" }
  } catch (error) {
    console.error("Error sending quote request email:", error)
    return { success: false, message: "Failed to send quote request" }
  }
}

export async function sendContactMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const product = formData.get("product") as string
    const message = formData.get("message") as string

    // Create HTML content for the email
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <hr />
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Product Interest:</strong> ${product || "Not specified"}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message}</p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: RECIPIENT_EMAIL,
      subject: `New Contact Form Message from ${name}`,
      html: htmlContent,
      replyTo: email,
    })

    return { success: true, message: "Message sent successfully" }
  } catch (error) {
    console.error("Error sending contact form email:", error)
    return { success: false, message: "Failed to send message" }
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    // Create HTML content for the email
    const htmlContent = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Email:</strong> ${email}</p>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: RECIPIENT_EMAIL,
      subject: "New Newsletter Subscription",
      html: htmlContent,
    })

    return { success: true, message: "Subscription successful" }
  } catch (error) {
    console.error("Error sending newsletter subscription email:", error)
    return { success: false, message: "Failed to subscribe" }
  }
}
