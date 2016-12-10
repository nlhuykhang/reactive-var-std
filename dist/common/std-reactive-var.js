'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _trackr = require('trackr');

var _trackr2 = _interopRequireDefault(_trackr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StdReactiveVar = function () {
  function StdReactiveVar(initialValue, equalsFunc) {
    (0, _classCallCheck3.default)(this, StdReactiveVar);

    this._oldValue = null;
    this._curValue = initialValue;

    this._equalFunc = equalsFunc;

    this._dep = new _trackr2.default.Dependency();
  }

  (0, _createClass3.default)(StdReactiveVar, [{
    key: '_isEqual',
    value: function _isEqual(newVal) {
      var curValue = this._curValue;

      if (curValue !== newVal) {
        return false;
      }
      // XXX: what is this? so true if curValue is undefined, null, or object? why?
      return !curValue || typeof curValue === 'number' || typeof curValue === 'boolean' || typeof curValue === 'string';
    }
  }, {
    key: 'get',
    value: function get() {
      if (_trackr2.default.active) {
        this._dep.depend();
      }
      return this._curValue;
    }
  }, {
    key: 'getOld',
    value: function getOld() {
      return this._oldValue;
    }
  }, {
    key: 'getNonReactive',
    value: function getNonReactive() {
      return this._curValue;
    }
  }, {
    key: 'set',
    value: function set(newValue) {
      if (this._equalFunc && this._equalFunc(this._curValue, newValue)) {
        return;
      }

      if (this._isEqual(newValue)) {
        return;
      }

      this._oldValue = this._curValue;
      this._curValue = newValue;

      this._dep.changed();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'StdReactiveVar{' + this.get() + '}';
    }
  }, {
    key: '_numListeners',
    value: function _numListeners() {
      return (0, _keys2.default)(this._dep._dependentsById).length;
    }
  }]);
  return StdReactiveVar;
}();

exports.default = StdReactiveVar;