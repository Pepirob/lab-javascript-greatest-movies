// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) => {
        return movie.director;

    });
    return directors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let count = 0;
    moviesArray.filter((movie) => {
         if (movie.director === "Steven Spielberg" && movie.genre[movie.genre.indexOf("Drama")]) {
            return count++
         }
        })

    return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length ===0){
        return 0;
    }
    let totalScore = moviesArray.reduce((acc, movie) => {
       if(movie.score !== undefined) {
        return acc += movie.score;
       }else {
        return acc
    }
    }, 0)
    let avrg = totalScore / moviesArray.length;
    let avrgTwoDecimals = avrg.toFixed(2);
    return Number(avrgTwoDecimals);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter( (movie) => {
        return movie.genre.includes("Drama");

    });
    if(dramaMovies.length === 0){
        return 0;
    }
    let dramaScore = dramaMovies.reduce((acc, movie) => {
        if(movie.score !== undefined) {
            return acc += movie.score;
        }else {
            return acc
        }
    }, 0)
    let avrg = dramaScore / dramaMovies.length;
    let avrgTwoDecimals = avrg.toFixed(2);
    return Number(avrgTwoDecimals);
    
    
    

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clone = structuredClone(moviesArray);

    let newOrder = clone.sort ( (movie2, movie1) => {
         if (movie2.year < movie1.year) {
            return -1
        } else if (movie2.year > movie1.year){
            return 1
        } else{
            return movie2.title.localeCompare(movie1.title);

            }
    
            
        
    })
    return newOrder; 


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let clone = structuredClone(moviesArray);
    let newOrder = clone.sort((movie2, movie1) => movie2.title.localeCompare(movie1.title));

    let firstTwenty = newOrder.slice(0, 20);
    
    let titles = firstTwenty.map((movie) => {
        return movie.title;
    })
    return titles;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
