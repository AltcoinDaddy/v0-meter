import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, BarChart3, CheckCircle, Factory, Users } from "lucide-react"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturedProducts from "@/components/featured-products"
import NewsSection from "@/components/news-section"
import ClientLogos from "@/components/client-logos"
import PartnersSection from "@/components/partners-section"
import ContactSection from "@/components/contact-section"
import AboutSection from "@/components/about-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      {/* Value Proposition */}
      <section className="w-full py-4 md:py-8 lg:py-10 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="space-y-1">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                Trusted Since 2003
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Nigeria&apos;s Leading Manufacturer of STS-Certified Electricity Meters
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Providing superior quality products and services with promptness and technical competence to power
                Nigeria&apos;s energy sector.
              </p>
            </div>
            <div className="flex flex-col gap-1 min-[400px]:flex-row">
              <Link href="/products">
                <Button className="px-8">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <StatsSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Unistar Hi-Tech Systems
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our competitive advantages that make us the preferred choice for electricity metering solutions in
                Nigeria.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Local Manufacturing</h3>
                <p className="text-gray-500">Nigerian manufacturing facility reducing import costs and delays</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fully Certified</h3>
                <p className="text-gray-500">Official certifications from all relevant regulatory bodies (NERC, SON)</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">STS Certified</h3>
                <p className="text-gray-500">Full range of STS-certified single and three-phase meters</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Proven Track Record</h3>
                <p className="text-gray-500">Over 1.2 million meters installed nationwide</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Technical Partnership</h3>
                <p className="text-gray-500">Strong partnership with international technology providers</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Pioneer Status</h3>
                <p className="text-gray-500">Nigeria's pioneer in prepaid meter production since 2003</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* About Section */}
      <AboutSection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Recent News */}
      <NewsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Power Nigeria&apos;s Future?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our sales team to discuss your metering requirements and discover how Unistar can support your
                energy distribution needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Sales
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-primary hover:text-primary hover:bg-white"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center">
        <p>Test Image (HTML):</p>
        <img src="/images/meter.png" alt="Test Image" style={{ width: "200px", height: "auto", margin: "0 auto" }} />
      </div>
    </main>
  )
}
