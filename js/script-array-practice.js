
//STEP 1
let favoriteMovies = ['Pride and Prejudice', 'Inglorious Bastards', 'Klaus', 'John Wick', 'John Wick: Chapter Five']

console.log(favoriteMovies[1])

/*
//STEP 2
let movies = new Array(5)
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'

console.log(movies[0])

//STEP 3
let movies = new Array(5)
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'

console.log(movies[0])

movies.splice(2, 0, 'Fast & Furious 6')

console.log(movies.length)

//STEP 4
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'

delete movies[0]

console.log(movies)

//STEP 5
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

for (let movie in movies) {
    console.log(movies[movie])
}

//STEP 6
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

for (let i of movies) {
    console.log(i)
}

//STEP 7
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 5'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 2'
movies[5] = 'Fast & Furious 7'
movies[6] = 'Fast & Furious 6'

for (let i of movies) {
    movies.sort()
    console.log(i)
}

//STEP 8
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

let leastFavMovies = ['Monty Python and the Holy Grail', 'Elf', 'Nacho Libre']

function displayMovies() {
    console.log('Movies I like:\n\n')
for (let movie in movies) {
    console.log(movies[movie])
}
    console.log('...\n\n')
    console.log('Movies I regret watching:\n\n')

for (let movie in leastFavMovies) {
    console.log(leastFavMovies[movie])
}
console.log('...')
}
displayMovies()

//STEP 9
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

let leastFavMovies = ['Monty Python and the Holy Grail', 'Elf', 'Nacho Libre']

movies = movies.concat(leastFavMovies)
console.log(movies.reverse())

//STEP 10
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

let leastFavMovies = ['Monty Python and the Holy Grail', 'Elf', 'Nacho Libre']

movies = movies.concat(leastFavMovies)
movies = movies.reverse()
console.log(movies.slice(-1))


//STEP 11
let movies = []
movies[0] = 'Fast & Furious'
movies[1] = 'Fast & Furious 2'
movies[2] = 'Fast & Furious 3'
movies[3] = 'Fast & Furious 4'
movies[4] = 'Fast & Furious 5'
movies[5] = 'Fast & Furious 6'
movies[6] = 'Fast & Furious 7'

let leastFavMovies = ['Monty Python and the Holy Grail', 'Elf', 'Nacho Libre']

movies = movies.concat(leastFavMovies)
movies = movies.reverse()
console.log(movies[0])


//STEP 12
let findBadMovie
let findGoodMovie
let betterMovies = ['Fast & Furious 8', 'Fast & Furious 9', 'Fast & Furious 10']

function findLeastFavMovie(i) {
    return leastFavMovies[i]
}
function findBetterMovie(i) {
    return betterMovies[i]
}

function findBadMovieIndex() {
    return movies.indexOf(findBadMovie)
}

for (let i = 0; i < leastFavMovies.length; i++) {
    findBadMovie = findLeastFavMovie(i)
    findGoodMovie = findBetterMovie(i) 
    let theIndex = findBadMovieIndex()
    let newMovieIndex = findBetterMovie(i)
    movies.splice(theIndex, 1, newMovieIndex)
}

//STEP 13
let topFiveMovies = [
    ['Fast & Furious', 1],
    ['Fast & Furious 2', 2],
    ['Fast & Furious 3', 3],
    ['Fast & Furious 4', 4],
    ['Fast & Furious 5', 5]
]

let movieNames = topFiveMovies((item) => {
    return typeof item === 'string'
})
console.log(movieNames)

//STEP 14
let employees = ['Rachel Ray', 'Mike Tyson', 'Jack in the Box']

function showEmployee(array) {
    console.log('Employees:')
    console.log('')

    for (let item of array) {
        console.log(item)
    } 
}
showEmployee(employees)

//STEP 15
function filterValues(item) {
    if(item !== false || item !== null || item !== 0 || item !== '') {
        return item;
    }
}

//STEP 16
console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 17
function randomItem(array) {
return array[Math.floor(Math.random()*array.length)]    
}

*/