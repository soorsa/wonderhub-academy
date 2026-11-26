import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo.webdevia.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "api.richtecafrica.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.richtecafrica.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "api.wonderhub.com.ng",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.wonderhub.com.ng",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
