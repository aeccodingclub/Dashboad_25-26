const isGitHubPages = process.env.GITHUB_PAGES === 'true';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/Dashboad_25-26' : '',
  assetPrefix: isGitHubPages ? '/Dashboad_25-26/' : '/',
  trailingSlash: true,
  outputFileTracingExcludes: {
    '/api/*': ['src/app/api/**/*'],
  }
};

export default nextConfig;
