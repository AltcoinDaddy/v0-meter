import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

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

        {/* Distribution Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Distribution Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "EKEDC",
                description: "Eko Electricity Distribution Company",
                image: "https://i.ibb.co/NdS84JJh/image.png",
              },
              {
                name: "AEDC",
                description: "Abuja Electricity Distribution Company",
                image: "https://i.ibb.co/0yYSfqTm/image.png",
              },
              {
                name: "IBEDC",
                description: "Ibadan Electricity Distribution Company",
                image: "https://i.ibb.co/s9VFvVdr/image.png",
              },
              {
                name: "PHED",
                description: "Port Harcourt Electricity Distribution Company",
                image: "https://i.ibb.co/d0NNnH8C/image.png",
              },
              {
                name: "JEDC",
                description: "Jos Electricity Distribution Company",
                image: "https://i.ibb.co/JWmmP9fn/qq-Sdt2-Ir-400x400.png",
              },
              {
                name: "BEDC",
                description: "Benin Electricity Distribution Company",
                image: "https://i.ibb.co/SD8ZsQ7j/1630523181566.png",
              },
              {
                name: "IE",
                description: "Ikeja Electric",
                image: "https://i.ibb.co/60Vw3Tyz/download.png",
              },
            ].map((partner, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={`${partner.name} Logo`}
                      width={200}
                      height={120}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "NERC",
                description: "Nigerian Electricity Regulatory Commission",
                image: "https://i.ibb.co/8nzCFCxv/image.png",
              },
              {
                name: "SON",
                description: "Standards Organisation of Nigeria",
                image: "https://i.ibb.co/6R76635z/image.png",
              },
              {
                name: "FMoP",
                description: "Federal Ministry of Power",
                image: "https://i.ibb.co/whZZwjRQ/image.png",
              },
              {
                name: "NEMSA",
                description: "Nigerian Electricity Management Services Agency",
                image: "https://i.ibb.co/TMBn5QLq/download.jpg",
              },
            ].map((partner, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={`${partner.name} Logo`}
                      width={200}
                      height={120}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
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
