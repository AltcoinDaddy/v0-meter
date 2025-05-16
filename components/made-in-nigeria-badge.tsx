import Image from "next/image"

interface MadeInNigeriaBadgeProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function MadeInNigeriaBadge({ className = "", size = "md" }: MadeInNigeriaBadgeProps) {
  // Size configurations
  const sizes = {
    sm: {
      container: "px-2 py-1 rounded-md",
      text: "text-xs",
      flag: { width: 16, height: 10 },
    },
    md: {
      container: "px-3 py-1.5 rounded-lg",
      text: "text-sm",
      flag: { width: 20, height: 14 },
    },
    lg: {
      container: "px-4 py-2 rounded-lg",
      text: "text-base",
      flag: { width: 24, height: 16 },
    },
  }

  const currentSize = sizes[size]

  return (
    <div className={`bg-white/90 backdrop-blur-sm shadow-sm flex items-center ${currentSize.container} ${className}`}>
      <Image
        src="https://i.ibb.co/hRwXXs0N/nigerian-flag.png"
        alt="Nigerian Flag"
        width={currentSize.flag.width}
        height={currentSize.flag.height}
        className="mr-2"
      />
      <span className={`font-medium ${currentSize.text}`}>Proudly Made in Nigeria</span>
    </div>
  )
}
