import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { DebugImage } from "@/components/debug-image"

const inter = Inter({ subsets: ["latin"] })

// In preview environments, we should use relative paths
const baseUrl = "" // Use empty string to default to relative paths

export const metadata = {
  title: "Unistar Hi-Tech Systems Limited - Nigeria's Leading Meter Manufacturer",
  description:
    "Unistar Hi-Tech Systems Limited is Nigeria's leading manufacturer of electric prepaid meters, serving the nation's power sector since 2003.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/unistar-logo.jpeg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/unistar-logo.jpeg" />
        {/* Add debugging script */}
        <Script id="image-debug">
          {`
          window.addEventListener('error', function(e) {
            if (e.target.tagName === 'IMG') {
              console.error('Image load error:', e.target.src);
              e.target.style.border = '2px solid red';
              e.target.style.padding = '5px';
              const errorMsg = document.createElement('div');
              errorMsg.textContent = 'Image failed to load';
              errorMsg.style.color = 'red';
              errorMsg.style.fontSize = '12px';
              e.target.parentNode.appendChild(errorMsg);
            }
          }, true);
          `}
        </Script>
        {/* Expose VERCEL_URL to client-side JavaScript */}
        <Script id="env-script">
          {`window.ENV = { 
            VERCEL_URL: "${process.env.VERCEL_URL || ""}"
          }`}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          {/* Add the debug component in development and preview */}
          {(process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview") && <DebugImage />}
        </ThemeProvider>
      </body>
    </html>
  )
}
