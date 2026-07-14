const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserPagesRepository = repositoryName.endsWith(".github.io");
const inferredBasePath =
  isGitHubPagesBuild && repositoryName && !isUserPagesRepository
    ? `/${repositoryName}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    remotePatterns: [],
    unoptimized: true
  }
};

export default nextConfig;
