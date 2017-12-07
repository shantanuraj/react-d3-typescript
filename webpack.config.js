const { join } = require('path');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
  },
  devServer: {
    inline: true,
    port: 1337
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' }
    ]
  }
}
