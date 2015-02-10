jest.dontMock('../dist/components/Row.js');

var React = require('react/addons');
var Column = require('../dist/components/Row.js')(React);
var TestUtils = React.addons.TestUtils;
