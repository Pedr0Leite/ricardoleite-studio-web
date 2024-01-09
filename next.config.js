/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    hygraphURL: process.env.HYGRAPH_URL,
    splineURL: process.env.SPLINE_URL,
    splineURL2: process.env.SPLINE_URL2
  },
  images: {
    domains: ['media.graphassets.com'],
  },
}