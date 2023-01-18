/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/auth/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

module.exports = nextConfig
