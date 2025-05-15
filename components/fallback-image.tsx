"use client"

import { useState } from "react"

interface FallbackImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  width?: number
  height?: number
  className?: string
}

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  width = 500,
  height = 300,
  className = "",
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative">
      <img
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => {
          setImgSrc(fallbackSrc)
          setHasError(true)
        }}
      />
      {hasError && process.env.NODE_ENV === "development" && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs p-1 text-center">
          Image failed to load
        </div>
      )}
    </div>
  )
}
