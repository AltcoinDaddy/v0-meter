"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg?key=7hemv",
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  // Handle absolute vs relative URLs
  const fullSrc =
    imgSrc.startsWith("http") || imgSrc.startsWith("//")
      ? imgSrc
      : imgSrc.startsWith("/")
        ? `${window.location.origin}${imgSrc}`
        : `${window.location.origin}/${imgSrc}`

  return (
    <div className="relative">
      <Image
        {...rest}
        src={fullSrc || "/placeholder.svg"}
        alt={alt}
        onError={() => {
          setImgSrc(fallbackSrc)
          setError(true)
        }}
      />
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs p-1 text-center">
          Original image failed to load
        </div>
      )}
    </div>
  )
}
