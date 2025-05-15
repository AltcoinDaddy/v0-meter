"use client"

import { useState, useEffect } from "react"

export function DebugImage() {
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({})
  const [publicUrl, setPublicUrl] = useState("")

  useEffect(() => {
    // Get the current URL to help debug image paths
    setPublicUrl(window.location.origin)

    // Test loading the logo image
    const testImage = new Image()
    testImage.onload = () => {
      setImageStatus((prev) => ({ ...prev, logo: "loaded" }))
    }
    testImage.onerror = () => {
      setImageStatus((prev) => ({ ...prev, logo: "failed" }))
    }
    testImage.src = "/images/unistar-logo.jpeg"

    // Test loading another image
    const testImage2 = new Image()
    testImage2.onload = () => {
      setImageStatus((prev) => ({ ...prev, meter: "loaded" }))
    }
    testImage2.onerror = () => {
      setImageStatus((prev) => ({ ...prev, meter: "failed" }))
    }
    testImage2.src = "/images/meter.png"
  }, [])

  return (
    <div className="fixed bottom-0 right-0 bg-black/80 text-white p-4 text-xs z-50 max-w-xs">
      <h3 className="font-bold mb-2">Image Debug</h3>
      <p>Public URL: {publicUrl}</p>
      <ul className="mt-2">
        {Object.entries(imageStatus).map(([img, status]) => (
          <li key={img} className={status === "loaded" ? "text-green-400" : "text-red-400"}>
            {img}: {status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DebugImage
