import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

// NOTE: I used https://hapworthinternational.com as the canonical site URL —
// change `metadataBase` if your production domain is different.
export const metadata: Metadata = {
  metadataBase: new URL("https://hapworthinternational.com"),
  title: {
    default: "Hapworth International - Where Ambition Meets Opportunity",
    template: "%s | Hapworth International",
  },
  description:
    "Empowering African talent by connecting them with sustainable and rewarding career opportunities abroad.",
  keywords: [
    "international careers",
    "paid internships",
    "visa services",
    "passport assistance",
    "IELTS classes",
    "CV services",
    "career placement",
    "Hapworth International",
    "Africa to abroad",
  ],
  authors: [{ name: "Hapworth International", url: "https://hapworthinternational.com" }],
  creator: "Hapworth International",
  generator: "v0.app",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    other: [{ rel: "shortcut icon", url: "/logo.jpg" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  alternates: {
    canonical: "https://hapworthinternational.com",
  },
  openGraph: {
    title: "Hapworth International - Where Ambition Meets Opportunity",
    description:
      "Empowering African talent by connecting them with sustainable and rewarding career opportunities abroad.",
    url: "https://hapworthinternational.com",
    siteName: "Hapworth International",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hapworth International Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapworth International",
    description:
      "Empowering African talent by connecting them with sustainable and rewarding career opportunities abroad.",
    images: ["/logo.jpg"],
    creator: "@hapworthinternational",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com",
    logo: "https://hapworthinternational.com/logo.jpg",
    sameAs: [
      "https://instagram.com/hapworthinternational",
      "https://facebook.com/hapworthinternational",
      "https://x.com/hapworthinternational",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hapworthinternational@gmail.com",
        contactType: "customer support",
        areaServed: "Africa",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GD1P3N81MH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GD1P3N81MH');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
