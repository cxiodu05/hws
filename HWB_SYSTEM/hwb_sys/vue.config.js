const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave:false,
  publicPath: '/',
  outputDir: '../hwb_sys_s/src/dist',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8000/',
        ws: false,
        security: false,
        // pathRewrite: { '^/api': '' }
      }
    }
  }
})
