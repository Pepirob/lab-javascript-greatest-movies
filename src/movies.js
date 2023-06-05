// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  // bonus
  const uniqueDirectors = directors.reduce((unique, director) => {
    if (!unique.includes(director)) {
      unique.push(director);
    }
    return unique;
  }, []);
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let avrgScore =
    moviesArray.reduce((acc, movie) => {
      if (movie.score) {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0) / moviesArray.length;

  return Number(avrgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  return copy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  const sortedArr = copy
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  if (sortedArr.length > 20) {
    return sortedArr.slice(0, 20);
  } else {
    return sortedArr;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  return copy.map((movie) => {
    const hours = movie.duration.trim().slice(0, movie.duration.indexOf("h"));

    const minutes = movie.duration
      .trim()
      .slice(movie.duration.indexOf("h") + 1, movie.duration.indexOf("m"));

    const result = Number(hours) * 60 + Number(minutes);
    console.log(result);
    return { ...movie, duration: result };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
