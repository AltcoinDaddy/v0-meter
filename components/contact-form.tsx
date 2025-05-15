"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Loader2, Send } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string },
  ) => {
    const { name, value } = "target" in e ? e.target : e
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState({ status: "submitting", message: "" })

    // Simulate form submission with a delay
    setTimeout(() => {
      // Form validation would go here in a real implementation
      setFormState({
        status: "success",
        message: "Thank you for your message! We'll get back to you shortly.",
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      {formState.status === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-500 mb-6">{formState.message}</p>
          <Button onClick={() => setFormState({ status: "idle", message: "" })}>Send Another Message</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={formState.status === "submitting"}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={formState.status === "submitting"}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
                disabled={formState.status === "submitting"}
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
                disabled={formState.status === "submitting"}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="inquiryType" className="text-sm font-medium">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <Select
              value={formData.inquiryType}
              onValueChange={(value) => handleChange({ name: "inquiryType", value })}
              disabled={formState.status === "submitting"}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="sales">Sales Inquiry</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                <SelectItem value="careers">Careers</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your inquiry"
              required
              disabled={formState.status === "submitting"}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your inquiry..."
              rows={5}
              required
              disabled={formState.status === "submitting"}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="privacy-policy"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                required
              />
              <label htmlFor="privacy-policy" className="text-sm text-gray-500">
                I agree to the{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and consent to being contacted regarding my inquiry.
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={formState.status === "submitting"}>
            {formState.status === "submitting" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          {formState.status === "error" && (
            <div className="p-3 bg-red-50 text-red-700 rounded-md text-center">
              {formState.message || "There was an error sending your message. Please try again."}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            Fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </form>
      )}
    </div>
  )
}

import Link from "next/link"
