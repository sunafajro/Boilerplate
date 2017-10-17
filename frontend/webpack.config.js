module.exports = {
    entry: [
      './src/index.tsx'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [{
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  };