module.exports = function (React) {
  return React.createClass({
    displayName: 'Container',
    propTypes: {
      className: React.PropTypes.string,
      fluid: React.PropTypes.bool,
      style: React.PropTypes.object,
    },
    getDefaultProps: function () {
      return {
        className: '',
        fluid: false,
        style: {}
      }
    },
    render: function () {
      return (
        <div className={ 'container' + (this.props.fluid ? '-fluid' : '') + ' ' + this.props.className } style={ this.props.style }>
          { this.props.children }
        </div>
      )
    }
  });
}
