"use client"

import { useState, useEffect } from "react"

export default function ImageVerification() {
  const [imageStatus, setImageStatus] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState(true)

  const imagesToTest = [
    "/images/donsun_technology_product_image.png",
    "/images/donsun-technology.png",
    "/images/partners/donsun-technology.png",
    "/placeholder.svg",
  ]

  useEffect(() => {
    const checkImages = async () => {
      const results: { [key: string]: boolean } = {}

      for (const path of imagesToTest) {
        try {
          const response = await fetch(path, { method: "HEAD" })
          results[path] = response.ok
        } catch (error) {
          results[path] = false
        }
      }

      setImageStatus(results)
      setLoading(false)
    }

    checkImages()
  }, [])

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold mb-4">Image Availability Check</h2>

      {loading ? (
        <p>Checking image availability...</p>
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            {imagesToTest.map((path) => (
              <div key={path} className="flex items-center space-x-2">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${imageStatus[path] ? "bg-green-500" : "bg-red-500"}`}
                ></span>
                <code className="bg-gray-100 px-2 py-1 rounded">{path}</code>
                <span>{imageStatus[path] ? "✅ Available" : "❌ Not found"}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Image Preview (if available):</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {imagesToTest.map((path) => (
                <div key={path} className="border rounded-lg p-4">
                  <p className="text-sm font-medium mb-2">{path}</p>
                  {imageStatus[path] ? (
                    <div className="relative h-40 bg-gray-50">
                      <img
                        src={path || "/placeholder.svg"}
                        alt={`Image at ${path}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-500">
                      Image not available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
