const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  entry:{
    profil: './src/profil.js',
    home: './src/index.js',
  },
  output: {
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: 'index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'profil.html',
      chunks: ['profil'],
    }),
  ],
};