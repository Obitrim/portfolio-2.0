/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },

  // SVGR + server-only package externals
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    if (isServer) {
      config.externals.push('googleapis', 'google-auth-library');
    }

    return config;
  },
};

module.exports = nextConfig;
