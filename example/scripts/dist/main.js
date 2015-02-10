var mount = document.getElementById('js-example');

var Main = React.createClass({displayName: "Main",
  render: function () {
    return (
      React.createElement(Container, {fluid: true }, 
        React.createElement(Row, null, 
          React.createElement(Column, {extraSmall: 12, 
                  small: 1, 
                  medium: 4, 
                  large: 8, 
                  largeOffset: 4 }, 
            React.createElement("p", null, 
              "Some text inside a column!"
            )
          )
        )
      )
    )
  }
});

React.render(React.createElement(Main, null), mount);
