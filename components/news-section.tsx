import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News & Updates</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay informed about our latest developments, industry news, and company milestones.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <Card className="overflow-hidden bg-white border-0 shadow-sm">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://i.ibb.co/N6s5SdGG/news.jpg"
                  alt="New Partnership Announcement"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">April 15, 2025</p>
                <h3 className="font-bold text-xl">Unistar Announces New Partnership with EKEDC</h3>
                <p className="text-gray-500">
                  Unistar Hi-Tech Systems Limited has signed a new agreement with Eko Electricity Distribution Company
                  to supply 100,000 prepaid meters.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href="/news/new-partnership-ekedc">
                <Button variant="ghost" className="p-0 h-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden bg-white border-0 shadow-sm">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://i.ibb.co/N6s5SdGG/news.jpg"
                  alt="Manufacturing Facility Expansion"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">March 22, 2025</p>
                <h3 className="font-bold text-xl">Manufacturing Facility Expansion Completed</h3>
                <p className="text-gray-500">
                  Unistar has completed the expansion of its manufacturing facility, increasing production capacity by
                  40%.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href="/news/facility-expansion">
                <Button variant="ghost" className="p-0 h-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden bg-white border-0 shadow-sm">
            <CardHeader className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="https://i.ibb.co/N6s5SdGG/news.jpg"
                  alt="New Product Launch"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">February 10, 2025</p>
                <h3 className="font-bold text-xl">Unistar Launches Next-Generation Smart Meters</h3>
                <p className="text-gray-500">
                  Our new line of smart meters features enhanced connectivity and improved energy monitoring
                  capabilities.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href="/news/next-gen-smart-meters">
                <Button variant="ghost" className="p-0 h-auto">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/news">
            <Button variant="outline">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
