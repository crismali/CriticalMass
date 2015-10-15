'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Navigator,
} = React;

var {
  movies,
  movie,
  home
} = require('../app/routes');

var MoviesScreen = require('./movies_screen');
var MovieScreen = require('./movie_screen');
var Home = require('./home');
var Navbar = require('./navbar');

module.exports = React.createClass({
  renderScene(route, navigator) {
    if (movies().name === route.name) {
      return (<MoviesScreen navigator={navigator} />);
    } else if (movie().name === route.name) {
      return (<MovieScreen navigator={navigator} id={route.id} />);
    } else {
      return (<Home navigator={navigator} />);
    }
  },

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Navigator
            initialRoute={home()}
            renderScene={this.renderScene}
            navigationBar={<Navbar />}
          />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'lavender',
    flex: 1,
    paddingTop: 20,
  },

  innerContainer: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  }
});
