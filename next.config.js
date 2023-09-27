/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
}
