import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Pricing page hidden until revenue model finalized — uncomment to re-enable
  async redirects() {
    return [
      {
        source: "/pricing",
        destination: "/",
        permanent: false, // 307 temporary — easy to reverse
      },
    ];
  },
};

export default nextConfig;
