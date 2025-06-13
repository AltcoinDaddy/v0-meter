import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Unistar Hi-Tech Systems</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                We're here to answer your questions and provide the support you need for all your metering requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-500">+234 8033441242</p>
                      <p className="text-gray-500">+234 8129901942</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-500">info@unistarhi-tech.com</p>
                     
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Location</h3>
                      <p className="text-gray-500">KM 16, Ikorodu Road, Ojota,</p>
                      <p className="text-gray-500">Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-500">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-500">Sunday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="p-3 rounded-full bg-gray-100 hover:bg-primary/10 transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-gray-600 hover:text-primary" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="p-3 rounded-full bg-gray-100 hover:bg-primary/10 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-gray-600 hover:text-primary" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="p-3 rounded-full bg-gray-100 hover:bg-primary/10 transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-gray-600 hover:text-primary" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="p-3 rounded-full bg-gray-100 hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>

              {/* Map */}
              <Card className="overflow-hidden border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image src="https://i.ibb.co/bgpGP7wR/Assembly-Packing-Line-1.png" alt="Office Location Map" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-md">
                      <p className="text-sm font-medium">Unistar Hi-Tech Systems Limited</p>
                      <p className="text-xs text-gray-500">Ojota, Lagos State</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
   
      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Find quick answers to common questions about our products and services.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">What are your business hours?</h3>
                <p className="text-gray-500 mt-2">
                  Our offices are open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM.
                  We are closed on Sundays and public holidays.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">How can I request a product demonstration?</h3>
                <p className="text-gray-500 mt-2">
                  You can request a product demonstration by filling out our contact form, calling our sales team, or
                  sending an email to sales@unistar-hitech.com.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Do you offer technical support?</h3>
                <p className="text-gray-500 mt-2">
                  Yes, we provide comprehensive technical support for all our products. You can reach our support team
                  at support@unistar-hitech.com or call our technical support hotline at +234 123 456 7893.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">What is the warranty period for your products?</h3>
                <p className="text-gray-500 mt-2">
                  Our standard warranty period is 2 years from the date of purchase. Extended warranty options are also
                  available. Please contact our sales team for more information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Do you offer installation services?</h3>
                <p className="text-gray-500 mt-2">
                  Yes, we provide professional installation services for all our products. Our team of experienced
                  technicians ensures proper installation and configuration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">How can I become a distributor?</h3>
                <p className="text-gray-500 mt-2">
                  If you're interested in becoming a distributor, please send your business profile and inquiry to
                  partnerships@unistar-hitech.com. Our business development team will review your application and get
                  back to you.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/faq">
              <Button variant="outline" className="gap-2">
                View All FAQs <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Power Nigeria's Future?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
                Join the thousands of satisfied customers who trust Unistar Hi-Tech Systems for their metering needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="px-8">
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:text-primary hover:bg-white"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
