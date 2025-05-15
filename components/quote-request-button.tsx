"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import QuoteRequestModal from "@/components/quote-request-modal"
import { useState } from "react"

interface QuoteRequestButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function QuoteRequestButton({
  variant = "default",
  size = "default",
  className = "",
  children = "Request a Quote",
  ...props
}: QuoteRequestButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)} {...props}>
        {children}
      </Button>
      <QuoteRequestModal open={open} onOpenChange={setOpen} />
    </>
  )
}
