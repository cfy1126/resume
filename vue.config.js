module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/resume'
    : '/',
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: false
      }
    }
  },
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development')
      return args
    })
  }
}
