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
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '/v0/b/official-website-prod-1a724.appspot.com/**',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
