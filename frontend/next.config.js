/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  
  // Configure environment variables
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000',
  },
  
  // Configure API routes timeout
  api: {
    responseLimit: '8mb',
  },
};

module.exports = nextConfig;
