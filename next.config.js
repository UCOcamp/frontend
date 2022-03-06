/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://ucocamp.github.io/frontend/',
  },
  assetPrefix: './'
}