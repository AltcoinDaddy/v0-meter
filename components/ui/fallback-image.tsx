"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function FallbackImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <>
      <Image
        {...props}
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        onError={() => {
          setImgSrc(fallbackSrc)
          setHasError(true)
        }}
      />
      {hasError && <div className="text-xs text-red-500 mt-1">Image failed to load</div>}
    </>
  )
}
