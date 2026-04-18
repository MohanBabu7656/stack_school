/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Match all files inside the public/images and public/fonts directories
        source: '/:path*(svg|jpg|png|webp|woff2|woff|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            // Cache heavily on Vercel's Edge Network (s-maxage) and the browser (max-age) for 1 year
            value: 'public, max-age=31536000, s-maxage=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;