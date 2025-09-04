import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Unistar Hi-Tech Systems Limited - Nigeria's Leading Meter Manufacturer",
  description:
    "Unistar Hi-Tech Systems Limited is Nigeria's leading manufacturer of electric prepaid meters, serving the nation's power sector since 2003.",
  icons: {
    icon: "https://i.ibb.co/RkNpdNRs/LOGO.png",
    apple: "https://i.ibb.co/RkNpdNRs/LOGO.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Safe place for custom scripts */}
        <Script id="image-debug" strategy="afterInteractive">
          {`
            window.addEventListener('error', function(e) {
              if (e.target.tagName === 'IMG') {
                console.error('Image load error:', e.target.src);
              }
            }, true);
          `}
        </Script>
      </body>
    </html>
  )
}
