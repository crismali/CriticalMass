'use strict';

function makeRoute(name, id) {
  return { name: name, id: id };
}

module.exports = {
  home() {
    return makeRoute('home');
  },

  movies() {
    return makeRoute('movies');
  },

  movie(id) {
    return makeRoute('movie', id);
  }
};
