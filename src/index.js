'use strict';

import React from 'react';

const newline = /(?:\r\n|\n\r|\r|\n)/g;

/**
 * Break a string to lines at newlines and wrap each line by a configurable wrapper.
 *
 * @param {String} str A string to be splitted.
 * @param {String|React Element|React Component} wrapper A wrapper to wrap lines.
 *   Lines will not be wrapped without a given wrapper. They are simply followed
 *   by a  <br /> tag each.
 * @return {Object} An array of wrapped lines.
 */
const breakNewlines = function( str, wrapper ) {
  if ( typeof str !== 'string' ) {
    throw '[react-break-newlines] Expect a string to break.'
  }

  const hasWrapper = !!wrapper;
  const isWrapperReactElement = React.isValidElement( wrapper );

  let index = 0;
  const lines =
    str.split( newline )
    .filter( function( line ) { return !!line; } )
    .map( function( line ) {
      if ( line.length ) {
        if ( !hasWrapper ) {
          return [ line, <br key={ index++ } /> ];
        }

        return React[ isWrapperReactElement ? 'cloneElement' : 'createElement' ](
          wrapper,
          { key: index++ },
          line
        );
      }
    });

  return hasWrapper ? lines : [].concat.apply( [], lines );
};

//#############################################################################
// Exports.
//#############################################################################
module.exports = breakNewlines;
