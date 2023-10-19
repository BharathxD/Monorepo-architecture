module.exports = {
  reactStrictMode: true,
  // @see https://turbo.build/repo/docs/handbook/sharing-code/internal-packages#5-try-running-the-app
  transpilePackages: ["ui"],
  experimental: {
    serverActions: true,
  },
};
