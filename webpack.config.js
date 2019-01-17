const path = require('path');


module.exports = {
  mode: 'development',
  entry: {
    client: './client/index.jsx',
    ssr: './src/ssr/ssrindex.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
  },
  devServer: {
    publicPath: '/dist',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
};
