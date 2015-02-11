(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.Container = require('./components/Container.jsx')(React);
window.Column = require('./components/Column.jsx')(React);
window.Row = require('./components/Row.jsx')(React);


},{"./components/Column.jsx":2,"./components/Container.jsx":3,"./components/Row.jsx":4}],2:[function(require,module,exports){
module.exports = function (React) {
  return React.createClass({
    displayName: 'Column',
    propTypes: {
      className: React.PropTypes.string,
      extraSmall: React.PropTypes.number,
      extraSmallOffset: React.PropTypes.number,
      small: React.PropTypes.number,
      smallOffset: React.PropTypes.number,
      medium: React.PropTypes.number,
      mediumOffset: React.PropTypes.number,
      large: React.PropTypes.number,
      largeOffset: React.PropTypes.number
    },
    getDefaultProps: function () {
      return {
        className: '',
        extraSmall: 0,
        extraSmallOffset: 0,
        small: 0,
        smallOffset: 0,
        medium: 0,
        mediumOffset: 0,
        large: 0,
        largeOffset: 0
      }
    },
    getColumnWidths: function () {
      var colWidths = [];

      // Column widths
      if (this.props.extraSmall !== 0) {
        colWidths.push('col-xs-' + this.props.extraSmall);
      }
      if (this.props.small !== 0 && this.props.small !== this.props.extraSmall) {
        colWidths.push('col-sm-' + this.props.small);
      }
      if (this.props.medium !== 0 && this.props.medium !== this.props.small) {
        colWidths.push('col-md-' + this.props.medium);
      }
      if (this.props.large !== 0 && this.props.large !== this.props.medium) {
        colWidths.push('col-lg-' + this.props.large);
      }

      return colWidths;
    },
    getColumnOffsets: function () {
      var offsets = [];

      // Column offsets
      if (this.props.extraSmallOffset !== 0) {
        offsets.push('col-xs-offset-' + this.props.extraSmallOffset);
      }
      if (this.props.smallOffset !== 0) {
        offsets.push('col-sm-offset-' + this.props.smallOffset);
      }
      if (this.props.mediumOffset !== 0) {
        offsets.push('col-md-offset-' + this.props.mediumOffset);
      }
      if (this.props.largeOffset !== 0) {
        offsets.push('col-lg-offset-' + this.props.largeOffset);
      }

      return offsets;
    },
    render: function () {
      // Create class name
      var className = [];

      // Column widths
      className = className.concat(this.getColumnWidths());

      // Column offsets
      className = className.concat(this.getColumnOffsets());

      return (
        React.createElement("div", {className:  className.join(' ') + ' ' + this.props.className}, 
           this.props.children
        )
      )
    }
  });
}


},{}],3:[function(require,module,exports){
module.exports = function (React) {
  return React.createClass({
    displayName: 'Container',
    propTypes: {
      className: React.PropTypes.string,
      fluid: React.PropTypes.bool
    },
    getDefaultProps: function () {
      return {
        className: '',
        fluid: false
      }
    },
    render: function () {
      return (
        React.createElement("div", {className:  'container' + (this.props.fluid ? '-fluid' : '') + ' ' + this.props.className}, 
           this.props.children
        )
      )
    }
  });
}


},{}],4:[function(require,module,exports){
module.exports = function (React) {
  return React.createClass({
    displayName: 'Row',
    propTypes: {
      className: React.PropTypes.string
    },
    getDefaultProps: function () {
      // Return an empty class name as default
      return {
        className: ''
      }
    },
    render: function () {
      return (
        React.createElement("div", {className:  'row ' + this.props.className}, 
          /* Render children */ 
           this.props.children
        )
      )
    }
  });
}


},{}]},{},[1]);
