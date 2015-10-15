'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var {movie} = require('../app/routes');

module.exports = React.createClass({
  goToMovie() {
    this.props.navigator.push(movie(4));
  },

  render() {
    return (
      <View>
        <Text>
          movies page
        </Text>

        <TouchableOpacity onPress={this.goToMovie}>
          <Text>
            Single movie
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});
