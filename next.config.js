/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   env: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
   },
   typescript: {
      ignoreBuildErrors: true,
   },
}

module.exports = nextConfig
