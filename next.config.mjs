/** @type {import('next').NextConfig} */
const nextConfig = {
   
     images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.unsplash.com',
            port: '',
            search: '',
          },
        ],
      },
};

export default nextConfig;
