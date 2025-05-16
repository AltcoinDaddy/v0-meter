import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail, Facebook } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. D.W Atsu Ph.D",
      position: "Chairman",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
        facebook: "#"
      },
    },
    {
      name: "Benjamin A. Bolarinwa FCA, LL.B",
      position: "Vice Chairman",
      bio: "",
      image:
        "/placeholder.svg?height=300&width=400&query=professional Nigerian male engineer in business casual attire",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
        facebook: "#"
      },
    },
    {
      name: "Dr. Babafemi Oluwaseun Obasanjo Ph.D",
      position: "Executive Director",
      bio: "",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian female executive in business attire",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
        facebook: "#"
      },
    },
    {
      name: "Barr. Oba Olubiyi Obasanjo LL.B, B.L",
      position: "Executive Director",
      bio: ".",
      image: "/placeholder.svg?height=300&width=400&query=professional Nigerian male financial executive in suit",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
        facebook: "#"
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
                    <Link href={member.social.facebook} className="text-gray-400 hover:text-primary">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">facebook</span>
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
