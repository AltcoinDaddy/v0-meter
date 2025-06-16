/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Disable image optimization to avoid issues in preview
    domains: ['v0.blob.com'], // Allow images from v0.blob.com
  },
  // Ensure static assets are properly handled
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '',
  // Disable strict mode for development to avoid double renders
  reactStrictMode: false,
  // Add experimental features to help with WebAssembly issues
  experimental: {
    esmExternals: false,
  },
  // Webpack configuration to handle WebAssembly issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }
    
    // Handle WebAssembly modules
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }
    
    return config
  },
}

export default nextConfig
