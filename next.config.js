/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/gdsc-mitwpu-website-dev.appspot.com/**',
            },
        ],
    },
}

module.exports = nextConfig
