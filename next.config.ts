import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/the-wonky-wizard" : "",
  assetPrefix: isGitHubPages ? "/the-wonky-wizard/" : "",
};

export default nextConfig;
