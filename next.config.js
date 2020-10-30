/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */

const path = require("path");

module.exports = {
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1800, 2400],

    domains: ["cdn.sanity.io"],
  },
  /**
   * For absolute imports
   */
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join("src"), path.join(__dirname, "node_modules"), "./"],
        extensions: [".tsx", ".ts", ".js"],
      },
    };
  },
};
