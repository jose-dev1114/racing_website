import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.carterknight.racing",
        pathname: "/hubfs/**",
      },
      {
        protocol: "https",
        hostname: "www.carterknight.racing",
        pathname: "/hs-fs/**",
      },
      {
        protocol: "https",
        hostname: "*.fs1.hubspotusercontent-na1.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
