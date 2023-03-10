// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getDirector(movie){
    return movie.director;
}
//array.filter(function(currentValue, index, arr), thisValue)
//array.indexOf(item, start)
function checkdirector (director,index,directorsArray){
    let firstOcurrence= directorsArray.indexOf(director);
    return index=== firstOcurrence;
}
function getAllDirectors(movies){
    const directorsArray = movies.map(getDirector);
    const directorsFiltered = directorsArray.filter(checkdirector);
    console.log(directorsFiltered);
    return directorsFiltered;
}


// function getAllDirectors(movies) {
// const directorsRaw= movies.map(movies=> movies.director );

// let directorFilter = directorsRaw.filter((director, index) =>
// directorsRaw.indexOf(director)===index);

// console.log(directorFilter);
// return directorFilter;
// }

// Jarko approach
    // let directosFilteredAlt = [... new Set(directorsRaw)];
    // console.log(directosFilteredAlt);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter
//the array so we can have only the drama movies where Steven Spielberg is the director.

//1- declaro mi funcion howmannymovies, que recibe un array com parametro.
//ahora queremos sacar de nuestra lista las peliculas de director steven y genre drama.
////array.filter(function(currentValue, index, arr), thisValue)
function checkSteven(movie){
    if(movie.director==='Steven Spielberg'){
        return true;
    }
    else{
        return false;
    }
    //otra opcion : return movie.director==='Steven Spielberg';
}

//array1.includes(2) check if array contains an element
function checkDrama(movie){
    if(movie.genre.includes("Drama")){
        return true;
    }
    else{
        return false;
    }
}

function howManyMovies(moviesArr){
    const StevenArr = moviesArr.filter(checkSteven);
    const DramaStevenArr = StevenArr.filter(checkDrama);
    return DramaStevenArr.length;

}


// // function howManyMovies(moviesArray) {
//     const filteredMovies = movies.filter((movie) =>{
//         return (movie.director ==="steven spielberg" && movie.genre.includes("drama"));
//     })
// return filteredMovies.length;
// }





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function getScore (movie){
   return movie.score;
}
function scoresAverage(moviesArray) {
    if(moviesArray.length===0){
        return 0;
    }
    const scores = moviesArray.map(getScore);
    
    let sum= 0;
    for(let i=0;i<scores.length;i++){
        let score= scores[i];
        sum= sum + score;
    }
    let average= sum/scores.length;
    let rounded = Number(average.toFixed(2));
    return rounded;
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovie= moviesArray.filter(checkDrama);
    return scoresAverage(dramaMovie);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}











// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}





















// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
// Iteraci??n 2:
// Utilizar el m??todo filter para crear un nuevo array  (pel??culas filtradas) que solo incluya pel??culas dirigidas por ???Steven Spielberg??? y del g??nero ???drama???
// Utilizar la propiedad length para encontrar el n??mero de pel??culas en el array filteredMovies
// Iteraci??n 3:
// Utilizar el m??todo reduce para calcular la puntuaci??n total de todas las pel??culas en el array de entrada (pel??culas)
// Utilizar el m??todo toFixed para dar formato a la puntuaci??n promedio a 2 puntos decimales
// Iteraci??n 4:
// Utilizar el m??todo filter para crear un nuevo array (dramaMoviesArray) que solo incluya pel??culas del g??nero ???drama???
// Pasar el dramaMoviesArray a la funci??n scoresAverage para encontrar la puntuaci??n promedio de las pel??culas de drama
// Iteraci??n 5:
// Utilizar el m??todo sort para ordenar el array de entrada (pel??culas) por a??o en orden ascendente
// Hacer una copia del array antes de ordenar para evitar modificar el array original
// Iteraci??n 6:
// Utilizar el m??todo map para crear un nuevo array de t??tulos de pel??culas del array de entrada (pel??culas)
// Utilizar el m??todo sort para ordenar el nuevo array alfab??ticamente
// Utilizar el m??todo slice para devolver los primeros 20 t??tulos del array ordenado.
// Iteraci??n 7:
// Utilizar el m??todo split para separar la palabra ???min??? de minutos y poder operar con los n??meros.
// Usar el m??todo Number() para que el split devuelva un n??mero
// Iteraci??n 8:
// Itera con un bucle foreach sobre el array
// ??Aprovecha las funciones que ya has creado para usarlas otra vez aqu??!