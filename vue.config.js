const { defineConfig, devServer } = require('@vue/cli-service')
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: 'all',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.cert')),
    },
    proxy: {
      '/api': {
        target: 'https://chocolanet-a9c27126050c.herokuapp.com/',
        changeOrigin: true,
        secure: true,
      },
    },
  }
})

