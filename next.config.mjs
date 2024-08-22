/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avataaars.io',
                pathname: '**',
            },
        ],
        dangerouslyAllowSVG: true, // تفعيل السماح بـ SVG
    },
};

export default nextConfig;
