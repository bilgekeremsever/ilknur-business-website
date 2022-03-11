/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "./styles/abstract.scss";`,
  },
}

module.exports = nextConfig
