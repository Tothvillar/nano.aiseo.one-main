import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 配置 GitHub Pages 仓库子路径，假设仓库名为 nano.aiseo.one-main
  basePath: '/nano.aiseo.one-main',
  assetPrefix: '/nano.aiseo.one-main/',
};

export default nextConfig;
