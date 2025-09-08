"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"
import QuoteRequestModal from "@/components/quote-request-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (typeof document !== "undefined") {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: "smooth" })
    }
    if (isOpen) setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {hasMounted ? (
              imgError ? (
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  U
                </div>
              ) : (
                <img
                  src="https://i.ibb.co/RkNpdNRs/LOGO.png"
                  alt="Unistar Logo"
                  className="h-8 w-auto rounded-full"
                  onError={() => {
                    console.error("Logo image failed to load")
                    setImgError(true)
                  }}
                />
              )
            ) : null}
            <span className="hidden font-bold sm:inline-block">Unistar Hi-Tech Systems</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-auto mr-4">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            About
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
              Solutions <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/solutions" className="w-full cursor-pointer">
                  Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/manufacturing" className="w-full cursor-pointer">
                  Manufacturing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/certifications" className="w-full cursor-pointer">
                  Certifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 md:ml-auto">
          <div className="hidden md:block">
            <Button onClick={() => setQuoteModalOpen(true)}>Request a Quote</Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  About
                </a>

                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-lg font-medium mb-2">Solutions</p>
                  <div className="flex flex-col gap-3 pl-2">
                    <Link
                      href="/solutions"
                      className="text-base font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      href="/manufacturing"
                      className="text-base font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Manufacturing
                    </Link>
                    <Link
                      href="/certifications"
                      className="text-base font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Certifications
                    </Link>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  Contact
                </a>

                <Button
                  className="w-full mt-4"
                  onClick={() => {
                    setIsOpen(false)
                    setQuoteModalOpen(true)
                  }}
                >
                  Request a Quote
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <QuoteRequestModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </header>
  )
}
