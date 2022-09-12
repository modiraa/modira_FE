// analyze.js
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfigProd = require('react-scripts/config/webpack.config')('production');

webpackConfigProd.plugins.push(new BundleAnalyzerPlugin());
webpackConfigProd.resolve.alias['react-dom'] = '@hot-loader/react-dom';

webpack(webpackConfigProd, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err);
  }
});
