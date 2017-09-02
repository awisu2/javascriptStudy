module.exports = {
  entry: "./src",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/',
        }
      }
    ]
  }
};