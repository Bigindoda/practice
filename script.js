"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean(false)
};

const oneOfTheLastFilms = prompt ('Один из последних просмотренных фильмов?', ''),
      raiting = +prompt('На сколько оцениваете его?', ''),
      oneOfTheLastFilms2 = prompt ('Один из последних просмотренных фильмов?', ''),
      raiting2 = +prompt('На сколько оцениваете его?', '');



personalMovieDB.movies[oneOfTheLastFilms] = raiting;
personalMovieDB.movies[oneOfTheLastFilms2] = raiting2;