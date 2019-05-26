const apiKey = "aaac14e6ce98e6590f7e57b4e08e1c14";

// https://api.themoviedb.org/3/movie?api_key=aaac14e6ce98e6590f7e57b4e08e1c14

const input = document.querySelector("input");
const body = document.querySelector("body")
const agarrarModal = document.getElementById("modal");
const agarrarCruz = document.getElementById("cerrar-modal")

//para la home
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

const textoBusqueda = input.value;
const paginaActual = 1;

//para las paginas internas
const banner = document.querySelector("#banner")
const contenedorPeliculas = document.querySelector("#contenedor-peliculas")

const popularTodas = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`
const topRatedTodas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${paginaActual}`
const upcomingTodas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${paginaActual}`
const nowPlayingTodas = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${paginaActual}`

const searchTodas = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusqueda}&page=${paginaActual}`



// const todasLaspeliculas = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input.value}`


//trae peliculas a la Home
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
                    `<li id=${primerasPelis[i].id} class= "lista-peliculas" > 
                    
                        
                        <img src= "https://image.tmdb.org/t/p/original${primerasPelis[i].poster_path}" class="peliculaImg" >
                       
                        <p>${primerasPelis[i].title}</p>
                        </a>
                    </li>
                    `;

            }

            ul.innerHTML = lis;


            // MODAL
            document
                .querySelectorAll("li.lista-peliculas")
                .forEach(function (li) {

                    li.addEventListener("click", function (e) {
                        const peliculaId = e.currentTarget.id;

                        fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`)
                            .then(res => res.json())
                            .then(data => {

                                document.querySelector('#modal .title').innerHTML = data.original_title;
                                document.querySelector('#modal .overview').innerHTML = data.overview;
                                document.querySelector('#modal .posterModal').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
                                document.querySelector('#modal .backdropModal').src = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
                                document.querySelector('#modal .genresInfo').innerHTML = data.genre_id;
                                document.querySelector('#modal .yearInfo').innerHTML = data.release_date;

                                agarrarModal.classList.remove("displayNone")
                                agarrarModal.classList.add("displayActive")
                                agarrarCruz.classList.remove("displayNone")
                                agarrarCruz.classList.add("displayActive")

                            })

                    })

                })


        });
}



function cerrar() {
    // agarrarCruz.classList.remove("displayActive")
    agarrarCruz.classList.add("displayNone")
    agarrarModal.classList.add("displayNone")
}

agarrarCruz.onclick = cerrar

traerPeliculas(popular, "#pelis-popular")
traerPeliculas(topRated, "#pelis-topRated")
traerPeliculas(upcoming, "#pelis-upcoming")
traerPeliculas(nowPlaying, "#pelis-nowPlaying")




// traer peliculas por categoria tocando la nav-bar
function traerCategorias(urlInternas, categoriaElegida) {
    console.log("algo")

    banner.classList.add("displayNone")
    contenedorPeliculas.classList.add("displayNone")

    fetch(urlInternas)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            const ul = document.querySelector(categoriaElegida)

            let lis = '';

            for (let i = 0; i < data.results.length; i++) {

                lis +=
                    `<li id=${data.results[i].id} class= "lista-peliculas" > 
                    
                        
                        <img src= "https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="peliculaImg" >
                       
                        <p>${data.results[i].title}</p>
                        </a>
                    </li>
                    `;

            }

            ul.innerHTML = lis;
            console.log(ul)
        }
        )
}

// selecciono de la NAV BAR los botones
const elementosPopular = document.querySelector("#popular")
const elementosTopRated = document.querySelector("#topRated")
const elementosUpcoming = document.querySelector("#upcoming")
const elementosNowPlaying = document.querySelector("#nowPlaying")

console.log(elementosPopular)

// selecciono los divs donde estan creadas las ul y los lis
const categoriaPopular = document.querySelector("#pelis-popular")
const categoriaTopRated = document.querySelector("#pelis-topRated")
const categoriaUpcoming = document.querySelector("#pelis-upcoming")
const categoriaNowPlaying = document.querySelector("#pelis-nowPlaying")

// onclick en cada boton de la nav, le aplico la funcion que las trae
elementosPopular.onclick = () => traerCategorias(popularTodas,categoriaPopular)
elementosTopRated.onclick = () => traerCategorias(topRatedTodas, categoriaTopRated)
elementosUpcoming.onclick = () => traerCategorias(upcomingTodas, categoriaUpcoming)
elementosNowPlaying.onclick = () => traerCategorias(nowPlayingTodas, categoriaNowPlaying)
























// EL INPUT
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


