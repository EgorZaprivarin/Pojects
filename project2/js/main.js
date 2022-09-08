let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

   while (!numberOfFilms) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let anyFilm = prompt('Один из последних просмотренныхфильмов?'),
         filmScore = +prompt('На сколько оцените его?');

      if (!anyFilm || anyFilm.length > 50 || !filmScore) {
         i--;
         continue;
      }

      personalMovieDB.movies[anyFilm] = filmScore;
   }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDB(obj) {
   if (obj.privat === false) {
      console.log(obj);
   }
}

writeYourGenres();
showMyDB(personalMovieDB);

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
   }
}