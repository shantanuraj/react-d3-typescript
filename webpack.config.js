const { join } = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'production' ? '"production"' : '"development"',
      },
    }),
  ],
  devServer: {
    inline: true,
    port: 1337,
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
};
