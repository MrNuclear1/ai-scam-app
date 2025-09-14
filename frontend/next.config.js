/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    esmExternals: true
  },
  // Ensure static files are copied during export
  assetPrefix: '',
  distDir: 'out'
}

export default nextConfig