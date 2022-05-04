let numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
let countQuestions = 2;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < countQuestions; i++) {
  let firstOfLastFilm = prompt('Один из последних фильмов который смотрели?');  
  let markOfFilm = +prompt('Оценка этому фильму'); 

  personalMovieDB.movies[firstOfLastFilm] = markOfFilm;
}

console.log(personalMovieDB);