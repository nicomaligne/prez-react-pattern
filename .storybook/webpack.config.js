const autoprefixer = require.main.require("autoprefixer");
const webpack = require.main.require("webpack");
const autoPrefixerPlugin = autoprefixer({ browsers: ["last 2 versions"] });

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoPrefixerPlugin]
        }
      },
      { loader: "sass-loader" }
    ]
  });

  return config;
};
