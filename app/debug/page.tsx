import DebugImage from "@/components/debug-image"
import Link from "next/link"

export default function DebugPage() {
  // List of images to test
  const imagesToTest = [
    { src: "/images/meter.png", alt: "Meter", width: 400, height: 300 },
    { src: "/images/nigerian-flag-with-coa.png", alt: "Nigerian Flag", width: 200, height: 100 },
    { src: "/images/electricity-meter.png", alt: "Electricity Meter", width: 400, height: 300 },
    // Add more images you want to test
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Image Debug Page</h1>
      <p className="mb-4">This page tests image loading from various sources to help diagnose issues.</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Testing Next.js Image Component</h2>
        <div className="space-y-6">
          {imagesToTest.map((img, index) => (
            <DebugImage key={index} src={img.src} alt={img.alt} width={img.width} height={img.height} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Testing Regular HTML Images</h2>
        <div className="space-y-6">
          {imagesToTest.map((img, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold mb-2">HTML Image: {img.src}</h3>
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
