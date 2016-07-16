module.exports = function (React) {
  return React.createClass({
    displayName: 'Row',
    propTypes: {
      className: React.PropTypes.string,
      style: React.PropTypes.object
    },
    getDefaultProps: function () {
      // Return an empty class name as default
      return {
        className: '',
        style: {}
      }
    },
    render: function () {
      return (
        React.createElement("div", {className:  'row ' + this.props.className, style:  this.props.style}, 
          /* Render children */ 
           this.props.children
        )
      )
    }
  });
}
