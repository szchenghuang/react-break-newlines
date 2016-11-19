[![NPM Package](https://img.shields.io/npm/v/react-break-newlines.svg)](https://www.npmjs.org/package/react-break-newlines)
[![Dependency status](https://david-dm.org/szchenghuang/react-break-newlines/status.svg)](https://david-dm.org/szchenghuang/react-break-newlines/)
[![devDependency status](https://david-dm.org/szchenghuang/react-break-newlines/dev-status.svg)](https://david-dm.org/szchenghuang/react-break-newlines/?type=dev)

# react-break-newlines #

Break a string to lines at newlines and wrap each line by a configurable wrapper.

## Install ##

```sh
npm install react-break-newlines
```

## Usage ##

```js
import breakNewlines from 'react-break-newlines';

var str = 'paragraphs\nwith\nnewlines';

var linesWrapped = breakNewlines( str );
// linesWrapped => [
//   <p key="0">paragraphs</p>,
//   <p key="1">with</p>,
//   <p key="2">newlines</p>
// ]
```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-break-newlines/blob/master/LICENSE.md) for details.
