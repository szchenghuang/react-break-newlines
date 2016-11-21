'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newline = /(?:\r\n|\n\r|\r|\n)/g;

/**
 * Break a string to lines at newlines and wrap each line by a configurable wrapper.
 *
 * @param {String} str A string to be splitted.
 * @param {String|React Element|React Component} wrapper A wrapper to wrap lines.
 *   Lines will not be wrapped without a given wrapper. They are simply followed
 *   by a  <br /> tag each.
 * @return {Object} An array of wrapped lines.
 */
var breakNewlines = function breakNewlines(str, wrapper) {
  if (typeof str !== 'string') {
    throw '[react-break-newlines] Expect a string to break.';
  }

  var hasWrapper = !!wrapper;
  var isWrapperReactElement = _react2.default.isValidElement(wrapper);

  var index = 0;
  var lines = str.split(newline).filter(function (line) {
    return !!line;
  }).map(function (line) {
    if (line.length) {
      if (!hasWrapper) {
        return [line, _react2.default.createElement('br', { key: index++ })];
      }

      return _react2.default[isWrapperReactElement ? 'cloneElement' : 'createElement'](wrapper, { key: index++ }, line);
    }
  });

  return hasWrapper ? lines : [].concat.apply([], lines);
};

//#############################################################################
// Exports.
//#############################################################################
module.exports = breakNewlines;