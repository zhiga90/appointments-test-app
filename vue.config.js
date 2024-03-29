module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      // @/ is an alias to src/
      // so this assumes you have a file named `src/style/variables.sass`
      // Note: this option is named as "data" in sass-loader v7
      sass: {
        prependData: '@import "~@/style/variables.sass"',
      },
    },
  },
}
