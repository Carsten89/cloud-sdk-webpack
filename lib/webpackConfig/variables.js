'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_LANGUAGE = exports.NODE_MODULES = exports.EXTENSIONS_PATH = undefined;

var _path = require('path');

var _getNodeModulesPath = require('./helpers/getNodeModulesPath');

var _getNodeModulesPath2 = _interopRequireDefault(_getNodeModulesPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EXTENSIONS_PATH = exports.EXTENSIONS_PATH = (0, _path.resolve)(process.cwd(), 'extensions');
var NODE_MODULES = exports.NODE_MODULES = (0, _getNodeModulesPath2.default)();
var DEFAULT_LANGUAGE = exports.DEFAULT_LANGUAGE = 'en-US';