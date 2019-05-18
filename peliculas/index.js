const apiKey = "aaac14e6ce98e6590f7e57b4e08e1c14";

// https://api.themoviedb.org/3/movie/popular?api_key=${aaac14e6ce98e6590f7e57b4e08e1c14}

const input = document.querySelector("input #search");
const categoria = "popular"


// //ES UN FETCH POR CADA UNO
// // categoria Popular
// `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
// // categoría Top Rated
// `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
// // categoría Upcoming
// `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
// // categoría Now Playing
// `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

function traerDatos () {
    
    const user = input.value

    if (user) {
        
        const url = `https://api.themoviedb.org/3/movie/${categoria}/api_key=${apiKey}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                
                const ulPeliculas = document.querySelector("ul")

                for (let i = 0; i < results.length; i++) {
                    results[i].poster_path
                    
                }

                
                
                
               

                document
                    .querySelector("contenedor-peliculas")
                    .innerHTML = ulPeliculas.join("");
            })

    }
}












// input.addEventListener('keypress', function (event) {

//     if (event.keyCode === 13) {

//         const movieName = input.value;

//         const movieLower = movieName.toLowerCase();

//         fetch(`https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`)

//             .then(res => res.json()) 
//             .then(movie => { 
                
//                 title.innerText = movie.Title;
//                 rated.innerText = movie.Rated;
//                 year.innerText = movie.Year;
//                 genre.innerText = movie.Genre;
//                 description.innerText = movie.Plot;
//                 writtenBy.innerText = movie.Writer;
//                 directedBy.innerText = movie.Director;
//                 starring.innerText = movie.Actors;

//                 image.src = movie.Poster;

//             })

//     }

// })

// obtengo todos los elementos que necesito modificar ESTO ES PARA EL MODAL
// const title = document.querySelector('.movie-info .title');
// const rated = document.querySelector('#rated');
// const year = document.querySelector('#year');
// const genre = document.querySelector('#genre');
// const description = document.querySelector('.movie-info .description');
// const writtenBy = document.querySelector('.movie-info .written-by span');
// const directedBy = document.querySelector('.movie-info .directed-by span');
// const starring = document.querySelector('.movie-info .starring span');
// const image = document.querySelector('#movie img');
