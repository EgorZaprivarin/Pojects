let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   let anyFilm = prompt('Один из последних просмотренныхфильмов?'),
      filmScore = +prompt('На сколько оцените его?');

   personalMovieDB.movies[anyFilm] = filmScore;
}
