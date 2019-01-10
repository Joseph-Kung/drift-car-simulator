const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './'),
    filename: 'main.js'
  },
  devtool: 'source-map'
}