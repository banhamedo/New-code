/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الأداء
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },

  // إعدادات الصور
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  // إعدادات الأمان
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },

  // إعدادات إعادة التوجيه
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // إعدادات إعادة الكتابة
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },

  // تحسين البناء - تم إزالته في Next.js 15

  // إعدادات التطبيق
  poweredByHeader: false,
  compress: true,

  // إعدادات التطوير
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 