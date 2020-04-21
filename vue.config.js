module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-pages-pages/" : "/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
