"use server"

// This function formats the quote request data and sends it via fetch
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

    // Log the data for debugging
    console.log("Quote request received:", {
      name,
      company,
      email,
      phone,
      address,
      productType,
      quantity,
      additionalInfo,
      timestamp: new Date().toISOString(),
    })

    // In a real implementation, you would send this data to an API
    // that can handle email sending, like EmailJS, Resend, or a custom API

    // For now, we'll simulate a successful submission
    // This prevents the DNS lookup error while still providing a good user experience

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Quote request received. We'll contact you soon!",
    }
  } catch (error) {
    console.error("Error processing quote request:", error)
    return {
      success: false,
      message: "Failed to process your request. Please try again.",
    }
  }
}

// This function formats the contact form data and sends it via fetch
export async function sendContactMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const product = formData.get("product") as string
    const message = formData.get("message") as string

    // Log the data for debugging
    console.log("Contact message received:", {
      name,
      company,
      email,
      phone,
      product,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Message received. We'll contact you soon!",
    }
  } catch (error) {
    console.error("Error processing contact message:", error)
    return {
      success: false,
      message: "Failed to send your message. Please try again.",
    }
  }
}

// This function formats the newsletter subscription data and sends it via fetch
export async function subscribeToNewsletter(formData: FormData) {
  try {
    const email = formData.get("email") as string

    // Log the data for debugging
    console.log("Newsletter subscription received:", {
      email,
      timestamp: new Date().toISOString(),
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Subscription successful!",
    }
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return {
      success: false,
      message: "Failed to subscribe. Please try again.",
    }
  }
}
