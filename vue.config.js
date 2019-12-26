module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://wap.showstart.com',
        // ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
      // '/api': {
      //   target: 'https://wap.showstart.com',
      //   // ws: true,
      //   changeOrigin: true
      // },
    }
  }
}
