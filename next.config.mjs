/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // مرحله‌ی Export برای Static HTML
  output: 'export',

  // اگر در حالت تولید (deploy) هستیم، آدرس پایه را زیرپوشه مخزن قرار بده
  assetPrefix: isProd ? '/my-next-app/' : '',
  basePath: isProd ? '/my-next-app' : '',

  // چون صفحه‌ی Static است، غیرفعال‌سازی بهینه‌سازی تصاویر
  images: {
    unoptimized: true
  }
};

export default nextConfig;
