'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the Apache 2.0 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

var _path = require('path');

var _chalk = require('chalk');

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require('html-webpack-plugin');

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _stringReplaceWebpackPlugin = require('string-replace-webpack-plugin');

var _stringReplaceWebpackPlugin2 = _interopRequireDefault(_stringReplaceWebpackPlugin);

var _progressBarWebpackPlugin = require('progress-bar-webpack-plugin');

var _progressBarWebpackPlugin2 = _interopRequireDefault(_progressBarWebpackPlugin);

var _Themes = require('../../Themes');

var _Themes2 = _interopRequireDefault(_Themes);

var _convertLanguageToISO = require('../helpers/convertLanguageToISO');

var _convertLanguageToISO2 = _interopRequireDefault(_convertLanguageToISO);

var _environment = require('../../environment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appSettings = process.env.settings;
var appConfig = appSettings.getAppSettings();
var frontendSettings = appSettings.getFrontendSettings();
var componentsConfig = appSettings.getComponentsSettings();

var THEME_PATH = _Themes2.default.getPath();
var THEME_NAME = _Themes2.default.getName();
var PUBLIC_FOLDER = 'public';
var LANG = (0, _convertLanguageToISO2.default)(appConfig.language);

var plugins = [new _stringReplaceWebpackPlugin2.default(), new _htmlWebpackPlugin2.default({
  title: appConfig.shopName || THEME_NAME,
  filename: (0, _path.resolve)(THEME_PATH, PUBLIC_FOLDER, 'index.html'),
  template: (0, _path.resolve)(__dirname, '../templates/index.ejs'),
  inject: false,
  cache: false,
  minify: false
}), new _webpack2.default.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(_environment.ENV),
    APP_CONFIG: JSON.stringify(_extends({}, appConfig, {
      appId: appConfig.id
    })),
    COMPONENTS_CONFIG: JSON.stringify(componentsConfig),
    LANG: JSON.stringify(LANG),
    IP: JSON.stringify(frontendSettings.getIpAddress()),
    PORT: JSON.stringify(frontendSettings.getApiPort())
  }
}), new _webpack2.default.LoaderOptionsPlugin({
  debug: _environment.isDev,
  options: {
    context: THEME_PATH,
    output: {
      path: (0, _path.resolve)(THEME_PATH, PUBLIC_FOLDER)
    }
  }
}), new _webpack2.default.IgnorePlugin(), new _webpack2.default.optimize.ModuleConcatenationPlugin(), new _webpack2.default.optimize.CommonsChunkPlugin({
  minChunks: 2,
  name: 'common',
  filename: _environment.isProd ? '[name].[chunkhash].js' : '[name].js'
}), new _webpack2.default.HashedModuleIdsPlugin(), new _progressBarWebpackPlugin2.default({
  format: '  building [' + (0, _chalk.blue)(':bar') + '] [:msg] ' + (0, _chalk.green)(':percent') + ' (:elapsed seconds)',
  clear: false
})];

exports.default = plugins;