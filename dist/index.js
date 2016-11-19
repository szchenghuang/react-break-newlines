'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Break a string to lines at newlines and wrap each line by a configurable wrapper.
 *
 * @param {String} str A string to be splitted.
 * @param {Object} wrapper A React element to wrap lines.
 * @return {Object} An array of wrapped lines.
 */
var newline = /(?:\r\n|\n\r|\r|\n)/g;
var breakNewlines = function breakNewlines(str, wrapper) {
  if (typeof str !== 'string') {
    throw 'Not a string.';
  }

  var index = 0;
  return str.split(newline).map(function (line) {
    if (line.length) {
      return _react2.default.cloneElement(wrapper, { key: index++ }, line);
    }
  });
};

//#############################################################################
// Exports.
//#############################################################################
module.exports = breakNewlines;