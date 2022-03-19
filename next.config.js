/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./styles/abstracts/abstracts.scss";`,
  },
  images: {
    // Access a remote image, but still use the built-in Next.js Image Optimization API
    loader: "default",
    domains: ["localhost"],
  },
  async rewrites() {
    return [
      {
        source: "/hakkimda",
        destination: "/about",
      },
    ]
  },
}

module.exports = nextConfig
