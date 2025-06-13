"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions/email-actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const formData = new FormData()
      formData.append("email", email)

      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        setStatus("success")
        setEmail("")
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle")
        }, 5000)
      } else {
        setStatus("error")
        setErrorMessage(result.message || "Failed to subscribe. Please try again.")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
            <p className="text-gray-500 md:text-xl">
              Subscribe to our newsletter to receive the latest updates on our products, industry news, and special
              offers.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "submitting" || status === "success"}
                  className="w-full"
                />
              </div>
              <Button type="submit" disabled={status === "submitting" || status === "success"}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            {status === "success" && (
              <div className="p-3 bg-green-50 text-green-700 rounded-md text-center">
                Thank you for subscribing to our newsletter!
              </div>
            )}

            {status === "error" && (
              <div className="p-3 bg-red-50 text-red-700 rounded-md flex items-center gap-2">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center">
              By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
