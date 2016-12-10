'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tracker = undefined;

var _trackr = require('trackr');

Object.defineProperty(exports, 'Tracker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_trackr).default;
  }
});

var _stdReactiveVar = require('./std-reactive-var');

var _stdReactiveVar2 = _interopRequireDefault(_stdReactiveVar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _stdReactiveVar2.default; // Package goes here