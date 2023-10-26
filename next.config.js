/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: '/interactive-card-details-form',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
}

module.exports = nextConfig
