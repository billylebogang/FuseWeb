const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true
}

module.exports = {
  mode: 'development',
  entry: './src/login.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle1.js'
  },
  watch: true
}