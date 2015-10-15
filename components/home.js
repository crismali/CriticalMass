'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} = React;

var {movies} = require('../app/routes');

module.exports = React.createClass({
  goToMovies() {
    this.props.navigator.push(movies());
  },

  render() {
    return (
      <View>
        <Text>
          Home!
        </Text>

        <TouchableOpacity onPress={this.goToMovies}>
          <Text>
            Movies
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});
