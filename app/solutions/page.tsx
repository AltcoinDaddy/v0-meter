import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Solutions</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive metering solutions designed to meet the diverse needs of Nigeria&apos;s energy sector.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#products">
                <Button size="lg" className="px-8">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Metering Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From residential to industrial applications, our solutions are designed to meet the diverse needs of
                Nigeria&apos;s energy sector.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M19 7.5v9l-3.5-2-3.5 2-3.5-2-3.5 2v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  <path d="M2 10h3" />
                  <path d="M2 14h3" />
                  <path d="M19 10h3" />
                  <path d="M19 14h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Prepaid Metering</h3>
              <p className="text-gray-500">
                STS-certified prepaid meters that enable consumers to manage their electricity consumption effectively.
              </p>
              <Link href="/products#prepaid">
                <Button variant="link" className="gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Commercial Solutions</h3>
              <p className="text-gray-500">
                Advanced metering solutions for commercial and industrial applications with enhanced monitoring
                capabilities.
              </p>
              <Link href="/products#commercial">
                <Button variant="link" className="gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 7V2" />
                  <path d="M15 7V2" />
                  <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Smart Metering</h3>
              <p className="text-gray-500">
                Next-generation smart meters with advanced connectivity and data management features.
              </p>
              <Link href="/products#smart">
                <Button variant="link" className="gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div id="products">
        <FeaturedProducts />
      </div>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Upgrade Your Metering Infrastructure?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our team to discuss your specific requirements and discover how our solutions can benefit your
                operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/manufacturing">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-white hover:text-primary hover:bg-white"
                >
                  Learn About Manufacturing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
