/** @type {import('next').NextConfig} */
module.exports = {
  productionBrowserSourceMaps: true,
  logging: {
    level: 'verbose',
  },
  experimental: {
    serverActions: true,
  },
}
