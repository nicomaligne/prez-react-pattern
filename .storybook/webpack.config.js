const webpack = require.main.require("webpack")
const autoprefixer = require.main.require("autoprefixer")
const autoPrefixerPlugin = autoprefixer({ browsers: ["last 2 versions"] })
console.log("LLLLLOOOOOOLL")
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          plugins: [autoPrefixerPlugin]
        }
      }
    ]
  })

  return config
}
