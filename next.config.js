/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Redirect /studio to Sanity Studio
  async rewrites() {
    return [
      {
        source: "/studio/:path*",
        destination: "/studio/:path*",
      },
    ];
  },

  experimental: {
    // Optimise packages
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Bundle analysis: set ANALYZE=true to enable
  ...(process.env.ANALYZE === "true"
    ? { bundleAnalyzer: { enabled: true } }
    : {}),
};

module.exports = nextConfig;
