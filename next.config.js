/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/interactive-card-details-form',
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
