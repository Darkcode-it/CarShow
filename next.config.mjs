/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // خروجی استاتیک
  output: 'export',

  // مسیر دقیق (Case‐sensitive) ریپو روی گیت‌هاب
  assetPrefix: isProd ? '/CarShow/' : '',
  basePath: isProd ? '/CarShow' : '',

  // استایل‌های CSS/JS ان‌ایمپورتی
  images: { unoptimized: true },

  // اضافه کردن اسلش انتهایی برای پوشه‌ها
  trailingSlash: true,
};

export default nextConfig;
