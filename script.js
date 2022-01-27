
alert ("Hello");

const numberOfFilms = +prompt("Сколько фильмов ты смотрел?");
alert (numberOfFilms);

const personalMovieDB = {
count: numberOfFilms,
movies:{},
actors:{},
genres:[],
privat: false
};
console.log(personalMovieDB);

const a = prompt("Последний фильм который ты смотрел?"," "),
      b = +prompt("Насколько оценишь?"," "),
      c = prompt("Последний фильм который ты смотрел?"," "),
      d = +prompt("Насколько оценишь?"," ");

      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;

      console.log(personalMovieDB);