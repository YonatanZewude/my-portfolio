const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    os: require.resolve("os-browserify/browser"),
    crypto: require.resolve("crypto-browserify"),
    path: require.resolve("path-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer/"),
    process: require.resolve("process/browser"),
    vm: require.resolve("vm-browserify"),
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
