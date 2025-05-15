"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function DebugImage({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [errorDetails, setErrorDetails] = useState<string>("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="border p-4 my-4 rounded-lg">
      <h3 className="font-bold mb-2">Image Debug: {src}</h3>
      <div className="relative bg-gray-100 p-2 rounded">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
          onLoadingComplete={() => setStatus("success")}
          onError={(e) => {
            setStatus("error")
            // Try to get more details about the error
            const target = e.target as HTMLImageElement
            setErrorDetails(`Failed to load: ${target.src}`)
          }}
        />
      </div>
      <div className="mt-2">
        <p>
          Status:{" "}
          <span
            className={
              status === "loading" ? "text-yellow-500" : status === "success" ? "text-green-500" : "text-red-500"
            }
          >
            {status}
          </span>
        </p>
        {status === "error" && <p className="text-red-500 text-sm">{errorDetails}</p>}
        <p className="text-sm mt-1">Path: {src}</p>
        <p className="text-sm">
          Dimensions: {width}x{height}
        </p>
        <p className="text-sm">Full URL: {isClient ? window.location.origin + src : ""}</p>
      </div>
    </div>
  )
}
