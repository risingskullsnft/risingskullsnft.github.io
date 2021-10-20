const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/main.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.glsl$/,
          use: "raw-loader",
        },
      ],
    },
    resolve: {
      alias: {
        js: path.resolve(__dirname, "src/js/"),
        components: path.resolve(__dirname, "src/components/"),
        views: path.resolve(__dirname, "src/views"),
      },
    },
  },
};
