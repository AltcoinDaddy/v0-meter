"use client"

import { useState, useEffect } from "react"

export default function ImageDebug() {
  const [imageStatus, setImageStatus] = useState<Record<string, string>>({})

  useEffect(() => {
    const checkImage = async (path: string) => {
      try {
        const response = await fetch(path)
        if (response.ok) {
          setImageStatus((prev) => ({ ...prev, [path]: "Available" }))
        } else {
          setImageStatus((prev) => ({ ...prev, [path]: `Error: ${response.status}` }))
        }
      } catch (error) {
        setImageStatus((prev) => ({ ...prev, [path]: `Error: ${error}` }))
      }
    }

    // Check both image paths
    checkImage("/images/donsun-technology.png")
    checkImage("/images/partners/donsun-technology.png")
  }, [])

  return (
    <div className="p-4 bg-gray-100 rounded-lg mt-8">
      <h3 className="text-lg font-bold mb-2">Image Debug Information</h3>
      <ul className="space-y-2">
        {Object.entries(imageStatus).map(([path, status]) => (
          <li key={path} className="flex flex-col">
            <span className="font-medium">{path}:</span>
            <span className={status === "Available" ? "text-green-600" : "text-red-600"}>{status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
