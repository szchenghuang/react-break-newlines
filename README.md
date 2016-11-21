[![NPM Package](https://img.shields.io/npm/v/react-break-newlines.svg)](https://www.npmjs.org/package/react-break-newlines)
[![Dependency status](https://david-dm.org/szchenghuang/react-break-newlines/status.svg)](https://david-dm.org/szchenghuang/react-break-newlines/)
[![devDependency status](https://david-dm.org/szchenghuang/react-break-newlines/dev-status.svg)](https://david-dm.org/szchenghuang/react-break-newlines/?type=dev)

# react-break-newlines #

Break a string to lines at newlines, and either wrap each line by a configurable
wrapper or append a <br /> to each line.

## Install ##

```sh
npm install react-break-newlines
```

## Usage ##

```js
import breakNewlines from 'react-break-newlines';

// The string to break.
var str = 'paragraphs\nwith\nnewlines';

// Case 1: Break without a wrapper.
breakNewlines( str );
// Gives [
//   paragraphs<br key="0">,
//   with<br key="1">,
//   newlines<br key="2">
// ]

// Case 2: Break with a <p> wrapper.
breakNewlines( str, 'p' ); // Or breakNewlines( str, <p /> );
// Both give
// [
//   <p key="0">paragraphs</p>,
//   <p key="1">with</p>,
//   <p key="2">newlines</p>
// ]

// Case 3: Break with a wrapper made of a React component.
const Wrapper = props => <div>Wrapper { props.children }</div>;
breakNewlines( str, Wrapper ); // Or breakNewlines( str, <Wrapper /> );
// Both give
// [
//   <Wrapper key="0"><div>Wrapper paragraphs</div></Wrapper>,
//   <Wrapper key="1"><div>Wrapper with</div></Wrapper>,
//   <Wrapper key="2"><div>Wrapper newlines</div></Wrapper>
// ]
```

## License ##

MIT. See [LICENSE.md](http://github.com/szchenghuang/react-break-newlines/blob/master/LICENSE.md) for details.
