"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    if (isOpen) setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/unistar-logo.jpeg"
              alt="Unistar Logo"
              width={40}
              height={40}
              className="h-8 w-auto rounded-full"
            />
            <span className="hidden font-bold sm:inline-block">Unistar Hi-Tech Systems</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 ml-auto mr-4">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>

          {/* About link that scrolls to the about section */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            About
          </a>

          {/* Solutions dropdown */}
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

          {/* Contact link that scrolls to the contact section */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2 md:ml-auto">
          <Link href="/contact" className="hidden md:block">
            <Button>Request a Quote</Button>
          </Link>
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

                {/* About link in mobile menu */}
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  About
                </a>

                {/* Update mobile menu with grouped items */}
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

                {/* Contact link in mobile menu */}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                >
                  Contact
                </a>

                <Link href="/contact" className="mt-4">
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Request a Quote
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
