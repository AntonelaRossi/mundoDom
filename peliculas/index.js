const apiKey = "aaac14e6ce98e6590f7e57b4e08e1c14";

// https://api.themoviedb.org/3/movie?api_key=aaac14e6ce98e6590f7e57b4e08e1c14

const input = document.querySelector("input #search");
const body = document.querySelector("body")

const popular =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

// const todasLaspeliculas = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input.value}`

function traerPeliculas(url, categoria) {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                const ul = document.querySelector(categoria)
                const primerasPelis = data.results.slice(0, 5);
                let lis = '';

                for (let i = 0; i < primerasPelis.length; i++) {

                    lis +=
                        `<li> 
                        <img src= "https://image.tmdb.org/t/p/original${primerasPelis[i].poster_path}">
                        <p>${primerasPelis[i].title}</p>
                    </li>
                    `;

                    // console.log(data.results[i].poster_path)
                
                }
                // console.log("lis", lis);

                ul.innerHTML = lis;
                console.log("ul", ul)
            });

    }


console.log(traerPeliculas(popular, "#pelis-popular"))
traerPeliculas(topRated, "#pelis-topRated")
traerPeliculas(upcoming, "#pelis-upcoming")
traerPeliculas(nowPlaying, "#pelis-nowPlaying")



// input.addEventListener('keypress', function (e) {

//     if (e.keyCode === 13) {

//         const movieName = input.value;

//         const movieLower = movieName.toLowerCase();

//         fetch(todasLaspeliculas )

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

// const image = document.querySelector('#movie img');
