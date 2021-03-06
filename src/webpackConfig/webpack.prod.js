/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { resolve } from 'path';
import merge from 'webpack-merge';
import themes from '../Themes';
import common from './webpack.common';
import plugins from './plugins/prod';
import loaders from './loaders/prod';

export default merge(common, {
  entry: {
    app: [
      resolve(themes.getPath(), 'index.jsx'),
      resolve(__dirname, './modules/cache'),
    ],
  },
  module: {
    rules: loaders,
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: resolve(themes.getPath(), 'public'),
    publicPath: './',
  },
  plugins,
  stats: 'errors-only',
});
