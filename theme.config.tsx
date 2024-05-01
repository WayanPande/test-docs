import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <img
      src="https://avatars.githubusercontent.com/u/45302224?v=4"
      style={{ width: "3rem", borderRadius: "0.5rem" }}
    />
  ),
  docsRepositoryBase: "https://github.com/avatardev/onboarding",
  footer: {
    text: "Avatar Solutions Onboarding",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Avatar Solution",
    };
  },
};

export default config;
