const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    guide: './ui_framework/doc_site/src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'ui_framework/doc_site/build'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src/ui_framework/doc_site'),
     'node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', {'modules': false}],
      },
    }, {
      test: /\.scss$/,
      use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html',
      exclude: /node_modules/
    }, {
      test: require.resolve('jquery'),
      loader: 'expose?jQuery!expose?$'
    }]
  }
};
