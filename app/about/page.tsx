import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Building, Factory, History, Target, Heart, MapPin, Users } from "lucide-react"
import TeamSection from "@/components/team-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                  Established 2003
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About Unistar Hi-Tech Systems
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Nigeria&apos;s pioneer in prepaid meter production, committed to powering the nation with quality and
                  innovation for over two decades.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://i.ibb.co/bgpGP7wR/Assembly-Packing-Line-1.png"
                  alt="Unistar Hi-Tech Systems Headquarters"
                  width={800}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The journey of Nigeria&apos;s leading meter manufacturer.
              </p>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-gray-500">
                Founded in 2003, Unistar Hi-Tech Systems Limited was established with a vision to address Nigeria&apos;s
                growing need for reliable electricity metering solutions. As one of the country&apos;s first local
                manufacturers of prepaid meters, we embarked on a mission to reduce dependency on imported products
                while creating employment opportunities for Nigerians.
              </p>
              <p className="text-gray-500">
                Our journey began with a small production facility and a team of dedicated engineers committed to
                developing metering solutions specifically designed for the Nigerian market. Through strategic
                partnerships with international technology providers, particularly Zhejiang Wellsun Intelligent Technology Co Ltd, we gained
                access to cutting-edge metering technology while maintaining our focus on local manufacturing.
              </p>
              <p className="text-gray-500">
                Over the years, we have grown to become Nigeria&apos;s leading manufacturer of electric prepaid meters,
                with over 2.6 million meters installed nationwide. Our state-of-the-art manufacturing facility now
                produces more than 1.2M meters annually, serving major electricity distribution companies across the
                country.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">20+</h3>
                  <p className="text-gray-500">Years of Experience</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">200+</h3>
                  <p className="text-gray-500">Employees</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">1.2M</h3>
                  <p className="text-gray-500">Annual Production</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">8+</h3>
                  <p className="text-gray-500">DISCOs Served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Journey</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key milestones in our evolution from a small startup to Nigeria&apos;s leading meter manufacturer.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  year: "2003",
                  title: "Company Founded",
                  description: "Unistar Hi-Tech Systems Limited was established in Lagos, Nigeria.",
                },
                {
                  year: "2007",
                  title: "First Major Contract",
                  description: "Secured first major contract with a Nigerian electricity distribution company.",
                },
                {
                  year: "2012",
                  title: "Manufacturing Facility",
                  description: "Opened state-of-the-art manufacturing facility in Nigeria.",
                },
                {
                  year: "2015",
                  title: "STS Certification",
                  description: "Achieved Standard Transfer Specification (STS) certification for all meter products.",
                },
                {
                  year: "2020",
                  title: "2 Million Milestone",
                  description: "Celebrated installation of 2 million meters across Nigeria.",
                },
                {
                  year: "2023",
                  title: "Facility Expansion",
                  description: "Expanded manufacturing capacity to over 1.2M meters annually.",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? "justify-end" : "justify-start"} md:justify-center`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 text-right" : "md:pl-12 text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                        {event.year}
                      </span>
                      <h4 className="text-lg font-bold">{event.title}</h4>
                      <p className="text-gray-500">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission, Vision & Values
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our operations and shape our future.
              </p>
            </div>
          </div>

          <div className="mt-6">
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
                    "To become Africa&apos;s largest metering company with an extensive network throughout Africa and
                    the entire world."
                  </p>
                  <p className="mx-auto max-w-[700px] text-gray-500">
                    We aspire to expand our reach beyond Nigeria to serve the entire African continent, bringing
                    reliable and innovative metering solutions to power utilities and consumers across the region, while
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
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Manufacturing Excellence</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our state-of-the-art facility and production capabilities.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://i.ibb.co/9xjx5Z8/Trolley-1.png"
                alt="Unistar Manufacturing Facility"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nigerian-Made Excellence</h3>
              <p className="text-gray-500">
                Our manufacturing facility in Nigeria is equipped with cutting-edge technology and staffed by highly
                skilled technicians and engineers. With a production capacity exceeding 1.2M meters annually, we are
                able to meet the growing demand for electricity meters across the country.
              </p>
              <p className="text-gray-500">
                Our commitment to local manufacturing not only reduces import costs and delays but also creates valuable
                employment opportunities for Nigerians and contributes to the development of technical expertise within
                the country.
              </p>
              <p className="text-gray-500">
                Every meter produced in our facility undergoes rigorous quality control processes to ensure compliance
                with international standards and reliability in the field. Our manufacturing processes are certified by
                relevant regulatory bodies, including the Standards Organisation of Nigeria (SON) and the Nigerian
                Electricity Regulatory Commission (NERC), Nigerian Electricity Management Services Agency(NEMSA).
              </p>
              <div className="pt-4">
                <Link href="/manufacturing">
                  <Button className="gap-1">
                    Learn More About Our Manufacturing <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Social Responsibility */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Corporate Social Responsibility
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to sustainable development and community impact.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src="https://i.ibb.co/XrmBtMSx/Unistar-Hi-Tech-Systems-Corporate-Profile-15072024-14.png"
                    alt="Community Development"
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Community Development</h3>
                <p className="text-gray-500">
                  We invest in the communities where we operate through infrastructure development, educational support,
                  and healthcare initiatives.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src="https://i.ibb.co/XrmBtMSx/Unistar-Hi-Tech-Systems-Corporate-Profile-15072024-14.png"
                    alt="Environmental Sustainability"
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Environmental Sustainability</h3>
                <p className="text-gray-500">
                  Our manufacturing processes are designed to minimize environmental impact, with a focus on energy
                  efficiency and waste reduction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src="https://i.ibb.co/XrmBtMSx/Unistar-Hi-Tech-Systems-Corporate-Profile-15072024-14.png"
                    alt="Skills Development"
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Skills Development</h3>
                <p className="text-gray-500">
                  We provide training and internship opportunities for young Nigerians, helping to develop the next
                  generation of technical talent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Us in Powering Nigeria&apos;s Future
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how Unistar Hi-Tech Systems is contributing to Nigeria&apos;s energy sector and creating
                opportunities for growth and development.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
