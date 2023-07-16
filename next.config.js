/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  modularizeImports: {
    '@mui/icons-material/?(((\\w*)?/?)*)': {
        transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
    }
},
};

module.exports = nextConfig;
