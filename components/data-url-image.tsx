"use client"

interface DataUrlImageProps {
  dataUrl: string
  alt: string
  className?: string
}

export default function DataUrlImage({ dataUrl, alt, className = "" }: DataUrlImageProps) {
  return <img src={dataUrl || "/placeholder.svg"} alt={alt} className={className} />
}
