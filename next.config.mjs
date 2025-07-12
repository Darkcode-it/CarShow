/** @type {import('next').NextConfig} */
const nextConfig = {
    // استاتیک سازی
    output: 'export',
    images: { unoptimized: true },
    // هیچ basePath و assetPrefix ای نذاریم
  };
  
  export default nextConfig;
  