import Image from "next/image"

export default function ClientLogos() {
  return (
    <section className="w-full pt-4 pb-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Trusted by Nigeria&apos;s Leading DISCOs
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our meters power electricity distribution across Nigeria.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mt-12">
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=EKEDC logo electricity distribution company Nigeria"
              alt="EKEDC Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=AEDC logo electricity distribution company Nigeria"
              alt="AEDC Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=IBEDC logo electricity distribution company Nigeria"
              alt="IBEDC Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=PHED logo electricity distribution company Nigeria"
              alt="PHED Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=KEDCO logo electricity distribution company Nigeria"
              alt="KEDCO Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=BEDC logo electricity distribution company Nigeria"
              alt="BEDC Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=JED logo electricity distribution company Nigeria"
              alt="JED Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
          <div className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0 hover:scale-105">
            <Image
              src="/placeholder.svg?height=80&width=160&query=KAEDCO logo electricity distribution company Nigeria"
              alt="KAEDCO Logo"
              width={160}
              height={80}
              className="object-contain h-12 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
