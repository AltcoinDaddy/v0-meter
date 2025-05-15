import Link from "next/link"
import { Button } from "@/components/ui/button"
import QuoteRequestButton from "@/components/quote-request-button"

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Power Your Business?</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
              Get in touch with our team to discuss your metering requirements and receive a customized quotation.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <QuoteRequestButton variant="secondary" size="lg" className="px-8">
              Request a Quote
            </QuoteRequestButton>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 border-white text-white hover:text-primary hover:bg-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
