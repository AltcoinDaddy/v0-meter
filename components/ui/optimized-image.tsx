"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholders/default-placeholder.png",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return <Image {...props} src={imgSrc || "/placeholder.svg"} alt={alt} onError={handleError} />
}
