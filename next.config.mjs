/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['i.ibb.co'], // Add any external domains you're using
    unoptimized: true, // Set to true to bypass image optimization - helps with preview environments
  },
}

export default nextConfig
