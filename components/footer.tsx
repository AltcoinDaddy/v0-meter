"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { EMAILJS_SERVICE_ID, EMAILJS_NEWSLETTER_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/utils/emailjs"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscriptionStatus("submitting")

    try {
      // Prepare template parameters
      const templateParams = {
        email: email,
        subscription_date: new Date().toLocaleDateString(),
        to_email: "iinfounistar@gmail.com", // Same email address as other forms
      }

      // Send email using EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NEWSLETTER_TEMPLATE_ID, templateParams)

      setSubscriptionStatus("success")
      setEmail("") // Clear the input

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setSubscriptionStatus("error")
      setErrorMessage("Failed to subscribe. Please try again.")

      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus("idle")
        setErrorMessage("")
      }, 3000)
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/RkNpdNRs/LOGO.png"
                alt="Unistar Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="font-bold text-white">Unistar Hi-Tech Systems</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Nigeria&apos;s leading manufacturer of electric prepaid meters since 2003, serving the nation&apos;s power
              sector with quality and innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-400 hover:text-white text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-gray-400 hover:text-white text-sm">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-400 hover:text-white text-sm">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>KM 16, Ikorodu Road, Ojota</p>
              <p>Lagos, Nigeria</p>
              <p className="pt-2">
                <strong className="text-white">Phone:</strong> +234 8033441242
              </p>
              <p>
                <strong className="text-white">Email:</strong> iinfounistar@gmail.com
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                required
                disabled={subscriptionStatus === "submitting" || subscriptionStatus === "success"}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={subscriptionStatus === "submitting" || subscriptionStatus === "success"}
              >
                {subscriptionStatus === "idle" && "Subscribe"}
                {subscriptionStatus === "submitting" && (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                )}
                {subscriptionStatus === "success" && (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Subscribed!
                  </>
                )}
                {subscriptionStatus === "error" && "Try Again"}
              </Button>

              {subscriptionStatus === "success" && (
                <div className="text-green-400 text-xs text-center">Thank you for subscribing to our newsletter!</div>
              )}

              {subscriptionStatus === "error" && (
                <div className="text-red-400 text-xs text-center flex items-center justify-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Unistar Hi-Tech Systems Limited. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Warranty Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
