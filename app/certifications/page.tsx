"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import {
  ArrowRight,
  Download,
  FileText,
  Shield,
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Loader2,
} from "lucide-react"
import JSZip from "jszip"
import { saveAs } from "file-saver"

export default function CertificationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<{
    name: string
    images: Array<{
      src: string
      caption: string
      date?: string
    }>
    description: string
    currentImageIndex?: number
  } | null>(null)

  const certifications = [
    {
      name: "STS Certification",
      images: [
        {
          src: "/images/sts-membership-certificate.png",
          caption: "STS Association Membership Certificate",
          date: "July 16, 2016",
        },
        {
          src: "/images/sts-certificate-single-phase.png",
          caption: "STS Certificate for Single Phase Meter (DDSY111)",
          date: "November 11, 2021",
        },
        {
          src: "/images/sts-certificate-three-phase.png",
          caption: "STS Certificate for Three Phase Meter (DTSY111)",
          date: "November 11, 2021",
        },
      ],
      description:
        "Standard Transfer Specification (STS) certification ensuring interoperability and compliance with IEC 62055-41/51/52 for both single-phase and three-phase meters.",
      content:
        "Our company has been a member of the STS Association since 2016, and our meters are certified by the STS Association, confirming compliance with the Standard Transfer Specification (IEC 62055-41/51/52). We hold certifications for both our single-phase (DDSY111) and three-phase (DTSY111) prepayment energy meters, issued in November 2021.",
    },
    {
      name: "VAT Registration",
      images: [
        {
          src: "/images/vat-certificate.png",
          caption: "Value Added Tax (VAT) Certificate of Registration",
          date: "May 19, 2009",
        },
      ],
      description:
        "Federal Inland Revenue Service (FIRS) certification of Unistar Hi-Tech Systems Limited as a registered agent for VAT collection.",
      content:
        "Our company is officially registered with the Federal Inland Revenue Service (FIRS) as an agent for VAT collection under the Value Added Tax (VAT) Decree No 102 of 1993. This certification (Registration No. 01624047-001) was issued on May 19, 2009, and confers all the rights and obligations including the claim of credit for input tax paid under the VAT Decree on any registered persons.",
    },
    {
      name: "NERC Approval",
      images: [
        {
          src: "/images/nerc-certificate.jpeg",
          caption: "NERC Manufacturing Approval Certificate",
        },
        {
          src: "/images/nerc-no-objection.png",
          caption: "NERC 'No Objection' Letter for Meter Asset Provider",
          date: "May 21, 2018",
        },
      ],
      description:
        "Nigerian Electricity Regulatory Commission (NERC) approvals for manufacturing electrical energy metering systems and to be a Meter Asset Provider in Nigeria.",
      content:
        "Our company is officially approved by the Nigerian Electricity Regulatory Commission (NERC) as a manufacturer of electrical energy metering systems in Nigeria. We also have a 'No Objection' status to participate as a Meter Asset Provider (MAP) in accordance with NERC regulations.",
    },
    {
      name: "SON Certification",
      images: [
        {
          src: "/images/son-mancap-certificate.jpeg",
          caption: "Standards Organisation of Nigeria (SON) MANCAP Certificate",
        },
      ],
      description:
        "Standards Organisation of Nigeria (SON) MANCAP certification confirming compliance with Nigerian standards.",
      content:
        "Our products are certified by the Standards Organisation of Nigeria (SON) with MANCAP certification, confirming compliance with Nigerian national standards for both single-phase and three-phase meters.",
    },
    {
      name: "Other Certifications",
      images: [
        {
          src: "/images/assembler-certificate.jpeg",
          caption: "Federal Ministry of Industry, Trade & Investment Assembler Certificate",
          date: "December 18, 2020",
        },
        {
          src: "/images/nigeria-customs-recognition.png",
          caption: "Nigeria Customs Service Recognition as Manufacturer/Assembler of Prepaid Meters",
          date: "December 10, 2021",
        },
        {
          src: "/images/finance-ministry-recognition.png",
          caption: "Federal Ministry of Finance Recognition as Manufacturer/Assembler of Prepaid Meters",
          date: "November 9, 2021",
        },
      ],
      description: "Additional certifications and compliance documents for our products and services.",
      content:
        "Our products comply with various international and local standards, ensuring quality and reliability across all our offerings.",
    },
    {
      name: "Other Certification",
      images: [
        {
          src: "/images/assembler-certificate.jpeg",
          caption: "Federal Ministry of Industry, Trade & Investment Assembler Certificate",
          date: "December 18, 2020",
        },
        {
          src: "/images/finance-ministry-recognition.png",
          caption: "Federal Ministry of Finance Recognition as Manufacturer/Assembler of Prepaid Meters",
          date: "November 9, 2021",
        },
        {
          src: "/images/nigeria-customs-recognition.png",
          caption: "Nigeria Customs Service Recognition as Manufacturer/Assembler of Prepaid Meters",
          date: "December 10, 2021",
        },
      ],
      description:
        "Nigerian Electricity Management Services Agency (NEMSA) certification ensuring safety and reliability.",
      content:
        "Our meters are certified by the Nigerian Electricity Management Services Agency (NEMSA), ensuring safety and reliability.",
    },
  ]

  const openCertificateModal = (certificate: (typeof certifications)[0]) => {
    setSelectedCertificate({
      ...certificate,
      currentImageIndex: 0,
    })
    setIsModalOpen(true)
  }

  const nextImage = () => {
    if (selectedCertificate && selectedCertificate.currentImageIndex !== undefined) {
      const nextIndex = (selectedCertificate.currentImageIndex + 1) % selectedCertificate.images.length
      setSelectedCertificate({
        ...selectedCertificate,
        currentImageIndex: nextIndex,
      })
    }
  }

  const prevImage = () => {
    if (selectedCertificate && selectedCertificate.currentImageIndex !== undefined) {
      const prevIndex =
        (selectedCertificate.currentImageIndex - 1 + selectedCertificate.images.length) %
        selectedCertificate.images.length
      setSelectedCertificate({
        ...selectedCertificate,
        currentImageIndex: prevIndex,
      })
    }
  }

  const downloadAllCertificates = async () => {
    setIsDownloading(true)
    try {
      const zip = new JSZip()
      const certificatesFolder = zip.folder("Unistar-Certificates")

      // Collect all unique certificate images
      const allImages: { src: string; name: string }[] = []

      certifications.forEach((cert) => {
        cert.images.forEach((img) => {
          const fileName = img.src.split("/").pop() || "certificate.png"
          const certName = cert.name.replace(/\s+/g, "-").toLowerCase()
          const caption = img.caption.replace(/\s+/g, "-").toLowerCase()
          const uniqueName = `${certName}-${caption}`

          allImages.push({
            src: img.src,
            name: uniqueName + "." + fileName.split(".").pop(),
          })
        })
      })

      // Download each image and add to zip
      const downloadPromises = allImages.map(async (img) => {
        try {
          const response = await fetch(img.src)
          const blob = await response.blob()
          certificatesFolder?.file(img.name, blob)
        } catch (error) {
          console.error(`Failed to download ${img.src}:`, error)
        }
      })

      await Promise.all(downloadPromises)

      // Generate and download the zip file
      const content = await zip.generateAsync({ type: "blob" })
      saveAs(content, "Unistar-Certificates.zip")
    } catch (error) {
      console.error("Error creating zip file:", error)
      alert("Failed to download certificates. Please try again later.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">Quality Assured</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Certifications</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Unistar Hi-Tech Systems is fully certified by all relevant regulatory bodies, ensuring our products meet
                the highest standards of quality and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications
              .filter((cert) => cert.name !== "Other Certifications")
              .map((cert, index) => (
                <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-all p-6">
                  <div className="relative w-32 h-32 flex items-center justify-center bg-gray-50 rounded-md p-2 mx-auto">
                    <Image
                      src={cert.images[0].src || "/placeholder.svg"}
                      alt={cert.name}
                      width={100}
                      height={100}
                      className="object-contain max-h-[100px] max-w-[100px]"
                    />
                    {cert.images.length > 1 && (
                      <Badge className="absolute top-1 right-1 bg-primary text-xs px-1.5 py-0.5">
                        {cert.images.length}
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <p className="text-gray-500 mt-2">{cert.content}</p>
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" size="sm" className="gap-1" onClick={() => openCertificateModal(cert)}>
                        <FileText className="h-4 w-4" /> View Certificate
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 text-center md:text-left md:max-w-md">
              <div className="inline-block p-3 rounded-full bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Quality Commitment</h2>
              <p className="text-gray-500">
                At Unistar, quality is not just a certification—it's a commitment. Every meter we produce undergoes
                rigorous testing to ensure it meets or exceeds all applicable standards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gap-2">
                <Shield className="h-4 w-4" /> Quality Policy
              </Button>
              <Button variant="outline" className="gap-2" onClick={downloadAllCertificates} disabled={isDownloading}>
                {isDownloading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Preparing Download...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" /> Download All Certificates
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Ready to Experience Quality?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
                Contact us today to learn more about our certified products and how they can meet your metering needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Us
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 border-white text-white hover:text-primary hover:bg-white font-medium"
                >
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DialogTitle className="text-xl font-bold">{selectedCertificate?.name}</DialogTitle>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>
            </div>
            <DialogDescription className="mb-4">{selectedCertificate?.description}</DialogDescription>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-gray-50">
              {selectedCertificate && selectedCertificate.currentImageIndex !== undefined && (
                <Image
                  src={selectedCertificate.images[selectedCertificate.currentImageIndex].src || "/placeholder.svg"}
                  alt={`${selectedCertificate.name} Certificate`}
                  fill
                  className="object-contain p-4"
                />
              )}

              {selectedCertificate && selectedCertificate.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next</span>
                  </Button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/80 px-2 py-1 rounded-full text-xs">
                    {selectedCertificate.currentImageIndex + 1} / {selectedCertificate.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Caption and date information */}
            {selectedCertificate && selectedCertificate.currentImageIndex !== undefined && (
              <div className="mt-4 text-center">
                <p className="font-medium text-gray-800">
                  {selectedCertificate.images[selectedCertificate.currentImageIndex].caption}
                </p>
                {selectedCertificate.images[selectedCertificate.currentImageIndex].date && (
                  <p className="text-sm text-gray-500 flex items-center justify-center mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Issue Date: {selectedCertificate.images[selectedCertificate.currentImageIndex].date}
                  </p>
                )}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-4">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
              <Button className="gap-2">
                <Download className="h-4 w-4" /> Download Certificate
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
