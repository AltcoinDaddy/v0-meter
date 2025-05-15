import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Download, FileText } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Products</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our comprehensive range of STS-certified electricity meters designed and manufactured in
                Nigeria.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#featured-products">
                <Button size="lg" className="px-8">
                  View Products
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

      {/* Product Categories */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Categories</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse range of metering solutions caters to various applications and requirements.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/meter.png"
                    alt="Single-Phase Meters"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Single-Phase Meters</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Residential and small commercial prepaid meters with various interface options.
                </p>
                <Link href="#single-phase">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/three-phase-meter.jpeg"
                    alt="Three-Phase Meters"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Three-Phase Meters</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Commercial and industrial meters with advanced monitoring capabilities.
                </p>
                <Link href="#three-phase">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?key=4r6g2"
                    alt="Split Prepayment Meters"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Split Prepayment</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Meters with separate user interface units for enhanced security and convenience.
                </p>
                <Link href="#split">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <Image
                    src="/placeholder.svg?key=xvob7"
                    alt="Smart Meters"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Meters</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Next-generation meters with advanced connectivity and data management features.
                </p>
                <Link href="#smart">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div id="featured-products">
        <FeaturedProducts />
      </div>

      {/* Product Specifications */}
      <section id="specifications" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Product Specifications</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Detailed technical specifications for our meter products.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Tabs defaultValue="single" className="w-full max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="single">Single-Phase</TabsTrigger>
                <TabsTrigger value="three">Three-Phase</TabsTrigger>
                <TabsTrigger value="split">Split Meters</TabsTrigger>
                <TabsTrigger value="smart">Smart Meters</TabsTrigger>
              </TabsList>
              <TabsContent value="single" className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Single-Phase Meter Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Voltage Rating:</span> 220-240V
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Current Rating:</span> 5(60)A, 10(80)A
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Frequency:</span> 50Hz
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Accuracy Class:</span> Class 1.0
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">STS Compliance:</span> IEC 62055-41/51/52
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" /> Download Full Specifications
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="three" className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Three-Phase Meter Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Voltage Rating:</span> 3×220/380V, 3×230/400V
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Current Rating:</span> 10(100)A, 20(120)A
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Frequency:</span> 50Hz
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Accuracy Class:</span> Class 1.0
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">STS Compliance:</span> IEC 62055-41/51/52
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" /> Download Full Specifications
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="split" className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Split Meter Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Voltage Rating:</span> 220-240V (Single), 3×220/380V (Three)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Current Rating:</span> 5(60)A, 10(80)A, 10(100)A
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Communication:</span> RF 433MHz
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Accuracy Class:</span> Class 1.0
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">STS Compliance:</span> IEC 62055-41/51/52
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" /> Download Full Specifications
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="smart" className="mt-6 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Smart Meter Specifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Voltage Rating:</span> 220-240V (Single), 3×220/380V (Three)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Current Rating:</span> 5(60)A, 10(80)A, 10(100)A
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Communication:</span> GPRS/3G/4G, RF Mesh
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Data Protocols:</span> DLMS/COSEM
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium">Additional Features:</span> Remote disconnect, Power quality
                      monitoring, Load profile
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="gap-2">
                    <FileText className="h-4 w-4" /> Download Full Specifications
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Product Catalog Download */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-gray-50 rounded-xl">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold">Download Our Product Catalog</h2>
              <p className="text-gray-500 max-w-md">
                Get detailed information about our complete range of products, specifications, and features in our
                comprehensive product catalog.
              </p>
            </div>
            <div>
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" /> Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find the Right Metering Solution for Your Needs
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts is ready to help you select the perfect metering solution for your specific
                requirements.
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
