'use strict';

import React from 'react';

/**
 * Break a string to lines at newlines and wrap each line by a configurable wrapper.
 *
 * @param {String} str A string to be splitted.
 * @param {Object} wrapper A React element to wrap lines.
 * @return {Object} An array of wrapped lines.
 */
const newline = /(?:\r\n|\n\r|\r|\n)/g;
const breakNewlines = function( str, wrapper ) {
  if ( typeof str !== 'string') {
    throw 'Not a string.'
  }

  var index = 0;
  return str.split( newline ).map( function( line ) {
    if ( line.length ) {
      return React.cloneElement( wrapper, { key: index++ }, line );
    }
  });
};

//#############################################################################
// Exports.
//#############################################################################
module.exports = breakNewlines;
