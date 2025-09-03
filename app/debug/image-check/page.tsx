import ImageDebug from "@/components/image-debug"

export default function ImageCheckPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6">Image Availability Check</h1>
      <ImageDebug />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Direct Image References</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">/images/donsun-technology.png</h3>
            <img
              src="/images/donsun-technology.png"
              alt="Direct reference to -technology.png"
              className="border rounded-lg"
            />
          </div>
          <div>
            <h3 className="font-medium mb-2">/images/partners/donsun-technology.png</h3>
            <img
              src="/images/partners/donsun-technology.png"
              alt="Direct reference to partners/-technology.png"
              className="border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
