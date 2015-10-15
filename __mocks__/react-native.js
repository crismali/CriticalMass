var React = require('react/addons');
var ReactNative = React;

ReactNative.StyleSheet = {
  create: function(styles) {
    return styles;
  }
};

ReactNative.View = React.createClass({render() {}});
ReactNative.Text = React.createClass({render() {}});
ReactNative.TouchableOpacity = React.createClass({render() {}});

module.exports = ReactNative;
