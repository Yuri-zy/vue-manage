const { defineConfig } = require('@vue/cli-service')
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   plugins: [new NodePolyfillPlugin()],
  //   externals: {
  //     fs: require('fs'),
  //     net: require('net')
  //   }
  // }
})

// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

// configureWebpack: (config) => {
//   const plugins = []
//   plugins.push(new NodePolyfillPlugin)
// }
// or
// configureWebpack:{
//   plugins:[new NodePolyfillPlugin()]
// }
