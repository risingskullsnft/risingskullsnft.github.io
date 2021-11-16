const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    port: 4000,
    public: "0.0.0.0:4000",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/web3modal-vue/" : "/",
  transpileDependencies: ["vuetify", "web3modal-vue"],
};
