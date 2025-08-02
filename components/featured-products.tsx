"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check } from "lucide-react"
import { useState } from "react"

export default function FeaturedProducts() {
  const [imgError, setImgError] = useState({
    singlePhase: false,
    threePhase: false,
    commercial: false,
  })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Featured Products</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our range of STS-certified electricity meters designed for reliability and efficiency.
            </p>
          </div>
        </div>
        <Tabs defaultValue="single-phase" className="mt-12">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="single-phase">Single-Phase Meters</TabsTrigger>
              <TabsTrigger value="three-phase">Three-Phase Meters</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="single-phase" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col overflow-hidden border-2 border-transparent transition-colors hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {imgError.singlePhase ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                        <span className="text-gray-500">Single Phase Meter</span>
                      </div>
                    ) : (
                      <img
                        src="https://i.ibb.co/HDWyH6W4/single-face.png"
                        alt="Prepaid Electricity Meter"
                        className="object-contain transition-transform hover:scale-105 p-4 w-full h-full"
                        onError={() => setImgError((prev) => ({ ...prev, singlePhase: true }))}
                      />
                    )}
                    <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">DDSY111 Smart Prepayment Meter</CardTitle>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>STS Certified Prepayment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Anti-tampering Technology</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Remote Management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Power Quality Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
              <Card className="flex flex-col overflow-hidden border-2 border-transparent transition-colors hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {imgError.singlePhase ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                        <span className="text-gray-500">Split Prepayment Meter</span>
                      </div>
                    ) : (
                      <img
                        src="https://i.ibb.co/HDWyH6W4/single-face.png"
                        alt="Split Prepayment Meter"
                        className="object-contain transition-transform hover:scale-105 p-4 w-full h-full"
                        onError={() => setImgError((prev) => ({ ...prev, singlePhase: true }))}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">Split Prepayment Meter</CardTitle>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Separate User Interface Unit</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Enhanced Security Features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Wireless Communication</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Easy Token Entry</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
              <Card className="flex flex-col overflow-hidden border-2 border-transparent transition-colors hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {imgError.singlePhase ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                        <span className="text-gray-500">Keypad Prepayment Meter</span>
                      </div>
                    ) : (
                      <img
                        src="https://i.ibb.co/HDWyH6W4/single-face.png"
                        alt="Keypad Prepayment Meter"
                        className="object-contain transition-transform hover:scale-105 p-4 w-full h-full"
                        onError={() => setImgError((prev) => ({ ...prev, singlePhase: true }))}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">Keypad Prepayment Meter</CardTitle>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Built-in Keypad Interface</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>LCD Display</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>STS Token Compatible</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Tamper Detection</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="three-phase" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col overflow-hidden border-2 border-transparent transition-colors hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {imgError.threePhase ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                        <span className="text-gray-500">DTSY111 Three-Phase Meter</span>
                      </div>
                    ) : (
                      <img
                        src="https://i.ibb.co/1fdLRHb2/image.png"
                        alt="DTSY111 Three-Phase Prepaid Electricity Meter"
                        className="object-contain transition-transform hover:scale-105 p-4 w-full h-full"
                        onError={() => setImgError((prev) => ({ ...prev, threePhase: true }))}
                      />
                    )}
                    <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">DTSY111 Three-Phase Meter</CardTitle>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Three-Phase Measurement</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Commercial Applications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Advanced Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>High Accuracy Class</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
              <Card className="flex flex-col overflow-hidden border-2 border-transparent transition-colors hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    {imgError.commercial ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 p-4">
                        <span className="text-gray-500">Commercial/Industrial Three-Phase Meter</span>
                      </div>
                    ) : (
                      <img
                        src="https://i.ibb.co/1fdLRHb2/image.png"
                        alt="Commercial/Industrial Three-Phase Meter"
                        className="object-contain transition-transform hover:scale-105 p-4 w-full h-full"
                        onError={() => setImgError((prev) => ({ ...prev, commercial: true }))}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-xl mb-2">Commercial/Industrial Solutions</CardTitle>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>High Load Capacity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Industrial Applications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Data Logging Capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-primary mt-0.5" />
                      <span>Network Integration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0"></CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button size="lg">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
