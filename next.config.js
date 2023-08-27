/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader", // 3. Inject styles into DOM
        "css-loader", // 2. Turns css into commonjs
        "sass-loader", // 1. Turns sass into css
      ],
    },
  ]
}

module.exports = nextConfig
