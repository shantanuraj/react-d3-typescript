module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 1337
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
