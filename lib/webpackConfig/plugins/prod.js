'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _compressionWebpackPlugin = require('compression-webpack-plugin');

var _compressionWebpackPlugin2 = _interopRequireDefault(_compressionWebpackPlugin);

var _offlinePlugin = require('offline-plugin');

var _offlinePlugin2 = _interopRequireDefault(_offlinePlugin);

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = [].concat(_toConsumableArray(_common2.default), [new _offlinePlugin2.default(), new _webpack2.default.optimize.UglifyJsPlugin({
  compress: {
    warnings: true,
    screw_ie8: true,
    conditionals: true,
    unused: true,
    comparisons: true,
    sequences: true,
    dead_code: true,
    evaluate: true,
    if_return: true,
    join_vars: true
  },
  output: {
    comments: false
  },
  comments: false,
  sourceMap: true
}), new _compressionWebpackPlugin2.default({
  asset: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$/,
  minRatio: 0.8
})]);