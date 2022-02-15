
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

// const a = prompt("Последний фильм который ты смотрел?"," "),
//       b = +prompt("Насколько оценишь?"," "),
//       c = prompt("Последний фильм который ты смотрел?"," "),
//       d = +prompt("Насколько оценишь?"," ");

//       personalMovieDB.movies[a]=b;
//       personalMovieDB.movies[c]=d;

if(personalMovieDB.count<10){
    alert("Просмотрено мало фильмов")
} else if (personalMovieDB.count>=10&&personalMovieDB.count<=30 ){
    alert("Вы классический зритель")
} else if(personalMovieDB.count>30){
    alert("Вы киноман")
} else {
    alert("Произошла ошибка")
}

      for (let i=0; i <2; i++){
        const a = prompt("Последний фильм который ты смотрел?"," "),
        b = +prompt("Насколько оценишь?"," ");
        personalMovieDB.movies[a]=b;
         if (a!=null && b!=null && a!="" && b!=""&& a.length<50) {
            personalMovieDB.movies[a]=b;
            console.log('done');
            } else {
            alert("Заполни снова");
            i--;    
             }
      }

 

      console.log(personalMovieDB);