/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sonrieparavivirmejor.com',
            },
        ],
    },
};

export default nextConfig;
