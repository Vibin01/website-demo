/** @type {import('next').NextConfig} */
const nextConfig = {
   async redirects() {
    return [
      {
        source: "/features",
        destination: "/solutions/employer/easy-calibrator",
        permanent: true,
      },

    ];
  },
     experimental: {
    esmExternals: true,
    swcPlugins: [],
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig
