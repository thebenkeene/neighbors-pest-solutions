import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
  },
  // Enable compression
  compress: true,
  // Power by header removal
  poweredByHeader: false,
};

export default nextConfig;
