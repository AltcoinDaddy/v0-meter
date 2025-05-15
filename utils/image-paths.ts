/**
 * Utility functions for working with image paths
 */

// Product image paths
export const productImages = {
  singlePhase: {
    ddsy111: (filename: string) => `/images/products/single-phase/ddsy111/${filename}`,
    split: (filename: string) => `/images/products/single-phase/split/${filename}`,
    keypad: (filename: string) => `/images/products/single-phase/keypad/${filename}`,
    generic: (filename: string) => `/images/products/single-phase/${filename}`,
  },
  threePhase: {
    dtsy111: (filename: string) => `/images/products/three-phase/dtsy111/${filename}`,
    commercial: (filename: string) => `/images/products/three-phase/commercial/${filename}`,
    generic: (filename: string) => `/images/products/three-phase/${filename}`,
  },
  accessories: (filename: string) => `/images/products/accessories/${filename}`,
}

// Company image paths
export const companyImages = {
  facilities: (filename: string) => `/images/company/facilities/${filename}`,
  office: (filename: string) => `/images/company/office/${filename}`,
  events: (filename: string) => `/images/company/events/${filename}`,
}

// Team image paths
export const teamImages = {
  executives: (filename: string) => `/images/team/executives/${filename}`,
  staff: (filename: string) => `/images/team/staff/${filename}`,
}

// Partner image paths
export const partnerImages = {
  technology: (filename: string) => `/images/partners/technology/${filename}`,
  distribution: (filename: string) => `/images/partners/distribution/${filename}`,
  government: (filename: string) => `/images/partners/government/${filename}`,
}

// Certification image paths
export const certificationImages = {
  sts: (filename: string) => `/images/certifications/sts/${filename}`,
  son: (filename: string) => `/images/certifications/son/${filename}`,
  nerc: (filename: string) => `/images/certifications/nerc/${filename}`,
  other: (filename: string) => `/images/certifications/other/${filename}`,
}

// Branding image paths
export const brandingImages = {
  logos: (filename: string) => `/images/branding/logos/${filename}`,
  icons: (filename: string) => `/images/branding/icons/${filename}`,
  flags: (filename: string) => `/images/branding/flags/${filename}`,
}

// Banner image paths
export const bannerImages = {
  hero: (filename: string) => `/images/banners/hero/${filename}`,
  about: (filename: string) => `/images/banners/about/${filename}`,
  products: (filename: string) => `/images/banners/products/${filename}`,
}

// Placeholder image paths
export const placeholderImages = {
  product: (filename: string) => `/images/placeholders/product-${filename}`,
  person: (filename: string) => `/images/placeholders/person-${filename}`,
  logo: (filename: string) => `/images/placeholders/logo-${filename}`,
  generic: (filename: string) => `/images/placeholders/${filename}`,
}

// Example usage:
// import { productImages } from '@/utils/image-paths';
// <Image src={productImages.singlePhase.ddsy111('front-view.jpg') || "/placeholder.svg"} alt="DDSY111 Front View" />
