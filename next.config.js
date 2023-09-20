/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEWS_API_KEY: process.env.NEWS_API_KEY,
        NEWS_BASE_URL: process.env.NEWS_BASE_URL,
    }
}

module.exports = nextConfig
