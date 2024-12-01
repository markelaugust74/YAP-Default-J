/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'static',
  distDir: 'dist',
  assetPrefix: '/YAP-Default-J/',
  basePath: '/YAP-Default-J',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig