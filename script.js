"use strict";

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean(false)
};



for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b =  +prompt('На сколько оцениваете его?', '');
    
    if (a != null && b != null && a != '' &&  b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    }  else {
        console.log('Error');
        i--;
    }          
}


console.log(personalMovieDB);