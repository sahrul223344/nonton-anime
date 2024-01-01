/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimeList.net"
            }
        ]
    }
}

module.exports = nextConfig
