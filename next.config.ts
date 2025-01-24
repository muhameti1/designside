import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures static files are exported to the 'out' directory
  // Add any other Next.js config options here
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
