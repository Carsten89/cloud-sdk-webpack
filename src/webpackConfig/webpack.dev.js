/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { resolve } from 'path';
import merge from 'webpack-merge';
import themes from '../Themes';
import { NODE_MODULES } from './variables';
import common from './webpack.common';
import plugins from './plugins/dev';
import loaders from './loaders/dev';
import getDevConfig from './helpers/getDevConfig';

const { sourceMap } = getDevConfig();

const reactHotLoader = resolve(NODE_MODULES, 'react-hot-loader/patch');

export default merge(common, {
  entry: {
    app: [
      reactHotLoader,
      './index.jsx',
    ],
  },
  module: {
    rules: loaders,
  },
  devtool: sourceMap,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    path: resolve(themes.getPath(), 'public'),
    publicPath: '/',
  },
  plugins,
  stats: 'normal',
});
