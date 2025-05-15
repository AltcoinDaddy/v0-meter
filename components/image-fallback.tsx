"use client"

import type React from "react"

import { useState } from "react"

interface ImageFallbackProps {
  src: string
  alt: string
  className?: string
  fallback?: React.ReactNode
}

export default function ImageFallback({ src, alt, className = "", fallback = null }: ImageFallbackProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      fallback || (
        <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
          <span className="text-gray-500 text-xs">{alt}</span>
        </div>
      )
    )
  }

  return <img src={src || "/placeholder.svg"} alt={alt} className={className} onError={() => setError(true)} />
}
