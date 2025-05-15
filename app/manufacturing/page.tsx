import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  CheckCircle,
  Factory,
  FileText,
  Lightbulb,
  Recycle,
  Settings,
  Users,
  Workflow,
} from "lucide-react"

export default function ManufacturingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                  Made in Nigeria
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  State-of-the-Art Manufacturing in Nigeria
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Powering Africa with locally manufactured metering solutions that meet international standards while
                  creating jobs and developing skills in Nigeria.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#virtual-tour">
                  <Button size="lg" className="px-8">
                    Take a Virtual Tour
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="px-8">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[600px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?key=gskha"
                  alt="Unistar Manufacturing Facility"
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

      {/* Manufacturing Capabilities Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Manufacturing Capabilities
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our state-of-the-art facility combines advanced technology with skilled craftsmanship to produce
                world-class metering solutions.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">250,000+</h3>
                <p className="text-gray-500">Meters produced annually</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">15,000 m²</h3>
                <p className="text-gray-500">Manufacturing facility</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">200+</h3>
                <p className="text-gray-500">Skilled technicians and engineers</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">100%</h3>
                <p className="text-gray-500">Quality inspection rate</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?key=exu1b"
                alt="Unistar Manufacturing Facility Aerial View"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">World-Class Facility</h3>
              <p className="text-gray-500">
                Located in Lagos, Nigeria, our 15,000 square meter manufacturing facility is equipped with cutting-edge
                technology and staffed by highly skilled technicians and engineers. The facility includes dedicated
                areas for component production, assembly, testing, quality control, and packaging.
              </p>
              <p className="text-gray-500">
                Our manufacturing plant operates according to international standards, with automated production lines
                that ensure consistency and precision in every meter we produce. The facility is designed for optimal
                workflow efficiency, allowing us to meet high production volumes while maintaining strict quality
                control.
              </p>
              <p className="text-gray-500">
                We continuously invest in upgrading our manufacturing capabilities to stay at the forefront of metering
                technology, ensuring that our products meet the evolving needs of Nigeria&apos;s energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Manufacturing Process</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From design to delivery, our comprehensive manufacturing process ensures quality at every step.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Design & Engineering",
                  description:
                    "Our team of engineers designs meters that meet international standards while addressing the specific needs of the Nigerian market.",
                  image: "/placeholder.svg?key=bnq4v",
                },
                {
                  title: "Component Sourcing",
                  description:
                    "We source high-quality components from trusted suppliers, with a focus on maximizing local content where possible.",
                  image: "/placeholder.svg?key=vvryp",
                },
                {
                  title: "PCB Assembly",
                  description:
                    "Our automated SMT (Surface Mount Technology) lines ensure precise assembly of printed circuit boards.",
                  image: "/placeholder.svg?key=qup55",
                },
                {
                  title: "Meter Assembly",
                  description: "/placeholder.svg?key=vy6re",
                  image: "/placeholder.svg?key=124i1",
                },
                {
                  title: "Testing & Calibration",
                  description:
                    "Every meter undergoes rigorous testing and calibration to ensure accuracy and reliability.",
                  image: "/placeholder.svg?key=debld",
                },
                {
                  title: "Quality Control",
                  description:
                    "Our comprehensive quality control process includes visual inspection, functional testing, and sample batch testing.",
                  image: "/placeholder.svg?key=xyst8",
                },
                {
                  title: "Packaging & Distribution",
                  description:
                    "Meters are carefully packaged to prevent damage during transportation and distributed to customers across Nigeria.",
                  image: "/placeholder.svg?key=saco4",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  } md:justify-center`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} relative z-10`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                          <div className="relative w-full max-w-[200px] aspect-square overflow-hidden rounded-lg">
                            <Image
                              src={step.image || "/placeholder.svg"}
                              alt={step.title}
                              width={200}
                              height={200}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className={`flex-1 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                          <h4 className="text-lg font-bold">{step.title}</h4>
                          <p className="text-gray-500 mt-2">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="#virtual-tour">
                <Button className="gap-2">
                  <Workflow className="h-4 w-4" /> See Our Process in Action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control & Certification */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Quality Control & Certification
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our rigorous quality assurance processes ensure that every meter meets the highest standards of
                reliability and accuracy.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Quality Assurance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">100% Functional Testing:</span> Every meter undergoes comprehensive
                    functional testing before leaving our facility.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Calibration Verification:</span> Each meter is calibrated and verified
                    for accuracy using precision equipment.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Environmental Testing:</span> Our meters are tested under various
                    environmental conditions to ensure reliability in Nigeria&apos;s diverse climate.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Batch Sampling:</span> Random samples from each production batch
                    undergo additional testing to ensure consistent quality.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Traceability:</span> Each meter has a unique identifier allowing for
                    complete production history traceability.
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/placeholder.svg?key=dwggc"
                        alt="STS Certification"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold">STS Certification</h4>
                    <p className="text-sm text-gray-500">IEC 62055-41/51/52 compliant</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=ISO 9001 certification logo"
                        alt="ISO 9001"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold">ISO 9001:2015</h4>
                    <p className="text-sm text-gray-500">Quality Management System</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=NERC certification logo Nigeria"
                        alt="NERC Certification"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold">NERC Approved</h4>
                    <p className="text-sm text-gray-500">Nigerian Electricity Regulatory Commission</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/placeholder.svg?height=64&width=64&query=SON certification logo Nigeria"
                        alt="SON Certification"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold">SON Certified</h4>
                    <p className="text-sm text-gray-500">Standards Organisation of Nigeria</p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center pt-4">
                <Button variant="outline" className="gap-2">
                  <FileText className="h-4 w-4" /> Download Certification Documents
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Manufacturing Benefits */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefits of Local Manufacturing
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to manufacturing in Nigeria creates value for our customers, our community, and our
                country.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
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
                <h3 className="text-xl font-bold">Economic Impact</h3>
                <p className="text-gray-500">
                  Creating over 200 direct jobs and supporting hundreds more in our supply chain.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
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
                    <path d="M12 22V8" />
                    <path d="m9 12 3-4 3 4" />
                    <path d="M14 22h5a2 2 0 0 0 2-2v-7.5a1.5 1.5 0 0 0-1.5-1.5.5.5 0 0 1-.5-.5V7a2 2 0 0 0-2-2h-7" />
                    <path d="M5 7v3.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0-1.5 1.5V20a2 2 0 0 0 2 2h5" />
                    <path d="M5 2h7" />
                    <path d="M9 2v3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reduced Lead Times</h3>
                <p className="text-gray-500">
                  Local production means faster delivery and reduced waiting times for our customers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality Assurance</h3>
                <p className="text-gray-500">
                  Direct oversight of the entire manufacturing process ensures consistent quality.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
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
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Local Support</h3>
                <p className="text-gray-500">
                  Rapid response to customer needs with local technical support and service.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Skills Development & Technology Transfer</h3>
              <p className="text-gray-500">
                Our manufacturing operation serves as a center for skills development and technology transfer in
                Nigeria. We provide comprehensive training programs for our employees, developing technical expertise in
                electronics manufacturing, quality control, and engineering.
              </p>
              <p className="text-gray-500">
                Through our partnership with SHENZHEN DONSUN Technology, we facilitate technology transfer that builds
                local capacity and expertise. This knowledge sharing helps develop Nigeria&apos;s manufacturing
                capabilities and contributes to the country&apos;s industrial growth.
              </p>
              <p className="text-gray-500">
                We also collaborate with local universities and technical schools, offering internship programs and
                research opportunities that help develop the next generation of Nigerian engineers and technicians.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&query=Nigerian engineers and technicians working in electronics manufacturing"
                alt="Skills Development at Unistar"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technology & Innovation</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to innovation drives continuous improvement in our manufacturing processes and products.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&query=research and development laboratory for electricity meters"
                alt="Unistar R&D Laboratory"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Research & Development</h3>
              <p className="text-gray-500">
                Our dedicated R&D team works continuously to improve our existing products and develop new solutions
                that address the evolving needs of Nigeria&apos;s energy sector. The team focuses on enhancing meter
                accuracy, reliability, and security while incorporating new technologies such as advanced communication
                capabilities and smart features.
              </p>
              <p className="text-gray-500">
                We invest significantly in our R&D facilities, which include specialized testing equipment, simulation
                software, and prototype development tools. This investment enables us to stay at the forefront of
                metering technology and maintain our position as Nigeria&apos;s leading meter manufacturer.
              </p>
              <div className="pt-4">
                <Tabs defaultValue="current" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="current">Current Innovations</TabsTrigger>
                    <TabsTrigger value="future">Future Developments</TabsTrigger>
                  </TabsList>
                  <TabsContent value="current" className="mt-4 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Advanced Communication Modules:</span> Integrating GPRS, RF
                          Mesh, and other communication technologies for enhanced connectivity.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Anti-Tampering Features:</span> Developing sophisticated
                          anti-tampering mechanisms to prevent meter manipulation.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Power Quality Monitoring:</span> Implementing features to
                          monitor and report on power quality parameters.
                        </div>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="future" className="mt-4 space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Smart Grid Integration:</span> Developing meters with enhanced
                          capabilities for integration with smart grid infrastructure.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">IoT Connectivity:</span> Exploring Internet of Things
                          technologies for advanced data collection and analysis.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Energy Management Features:</span> Creating tools to help
                          consumers better understand and manage their energy usage.
                        </div>
                      </li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Team */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Manufacturing Team</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experts behind our world-class manufacturing operation.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=128&width=128&query=professional Nigerian male manufacturing executive"
                      alt="Oluwaseun Adeyemi"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Oluwaseun Adeyemi</h3>
                    <p className="text-primary font-medium">Head of Manufacturing</p>
                    <p className="text-gray-500 mt-2">
                      With over 15 years of experience in electronics manufacturing, Oluwaseun leads our manufacturing
                      operations with a focus on efficiency and quality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=128&width=128&query=professional Nigerian female quality control manager"
                      alt="Amina Ibrahim"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Amina Ibrahim</h3>
                    <p className="text-primary font-medium">Quality Control Manager</p>
                    <p className="text-gray-500 mt-2">
                      Amina ensures that every meter leaving our facility meets our rigorous quality standards through
                      comprehensive testing and inspection protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=128&width=128&query=professional Nigerian male engineering director"
                      alt="Dr. Emmanuel Okonkwo"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Emmanuel Okonkwo</h3>
                    <p className="text-primary font-medium">Director of Engineering</p>
                    <p className="text-gray-500 mt-2">
                      Dr. Okonkwo leads our engineering team, overseeing product design, process improvement, and
                      technological innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/about#team">
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" /> Meet Our Full Leadership Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section id="virtual-tour" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Virtual Facility Tour</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our state-of-the-art manufacturing facility from anywhere in the world.
              </p>
            </div>
          </div>

          <div className="relative aspect-video w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280&query=modern electronics manufacturing facility interior panoramic view"
              alt="Unistar Manufacturing Facility Virtual Tour"
              width={1280}
              height={720}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button size="lg" className="gap-2">
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
                  className="h-5 w-5"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Start Virtual Tour
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=electronics assembly line with workers"
                    alt="Assembly Line"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      View Area
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Assembly Line</h3>
                  <p className="text-sm text-gray-500">Where our meters are assembled with precision and care.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=quality control laboratory with testing equipment"
                    alt="Testing Laboratory"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      View Area
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Testing Laboratory</h3>
                  <p className="text-sm text-gray-500">Where rigorous quality control ensures meter reliability.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&query=research and development center with engineers"
                    alt="R&D Center"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" size="sm">
                      View Area
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">R&D Center</h3>
                  <p className="text-sm text-gray-500">Where innovation drives the future of our products.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/contact">
              <Button className="gap-2">
                Schedule an In-Person Tour <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sustainability Practices</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our commitment to environmental responsibility guides our manufacturing processes.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Environmental Responsibility</h3>
              <p className="text-gray-500">
                At Unistar, we recognize the importance of sustainable manufacturing practices. Our facility is designed
                to minimize environmental impact through energy efficiency, waste reduction, and responsible resource
                management.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start">
                  <Recycle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Waste Reduction:</span> Our manufacturing processes are designed to
                    minimize waste, and we recycle over 80% of our production waste materials.
                  </div>
                </li>
                <li className="flex items-start">
                  <Recycle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Energy Efficiency:</span> Our facility utilizes energy-efficient
                    equipment and lighting, and we continuously work to reduce our energy consumption.
                  </div>
                </li>
                <li className="flex items-start">
                  <Recycle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Water Conservation:</span> We implement water-saving technologies and
                    practices throughout our manufacturing processes.
                  </div>
                </li>
                <li className="flex items-start">
                  <Recycle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <span className="font-medium">Sustainable Materials:</span> Where possible, we use environmentally
                    friendly materials and packaging solutions.
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&query=sustainable manufacturing facility with solar panels"
                alt="Sustainable Manufacturing at Unistar"
                width={800}
                height={600}
                className="object-cover rounded-xl"
              />
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
                Experience Our Manufacturing Excellence
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how our manufacturing capabilities can support your metering needs with quality, reliability,
                and innovation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Schedule a Visit
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-white hover:text-primary hover:bg-white font-medium"
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
