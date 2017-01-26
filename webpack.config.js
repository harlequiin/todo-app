module.exports = {
  entry: __dirname + "/src/js/index.js",
  output: {
    path: __dirname + "/src",
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions:['', '.js']
  }
}