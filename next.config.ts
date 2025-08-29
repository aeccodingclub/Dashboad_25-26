const isGitHubPages = process.env.GITHUB_PAGES === 'true';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/Dashboard_25-26' : '',
  outputFileTracingExcludes: {
    '/api/*': ['src/app/api/**/*'],
  }
};

export default nextConfig;
