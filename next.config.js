/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/YAP-Default-J',
  assetPrefix: '/YAP-Default-J/',
  images: { unoptimized: true },
  trailingSlash: true
}

module.exports = nextConfig