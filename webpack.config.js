const { join } = require('path');

const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const ifProd = (plugin) => isProd ? plugin : null;
const notNull = plugin => plugin !== null;
const removeNull = plugins => plugins.filter(notNull);

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'build'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json'],
  },
  plugins: removeNull([
    ifProd(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    })),
    ifProd(new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    })),
  ]),
  devServer: {
    inline: true,
    port: 1337,
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
};
