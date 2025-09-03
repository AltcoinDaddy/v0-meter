import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, History, Target, Heart, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Unistar Hi-Tech Systems
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nigeria&apos;s pioneer in prepaid meter production since 2003, committed to powering the nation with
              quality and innovation.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://i.ibb.co/dJK5HHT8/Unistar-Hi-Tech-Systems-Corporate-Profile-15072024-14.png"
              alt="Unistar Manufacturing Facility with meter testing equipment"
              width={800}
              height={600}
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-gray-500">
              Founded in 2003, Unistar Hi-Tech Systems Limited has grown to become Nigeria&apos;s leading manufacturer
              of electric prepaid meters. With over two decades of experience, we have installed more than 1.2 million
              meters nationwide, serving major electricity distribution companies across the country.
            </p>
            <p className="text-gray-500">
              Our state-of-the-art manufacturing facility in Nigeria produces over 1.2M meters annually, reducing
              import costs and delays while creating local employment opportunities. We combine global expertise through
              our partnership with WellSun Intelligent Technology Co Ltd with local manufacturing capabilities to deliver products
              tailored for the Nigerian market.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row pt-4">
              <Link href="/about">
                <Button className="gap-1">
                  Learn More About Us <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="mission" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="mission" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span className="hidden sm:inline">Mission</span>
                </TabsTrigger>
                <TabsTrigger value="vision" className="flex items-center gap-2">
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">Vision</span>
                </TabsTrigger>
                <TabsTrigger value="values" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Values</span>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="mission" className="mt-6 space-y-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mx-auto max-w-[700px] text-gray-500">
                  "To provide superior quality products and services in the shortest time possible while maintaining a
                  high level of promptness and technical competence."
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500">
                  We are committed to delivering reliable metering solutions that help Nigeria&apos;s power sector
                  operate efficiently and sustainably, ensuring fair billing for consumers and reducing revenue losses
                  for distribution companies.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="mt-6 space-y-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <History className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mx-auto max-w-[700px] text-gray-500">
                  "To become Africa&apos;s largest metering company with an extensive network throughout Africa and the
                  entire world."
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500">
                  We aspire to expand our reach beyond Nigeria to serve the entire African continent, bringing reliable
                  and innovative metering solutions to power utilities and consumers across the region, while
                  establishing Unistar as a global brand in energy metering technology.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="values" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                {[
                  {
                    title: "Integrity",
                    description: "We conduct business with honesty and transparency in all our dealings.",
                  },
                  {
                    title: "Honesty",
                    description: "We are truthful and sincere in our communications and actions.",
                  },
                  {
                    title: "Reliability",
                    description: "We deliver on our promises and create products that stand the test of time.",
                  },
                  {
                    title: "Professionalism",
                    description: "We maintain the highest standards in our work and business relationships.",
                  },
                  {
                    title: "Service Excellence",
                    description: "We strive to exceed customer expectations in every interaction.",
                  },
                ].map((value, index) => (
                  <Card key={index} className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold">{value.title}</h4>
                      <p className="text-sm text-gray-500">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <Link href="/about">
            <Button size="lg" className="gap-2">
              Learn More About Our Company <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
