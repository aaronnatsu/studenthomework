let user = prompt ('What is your name?', 'Valentin');

const numberOfFilms = +prompt(`Сколько фильмов ты видел, ${user}?`);
//let yourGenres = '';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
//    genres: yourGenres,
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Что советуешь посмотреть?', ''),
        b = prompt('На сколько оценишь?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Не, совета твоего спрашивать рано");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вероятно тебе есть о чем рассказать");
} else if (personalMovieDB.count >= 30) {
    console.log("Жду ваших рекомендаций");
} else {
    console.log("Ты шо дурной");
}

console.log(personalMovieDB);

