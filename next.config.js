/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

const redirects = async () => {
  return [
    {
      source: '/auth/login',
      destinataion: '/',
      permanent: true,
    },
  ];
};

module.exports = nextConfig;
module.exports = redirects;
