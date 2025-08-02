"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersSection() {
  const internationalPartners = [
    {
      name: "Hexing Electrical",
      description: "Leading Chinese manufacturer of smart meters and energy management solutions",
      logo: "/placeholder.svg?height=80&width=120&text=Hexing",
    },
    {
      name: "Secure Meters",
      description: "UK-based provider of advanced metering infrastructure and smart grid solutions",
      logo: "/placeholder.svg?height=80&width=120&text=Secure+Meters",
    },
    {
      name: "Conlog",
      description: "South African technology company specializing in prepayment metering systems",
      logo: "/placeholder.svg?height=80&width=120&text=Conlog",
    },
  ]

  const governmentPartners = [
    {
      name: "NERC",
      description: "Nigerian Electricity Regulatory Commission",
      logo: "/placeholder.svg?height=80&width=120&text=NERC",
    },
    {
      name: "SON",
      description: "Standards Organisation of Nigeria",
      logo: "/placeholder.svg?height=80&width=120&text=SON",
    },
    {
      name: "SON",
      description: "Standards Organisation of Nigeria",
      logo: "/placeholder.svg?height=80&width=120&text=SON",
    },
    {
      name: "NEMSA",
      description: "Nigerian Electricity Management Services Agency",
      logo: "/placeholder.svg?height=80&width=120&text=NEMSA",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Strategic Partnerships</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our strong partnerships with international technology providers and regulatory bodies ensure we deliver
              world-class solutions that meet Nigerian standards.
            </p>
          </div>
        </div>

        {/* International Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">International Technology Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalPartners.map((partner, index) => (
              <Card key={index} className="bg-gray-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                    <p className="text-gray-500 text-sm">{partner.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Government Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Government & Regulatory Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {governmentPartners.map((partner, index) => (
              <Card key={index} className="bg-gray-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{partner.name}</h4>
                    <p className="text-gray-500 text-xs">{partner.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">Technology Transfer</h4>
                <p className="text-gray-600 text-sm">
                  Access to cutting-edge metering technologies and manufacturing processes
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">Quality Assurance</h4>
                <p className="text-gray-600 text-sm">
                  International quality standards and continuous improvement processes
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">Regulatory Compliance</h4>
                <p className="text-gray-600 text-sm">
                  Full compliance with Nigerian electricity sector regulations and standards
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">Local Support</h4>
                <p className="text-gray-600 text-sm">Comprehensive local technical support and maintenance services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
