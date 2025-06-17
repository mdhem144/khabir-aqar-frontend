/** @type {import('next').NextConfig} */
export default {
  experimental: { serverActions: true },
  images: {
    domains: ['images.unsplash.com']
  },
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: true
  }
};
