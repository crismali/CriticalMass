'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} = React;

module.exports = React.createClass({
  goBack() {
    this.props.navigator.pop();
  },

  renderBackButton() {
    var routeStack = this.props.navState.routeStack;
    if (routeStack && routeStack.length > 1) {
      return (
        <TouchableOpacity onPress={this.goBack}>
          <Text>
            {'<'} Go back
          </Text>
        </TouchableOpacity>
      );
    }
  },

  renderBreadCrumbs() {
    return this.props.navState.routeStack.map((route) =>
      <Text>
        {route.name}
      </Text>
    );
  },

  render() {
    return (
      <View>
        <View>
          {this.renderBackButton()}
        </View>
        <View>
          {this.renderBreadCrumbs()}
        </View>
      </View>
    );
  }
});
