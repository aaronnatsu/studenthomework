"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const yourGenres = prompt ('А какие жанры предпочитаеш');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: yourGenres,
  privat: false,
};

const a = prompt('Один из просмотренных фильмов?'),
  b = prompt('Ну и как оно'),
  c = prompt('Один из просмотренных фильмов?'),
  d = prompt('Ну и как оно');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);