const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/test-docs" : "";

module.exports = withNextra({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
});
