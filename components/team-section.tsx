import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Samuel Adegoke",
      position: "Chief Executive Officer",
      bio: "With over 25 years of experience in the energy sector, Dr. Adegoke has led Unistar's growth since its founding in 2003. He holds a Ph.D. in Electrical Engineering and has been instrumental in establishing Unistar as Nigeria's leading meter manufacturer.",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian male CEO in business suit",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:samuel.adegoke@unistar-hitech.com",
      },
    },
    {
      name: "Eng. Oluwaseun Oladipo",
      position: "Chief Technical Officer",
      bio: "Eng. Oladipo oversees all technical operations and product development at Unistar. With a background in electronic engineering and over 15 years of experience in metering technology, he ensures our products meet the highest standards of quality and innovation.",
      image:
        "/placeholder.svg?height=300&width=400&query=professional Nigerian male engineer in business casual attire",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:oluwaseun.oladipo@unistar-hitech.com",
      },
    },
    {
      name: "Mrs. Amina Bello",
      position: "Chief Operations Officer",
      bio: "Mrs. Bello manages Unistar's day-to-day operations, overseeing manufacturing, supply chain, and quality control. Her expertise in operational excellence has been crucial in scaling our production capacity to meet growing demand.",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian female executive in business attire",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:amina.bello@unistar-hitech.com",
      },
    },
    {
      name: "Mr. Chukwudi Okonkwo",
      position: "Chief Financial Officer",
      bio: "Mr. Okonkwo brings over 20 years of financial management experience to Unistar. His strategic financial planning and sound fiscal policies have been instrumental in the company's sustainable growth and expansion.",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian male financial executive in suit",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:chukwudi.okonkwo@unistar-hitech.com",
      },
    },
    {
      name: "Ms. Folake Adeyemi",
      position: "Head of Business Development",
      bio: "Ms. Adeyemi leads Unistar's business development initiatives, focusing on expanding our market presence and fostering strategic partnerships. Her deep understanding of Nigeria's energy sector has helped position Unistar as a trusted partner for DISCOs nationwide.",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian female business executive smiling",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:folake.adeyemi@unistar-hitech.com",
      },
    },
    {
      name: "Eng. Ibrahim Musa",
      position: "Head of Research & Development",
      bio: "Eng. Musa leads our R&D department, driving innovation in metering technology. His team is responsible for developing new products and enhancing existing ones to meet the evolving needs of Nigeria's energy sector.",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian male engineer with glasses in office",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:ibrahim.musa@unistar-hitech.com",
      },
    },
  ]

  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Leadership Team</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Meet the experienced professionals leading Unistar Hi-Tech Systems to new heights.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.position}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                  <div className="flex space-x-3 pt-2">
                    <Link href={member.social.linkedin} className="text-gray-400 hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href={member.social.twitter} className="text-gray-400 hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href={member.social.email} className="text-gray-400 hover:text-primary">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
