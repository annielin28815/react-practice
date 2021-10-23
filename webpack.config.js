const path = require('path');

module.exports= {
  entry: './02.compire_jsx/main.jsx',
  output: {
    path: path.resolve(__dirname, '01.helloworld'),
    filename: 'main.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}