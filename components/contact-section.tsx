"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [selectedProduct, setSelectedProduct] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        const form = e.target as HTMLFormElement
        form.reset()
        setSelectedProduct("")
      }, 3000)
    }, 1500)
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
                    <p className="text-gray-500">+234 123 456 7890</p>
                    <p className="text-gray-500">+234 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-500">info@unistar-hitech.com</p>
                    <p className="text-gray-500">sales@unistar-hitech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office Location</h4>
                    <p className="text-gray-500">123 Industrial Avenue</p>
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
                    <p className="text-gray-500">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-500">Sunday: Closed</p>
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
                  <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md text-center">
                    There was an error sending your message. Please try again.
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
