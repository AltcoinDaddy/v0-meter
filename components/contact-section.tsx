"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/utils/emailjs"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [selectedProduct, setSelectedProduct] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string },
  ) => {
    const { name, value } = "target" in e ? e.target : e
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        company: formData.company || "Not provided",
        email: formData.email,
        phone: formData.phone || "Not provided",
        product_interest: selectedProduct || "Not specified",
        message: formData.message,
        to_email: "iinfounistar@gmail.com", // Updated email address
      }

      // Send email using EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, templateParams)

      setFormStatus("success")

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
        setSelectedProduct("")
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with our team to discuss your metering requirements or request more information about our
              products.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-12">
          {/* Get In Touch and Contact Form side by side */}
          <div className="grid gap-8 lg:grid-cols-2 mb-8">
            {/* Get In Touch */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-500">+234 8033441242</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-500">info@unistarhi-tech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office Location</h4>
                    <p className="text-gray-500">KM 16, Ikorodu Road, Ojota</p>
                    <p className="text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-gray-500">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-500">Sunday - Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 123 456 7890"
                      disabled={formStatus === "submitting" || formStatus === "success"}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="product" className="text-sm font-medium">
                    Product Interest
                  </label>
                  <Select
                    value={selectedProduct}
                    onValueChange={setSelectedProduct}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-phase">Single-Phase Meters</SelectItem>
                      <SelectItem value="three-phase">Three-Phase Meters</SelectItem>
                      <SelectItem value="split">Split Prepayment Meters</SelectItem>
                      <SelectItem value="keypad">Keypad Prepayment Meters</SelectItem>
                      <SelectItem value="commercial">Commercial/Industrial Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                >
                  {formStatus === "idle" && (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                  {formStatus === "submitting" && "Sending..."}
                  {formStatus === "success" && (
                    <>
                      Message Sent <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  )}
                  {formStatus === "error" && "Try Again"}
                </Button>

                {formStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md text-center">
                    Thank you for your message! We'll get back to you shortly.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p>{errorMessage || "There was an error sending your message. Please try again."}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
