/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    hygraphURL: process.env.HYGRAPH_URL,
    splineURL: process.env.SPLINE_URL
  },
}