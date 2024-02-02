const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      timers: require.resolve('timers-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
