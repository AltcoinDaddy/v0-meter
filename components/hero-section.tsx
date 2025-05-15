"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuoteRequestModal from "@/components/quote-request-modal"

export default function HeroSection() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Powering Nigeria with <span className="text-primary">Made in Nigeria</span> Metering Solutions
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Unistar Hi-Tech Systems Limited is Nigeria&apos;s leading manufacturer of electric prepaid meters,
                serving the nation&apos;s power sector since 2003.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/products">
                <Button size="lg" className="px-8">
                  Explore Our Products
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8" onClick={() => setQuoteModalOpen(true)}>
                Request a Quote
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl bg-white p-6">
              {/* Use regular img tag for better compatibility */}
              <img
                src="/images/three-phase-meter.png"
                alt="Unistar Three Phase Prepaid Electricity Meter"
                className="object-contain h-full w-full"
                style={{ maxHeight: "400px" }}
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium flex items-center whitespace-nowrap">
                  <img
                    src="/images/nigerian-flag-with-coa.png"
                    alt="Nigerian Flag with Coat of Arms"
                    className="h-5 w-auto mr-2"
                  />
                  Proudly Made in Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  )
}
