/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Access a remote image, but still use the built-in Next.js Image Optimization API
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = nextConfig
