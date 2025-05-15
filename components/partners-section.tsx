import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function PartnersSection() {
  return (
    <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Strategic Partners</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Collaborating with industry leaders to deliver the best metering solutions for Nigeria&apos;s energy
              sector.
            </p>
          </div>
        </div>

        {/* Technology Partner */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Technology Partnership</h3>
            <p className="text-gray-500">
              Our strategic partnership with SHENZHEN DONSUN Technology enables us to combine global expertise with
              local manufacturing capabilities, ensuring our meters meet international standards while being tailored
              for the Nigerian market.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/partners">
                <Button variant="outline" className="gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <Image
                src="/placeholder.svg?height=400&width=200&query=electricity metering technology company logo on white background"
                alt="Technology Partnership"
                width={400}
                height={200}
                className="mx-auto object-contain"
              />
              <div className="mt-4 text-center">
                <h4 className="font-semibold">SHENZHEN DONSUN Technology</h4>
                <p className="text-sm text-gray-500">Global Metering Technology Provider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Distribution Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "EKEDC",
                description: "Eko Electricity Distribution Company",
                image: "/placeholder.svg?height=160&width=80&query=EKEDC electricity distribution company Nigeria logo",
              },
              {
                name: "AEDC",
                description: "Abuja Electricity Distribution Company",
                image: "/placeholder.svg?height=160&width=80&query=AEDC electricity distribution company Nigeria logo",
              },
              {
                name: "IBEDC",
                description: "Ibadan Electricity Distribution Company",
                image: "/placeholder.svg?height=160&width=80&query=IBEDC electricity distribution company Nigeria logo",
              },
              {
                name: "PHED",
                description: "Port Harcourt Electricity Distribution Company",
                image: "/placeholder.svg?height=160&width=80&query=PHED electricity distribution company Nigeria logo",
              },
            ].map((partner, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={`${partner.name} Logo`}
                    width={200}
                    height={120}
                    className="h-16 w-auto object-contain mb-4"
                  />
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-xs text-gray-500">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Government Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Government & Regulatory Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "NERC",
                description: "Nigerian Electricity Regulatory Commission",
                image: "/placeholder.svg?height=120&width=200&query=NERC logo Nigeria regulatory commission",
              },
              {
                name: "SON",
                description: "Standards Organisation of Nigeria",
                image: "/placeholder.svg?height=120&width=200&query=SON logo Standards Organisation of Nigeria",
              },
              {
                name: "FMoP",
                description: "Federal Ministry of Power",
                image: "/placeholder.svg?height=120&width=200&query=Federal Ministry of Power logo Nigeria",
              },
            ].map((partner, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src={partner.image || "/placeholder.svg"}
                    alt={`${partner.name} Logo`}
                    width={200}
                    height={120}
                    className="h-16 w-auto object-contain mb-4"
                  />
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-xs text-gray-500">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
